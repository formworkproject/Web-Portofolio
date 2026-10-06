# Aditya Grimaldi — Civil Engineering Portfolio

Premium personal portfolio website for a civil engineering professional, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm installed

### Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## How to Edit Content

All portfolio content is centralized in the `data/` directory. You should rarely need to edit component files.

### Edit Personal Information

File: `data/site.ts`

- Update name, role, location
- Add social links (LinkedIn, GitHub, Instagram, WhatsApp, Email)
- Replace `[ADD LINK]` placeholders with actual URLs

### Add/Edit Projects

File: `data/projects.ts`

Each project has this structure:

```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-slug',      // Used for /projects/[slug] URL
  title: 'Project Title',
  category: 'Category',
  year: '2024',
  role: 'Your Role',
  location: 'Location',
  thumbnail: '/images/projects/folder/overview.jpg',
  summary: 'Short summary',
  description: 'Full description',
  tools: ['AutoCAD', 'Revit'],
  responsibilities: ['Task 1', 'Task 2'],
  objectives: ['Objective 1'],
  workflow: ['Step 1', 'Step 2'],
  deliverables: ['Deliverable 1'],
  results: ['Result 1'],
  gallery: [
    { src: '/images/projects/folder/image.jpg', caption: 'Caption', type: 'drawing' }
  ],
  documents: [],
  featured: true,                  // Show on homepage
  tags: ['Tag1', 'Tag2']
}
```

To add a new project:
1. Add a new object to the `projects` array in `data/projects.ts`
2. Create image folder: `public/images/projects/your-project-slug/`
3. Add project images to that folder
4. The project page is automatically generated at `/projects/your-slug`

### Edit Skills

File: `data/skills.ts`

Skills are grouped by category. Each skill has a proficiency level:
- `Core` — primary skills
- `Working Knowledge` — competent skills
- `Developing` — growing skills

### Edit Experience

File: `data/experience.ts`

Add professional experience entries with title, company, period, responsibilities, and tools.

### Edit Education

File: `data/education.ts`

### Edit Certifications

File: `data/certificates.ts`

Replace `[ADD ISSUER]`, `[ADD YEAR]`, and other placeholders with actual values.

### Edit Hero Statistics

File: `data/metrics.ts`

## Where to Put Files

### Project Images

```
public/images/projects/
├── rusun-kejaksaan/
│   ├── overview.jpg        # Thumbnail
│   ├── drawing-01.jpg      # Gallery images
│   └── drawing-02.jpg
├── rusunawa-umri/
│   ├── overview.jpg
│   └── model-01.jpg
└── drainage/
    ├── overview.jpg
    └── drawing-01.jpg
```

Image naming convention:
- `overview.jpg` — project thumbnail
- `drawing-01.jpg`, `drawing-02.jpg` — technical drawings
- `model-01.jpg` — 3D models
- `detail-01.jpg` — detail shots
- `photo-01.jpg` — site photos

### CV / Resume

Place your CV at:

```
public/files/Aditya-Grimaldi-CV.pdf
```

The "Download CV" button throughout the site links to this file.

### Favicon

Replace the default favicon:

```
public/favicon.ico
```

### Social Preview Image (Open Graph)

```
public/images/og-image.jpg     # 1200x630px recommended
```

## Updating Social Links

Edit `data/site.ts` and replace placeholder values:

```typescript
socialLinks: {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  instagram: 'https://instagram.com/your-handle',
  whatsapp: 'https://wa.me/628xxxxxxxxxx',
  email: 'your.email@example.com',
}
```

Social links with `[ADD LINK]` as value will show as placeholders in the UI.

## Project Structure

```
portfolio/
├── app/                    # Next.js pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout + metadata
│   ├── globals.css         # Global styles + design tokens
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── experience/page.tsx
│   ├── skills/page.tsx
│   └── projects/
│       ├── page.tsx        # Projects listing
│       └── [slug]/page.tsx # Dynamic case study
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI primitives
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── footer.tsx
│   └── ...
├── data/                   # Content data (edit here!)
│   ├── site.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── certificates.ts
│   └── metrics.ts
├── lib/                    # Utilities
│   └── utils.ts
└── public/                 # Static assets
    ├── images/
    ├── files/
    └── icons/
```

## Deploy to Vercel

### Option 1: Deploy via GitHub

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js — click "Deploy"
6. Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Remaining Content to Replace

Search for these placeholders in the `data/` files:

- `[ADD EMAIL]` — your email address
- `[ADD LINK]` — social media links
- `[ADD NUMBER]` — WhatsApp number
- `[ADD PROJECT YEAR]` — project dates
- `[ADD PROJECT VALUE]` — project values
- `[ADD RESULTS]` — project results
- `[ADD CAPTION]` — image captions
- `[ADD ISSUER]` — certificate issuers
- `[ADD YEAR]` — certificate years
- `[ADD CREDENTIAL]` — credential IDs
- `[ADD CERTIFICATE]` — certificate images

## License

Private portfolio. All rights reserved.
