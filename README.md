# Saadman Portfolio

## GitHub Pages deployment

Every push to `main` builds and publishes the static site to GitHub Pages using `.github/workflows/deploy.yml`.

The published site is available at <https://iamsaadman.github.io/My_Portfolio/>.

For the first deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. After that, pushes deploy automatically; `npm run dev` is only needed for local development.

## Contact form

GitHub Pages serves static files and cannot run a server-side email API. The contact form validates the message and opens a prefilled Gmail draft addressed to `saadmansakib2002@gmail.com`; visitors review and send it from Gmail.

## Local development

Install dependencies and run the local development server when making changes:

```bash
npm ci
npm run dev
```
