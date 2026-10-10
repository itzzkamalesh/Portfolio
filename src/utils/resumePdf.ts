import { PORTFOLIO_DATA } from '../data/portfolioData';

/**
 * Escapes special PDF text characters.
 */
function escapePdfText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/—/g, '-')
    .replace(/–/g, '-')
    .replace(/·/g, '|');
}

/**
 * Wraps a long string into lines of maximum `maxChars` characters.
 */
function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if ((current + ' ' + word).trim().length <= maxChars) {
      current = (current + ' ' + word).trim();
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/**
 * Generates a valid, standards-compliant PDF 1.4 binary string containing
 * strictly verified information from Kamalesh R's resume in PORTFOLIO_DATA.
 * Ensures the Download Resume button always downloads a real, openable PDF
 * rather than an HTML page or broken link.
 */
export function buildVerifiedResumePdfBytes(): Uint8Array {
  const { personal, about, skillCategories, projects, education, certifications, leadership, strengthsAndInterests, contact } =
    PORTFOLIO_DATA;

  let y = 752;
  const ops: string[] = [];

  const drawText = (
    text: string,
    x: number,
    yPos: number,
    font: 'F1' | 'F2',
    size: number,
    rgb: [number, number, number] = [0.08, 0.08, 0.09]
  ) => {
    ops.push(
      `BT /${font} ${size} Tf ${rgb[0]} ${rgb[1]} ${rgb[2]} rg ${x} ${yPos} Td (${escapePdfText(
        text
      )}) Tj ET`
    );
  };

  const drawLine = (x1: number, y1: number, x2: number, y2: number, rgb: [number, number, number] = [0.85, 0.85, 0.85], width = 0.6) => {
    ops.push(`${width} w ${rgb[0]} ${rgb[1]} ${rgb[2]} RG ${x1} ${y1} m ${x2} ${y2} l S`);
  };

  const addSectionHeader = (title: string) => {
    y -= 14;
    drawText(title.toUpperCase(), 48, y, 'F2', 9.5, [0.92, 0.42, 0.06]);
    y -= 4;
    drawLine(48, y, 564, y, [0.88, 0.88, 0.88], 0.75);
    y -= 11;
  };

  // Top Header
  drawText(personal.name, 48, y, 'F2', 18, [0.06, 0.06, 0.08]);
  y -= 14;
  drawText(personal.role, 48, y, 'F2', 10, [0.92, 0.42, 0.06]);
  y -= 13;
  drawText(
    `${contact.location}  |  ${contact.email}  |  ${contact.linkedinDisplay}`,
    48,
    y,
    'F1',
    8.5,
    [0.32, 0.32, 0.35]
  );

  // Summary
  addSectionHeader('Professional Summary');
  const summaryLines = wrapText(about.introduction, 96);
  for (const line of summaryLines) {
    drawText(line, 48, y, 'F1', 8.5, [0.15, 0.15, 0.18]);
    y -= 11;
  }

  // Education
  addSectionHeader('Education');
  for (const edu of education) {
    const titleLine = edu.specialization
      ? `${edu.degree} (${edu.specialization})`
      : edu.degree;
    drawText(titleLine, 48, y, 'F2', 9, [0.08, 0.08, 0.1]);
    drawText(edu.period, 470, y, 'F2', 8.5, [0.35, 0.35, 0.38]);
    y -= 11;
    const subDetails = [
      edu.institution,
      edu.expectedGraduation ? `Expected Graduation: ${edu.expectedGraduation}` : '',
      edu.score ? edu.score : '',
    ]
      .filter(Boolean)
      .join('  |  ');
    drawText(subDetails, 48, y, 'F1', 8.2, [0.28, 0.28, 0.32]);
    y -= 11;
    if (edu.coursework && edu.coursework.length > 0) {
      drawText(`Relevant Coursework: ${edu.coursework.join(', ')}`, 48, y, 'F1', 8, [0.35, 0.35, 0.4]);
      y -= 11;
    }
    y -= 2;
  }

  // Technical Skills
  addSectionHeader('Technical Skills');
  for (const cat of skillCategories) {
    const skillList = cat.skills.map((s) => s.name).join(', ');
    const lines = wrapText(`${cat.title}: ${skillList}`, 95);
    lines.forEach((line, idx) => {
      drawText(line, 48, y, idx === 0 ? 'F2' : 'F1', 8.3, [0.15, 0.15, 0.18]);
      y -= 11;
    });
  }

  // Featured Projects
  addSectionHeader('Featured AI & Machine Learning Projects');
  for (const proj of projects) {
    drawText(`${proj.title}  [${proj.technologies.join(', ')}]`, 48, y, 'F2', 9, [0.08, 0.08, 0.1]);
    y -= 11;
    for (const hl of proj.highlights) {
      const wrappedHl = wrapText(`- ${hl}`, 94);
      for (const line of wrappedHl) {
        drawText(line, 56, y, 'F1', 8.2, [0.2, 0.2, 0.24]);
        y -= 10.5;
      }
    }
    y -= 3;
  }

  // Certifications
  addSectionHeader('Certifications');
  for (const cert of certifications) {
    drawText(`- ${cert.title} - ${cert.issuer} (${cert.year})`, 48, y, 'F1', 8.4, [0.15, 0.15, 0.18]);
    y -= 11;
  }

  // Leadership & Strengths
  addSectionHeader('Leadership, Strengths & Languages');
  drawText(
    `${leadership.role}, ${leadership.organization} (${leadership.period}): ${leadership.description}`,
    48,
    y,
    'F1',
    8.2,
    [0.15, 0.15, 0.18]
  );
  y -= 11;
  drawText(
    `Professional Strengths: ${strengthsAndInterests.professionalStrengths.join(', ')}`,
    48,
    y,
    'F1',
    8.2,
    [0.2, 0.2, 0.24]
  );
  y -= 11;
  const langStr = strengthsAndInterests.languages
    .map((l) => `${l.language} (${l.proficiency})`)
    .join(', ');
  drawText(`Languages: ${langStr}`, 48, y, 'F1', 8.2, [0.2, 0.2, 0.24]);

  const streamContent = ops.join('\n');

  const objects: string[] = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
    '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [0];

  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i <= objects.length; i++) {
    const offsetStr = String(offsets[i]).padStart(10, '0');
    pdf += `${offsetStr} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const encoder = new TextEncoder();
  return encoder.encode(pdf);
}

/**
 * Triggers a reliable download of Kamalesh R's Resume PDF.
 * Checks if a user-replaced PDF was uploaded in localStorage or static /Kamalesh_R_Resume.pdf
 * with a valid application/pdf header; otherwise downloads the verified generated PDF.
 */
export async function downloadResumePdf(): Promise<void> {
  const customResumeDataUrl = localStorage.getItem('kamalesh_custom_resume_pdf');
  const fileName = PORTFOLIO_DATA.personal.resumeFileName;

  if (customResumeDataUrl && customResumeDataUrl.startsWith('data:application/pdf')) {
    const link = document.createElement('a');
    link.href = customResumeDataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  try {
    const response = await fetch(PORTFOLIO_DATA.personal.staticResumePath, { method: 'GET' });
    const contentType = response.headers.get('content-type') || '';
    if (response.ok && contentType.includes('application/pdf')) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      return;
    }
  } catch {
    // Fallback to verified built-in PDF generator below
  }

  const pdfBytes = buildVerifiedResumePdfBytes();
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
