# Portfolio: Syed Mohsin Taseer Naqvi

Next.js 14 (App Router, TypeScript) with a Node.js API route (`/api/contact`, Nodemailer) for the contact form.

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in SMTP_PASS
npm run dev                  # http://localhost:3000
```

## Edit content
All text lives in `lib/data.ts`. Replace the photo at `public/profile.jpg`. Colours are at the top of `app/globals.css`.

## Go live (free, Vercel)
1. Create a GitHub repo and push this folder.
2. Go to vercel.com, sign in with GitHub, click **Add New > Project**, pick the repo, click **Deploy**.
3. In Vercel > Settings > Environment Variables add `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, then redeploy.
4. Share the `https://<name>.vercel.app` link.
