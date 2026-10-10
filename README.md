# Kamalesh R — AI/ML Engineering Portfolio

A modern, responsive personal portfolio website for **Kamalesh R**, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Jeppiaar Engineering College, Chennai.

## 1. Local Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 2. Customizing Content (`src/data/portfolioData.ts`)

All personal details, project achievements, skills, education milestones, certifications, leadership highlights, and contact links are centralized in **`src/data/portfolioData.ts`**.

- **Adding Project Repository or Live Demo Links:**
  Open `src/data/portfolioData.ts` and update `githubUrl` or `liveDemoUrl` inside the `projects` array:
  ```ts
  githubUrl: 'https://github.com/yourusername/spam-sms-detector',
  liveDemoUrl: 'https://your-demo-link.vercel.app',
  ```
  Once populated, the project detail modal automatically renders live **GitHub Repository** and **Live Demo** buttons.

- **Adding a Footer GitHub Icon:**
  Set `contact.githubUrl` in `src/data/portfolioData.ts` to your GitHub profile URL.

---

## 3. Replacing or Uploading Your Profile Photo

- **Static File Method:** Place your profile photo in the `public/` folder (for example, `public/profile-photo.jpg`) and set `personal.profileImagePath: '/profile-photo.jpg'` in `src/data/portfolioData.ts`.
- **Interactive Browser Upload:** Click the **Upload Your Photo** button directly below the circular orange frame in the Hero section to preview and persist your photo in the browser.

---

## 4. Replacing Certificate Images (`public/certificate-assets/`)

The automatic certificate carousel is configured to display your actual certificate images without cropping signatures or text:

1. Place your certificate image files (`.png`, `.jpg`, or `.webp`) inside `public/certificate-assets/`:
   - `public/certificate-assets/google-generative-ai-2026.png`
   - `public/certificate-assets/infosys-ai-ml-fundamentals-2026.png`
   - `public/certificate-assets/amazon-ml-ai-fundamentals-2026.png`
2. Or click **Upload Certificate Image** directly on any slide in the Certifications carousel to upload and preview your certificate immediately in the browser.

---

## 5. Replacing the Resume PDF

- **Built-in Verified PDF:** Out of the box, clicking **Download Resume** generates and downloads a valid, standards-compliant `Kamalesh_R_Resume.pdf` containing all verified resume sections.
- **Using Your Own Custom PDF File:**
  - **Static Method:** Drop your PDF file at `public/Kamalesh_R_Resume.pdf`. The download handler automatically detects and serves `public/Kamalesh_R_Resume.pdf`.
  - **Interactive Browser Link:** Click **Link PDF** in the Hero card to attach your PDF file directly in the browser.

---

## 6. Deployment (Vercel / GitHub Pages)

- **Vercel:** Import the repository into Vercel with the **Vite** framework preset (`npm run build`, output directory `dist`).
- **GitHub Pages:** Run `npm run build` and deploy the `dist/` directory using `gh-pages` or GitHub Actions.
