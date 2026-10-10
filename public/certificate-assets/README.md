# Certificate Assets Directory (`public/certificate-assets/`)

Place your actual certificate image files (`.png`, `.jpg`, or `.webp`) in this directory so the automatic certificate carousel displays your official credentials.

## Expected Filenames

Configured in `src/data/portfolioData.ts`:

1. `google-generative-ai-2026.png` — **Introduction to Generative AI** (Google, 2026)
2. `infosys-ai-ml-fundamentals-2026.png` — **Fundamentals of AI & Machine Learning** (Infosys, 2026)
3. `amazon-ml-ai-fundamentals-2026.png` — **Fundamentals of Machine Learning and Artificial Intelligence** (Amazon, 2026)

## How to Replace or Upload

- **Option 1 (Permanent Static Files):** Drop your high-resolution certificate images into `public/certificate-assets/` using the exact filenames above (or update `imagePath` in `src/data/portfolioData.ts`).
- **Option 2 (Interactive Preview in Browser):** Click the **"Upload Certificate Image"** button directly on any certificate slide or inside its lightbox modal to preview and persist your certificate image in the browser immediately.
