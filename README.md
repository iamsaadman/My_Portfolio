This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form email

The contact form sends a same-origin `POST` request to `/api/contact`, so it uses HTTPS when the deployed site is served over HTTPS. Email delivery is handled by Resend. Set these server-side environment variables in `.env.local` for local development and in your hosting provider for deployment:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM="Portfolio Contact <contact@your-verified-domain.com>"
# Optional; defaults to the email in data/site.ts.
EMAIL_TO=saadmansakib2002@gmail.com
```

Verify the sender domain with Resend before using it. Keep `RESEND_API_KEY` server-side; do not expose it through a `NEXT_PUBLIC_` variable. The Gmail links on the site open a compose window addressed to `saadmansakib2002@gmail.com`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
