# Africa Power Advisory Holding Website Handoff

Saved project root:

`/Users/richka/Downloads/Demo/website`

## Main code location

All website code is inside:

`/Users/richka/Downloads/Demo/website`

Important folders:

- `app/` - Next.js routes, bilingual pages, metadata and API routes
- `app/[lang]/` - French and English pages
- `app/api/contact/route.ts` - server-side contact validation and Google reCAPTCHA verification
- `components/` - header, footer, forms, search, theme toggle and shared UI
- `lib/site-data.ts` - bilingual content, services, offices and expert data
- `public/assets/brand/` - APAH logo assets
- `public/assets/team/` - supplied team photographs and approved placeholder asset
- `app/globals.css` - visual design system and responsive styles

## Contact and reCAPTCHA files

- `components/contact-form.tsx` - required contact fields, bilingual validation and Google callback button
- `app/api/contact/route.ts` - backend validation and server-side token verification
- `.env.example` - safe credential template

## Credentials

No real credentials are currently saved in this workspace.

The required local credential file should be created here:

`/Users/richka/Downloads/Demo/website/.env.local`

Use this structure:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_google_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_google_recaptcha_secret_key
```

Credential rules:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is the public Google reCAPTCHA site key used by the browser.
- `RECAPTCHA_SECRET_KEY` is private and used only by `app/api/contact/route.ts`.
- Never place the secret key in React components, `public/`, Git, screenshots or client-side code.
- `.env*` files are ignored by `.gitignore`.
- Restart the Next.js server after creating or changing `.env.local`.

## Office contact input

Unverified phone numbers and email addresses are intentionally not published.

Official contact detail template:

`/Users/richka/Downloads/Demo/official-office-contact-details.md`

## Verification commands

From the website folder:

```bash
cd /Users/richka/Downloads/Demo/website
npm run lint
npm run build
npm run dev -- --hostname 0.0.0.0
```

## Current validation status

- Lint passed during the latest update.
- Production build passed during the latest update.
- Bilingual static pages and dynamic `/api/contact` route compile successfully.
- Contact submissions are rejected when fields are invalid or reCAPTCHA verification is missing/invalid.
