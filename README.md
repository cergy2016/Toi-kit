# TOEIC Mastery Toolkit, 2026 Edition

Offline TOEIC study app. React 19, Vite, Tailwind 4. No backend. Progress is stored in the user's browser.
The optional AI Coach uses the user's own free Gemini (AIza...) or Groq (gsk_...) key.

## Run locally
```
npm install
npm run dev
```

## Deploy on Vercel
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

## Notes
- Independent study tool. Not affiliated with or endorsed by ETS. TOEIC is a registered trademark of ETS.
- All questions are original material.
- Correct answer positions are balanced at load time by `src/data/balance.ts`.
