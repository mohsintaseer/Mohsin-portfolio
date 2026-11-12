# Mohsin Portfolio

A modern portfolio website for Syed Mohsin Taseer Naqvi, built with Next.js 14, TypeScript, and App Router. The site showcases projects, experience, skills, and academic highlights, along with a working contact form powered by Nodemailer.

## Live preview

- Local development: http://localhost:3000
- Production deployment: configure your own Vercel domain or custom domain

## Features

- Responsive personal portfolio landing page
- Project showcase cards with technology tags
- Experience timeline and skills section
- Convocation and academic highlight sections
- Contact form with server-side validation and email delivery
- Clean animations and visual effects using custom CSS and React components

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Node.js
- Nodemailer

## Project structure

```text
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ContactForm.tsx
│   ├── AgentGraph.tsx
│   ├── AgentPipeline.tsx
│   └── Fx.tsx
├── lib/
│   └── data.ts
├── public/
│   ├── profile.jpg
│   └── convocation/
├── .env.example
├── .gitignore
├── next.config.js
├── next-env.d.ts
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Prerequisites

Before running the project, make sure you have installed:

- Node.js 18+
- npm

## Getting started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create your local environment file from the example:

```bash
copy .env.example .env.local
```

4. Update the values in `.env.local`:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
CONTACT_TO=your-receiving-email@example.com
```

Notes:
- `SMTP_PASS` should be a Gmail App Password if you use Gmail.
- `CONTACT_TO` is the email address that receives messages from the portfolio form.

## Run locally

```bash
npm run dev
```

Then open: http://localhost:3000

## Build for production

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Customizing content

Most portfolio content is centralized in `lib/data.ts`.

Update the following there:

- Profile bio and contact details
- Experience entries
- Education details
- Skills
- Project list
- Events and achievements

You can also replace the profile image in `public/profile.jpg` and adjust visual styling in `app/globals.css`.

## Deployment on Vercel

1. Push the project to GitHub.
2. Log in to Vercel.
3. Import the repository as a new project.
4. Add the environment variables in the Vercel dashboard:
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO`
5. Deploy the project.

## Contact form setup

The contact form submits to `/api/contact` and sends mail using Nodemailer. It includes:

- Input validation
- Email format checks
- Honeypot protection using a hidden field
- Error handling for empty or misconfigured environment variables

## License

This project is for personal portfolio use and is not licensed for redistribution without permission.
