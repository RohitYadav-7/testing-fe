# testing-fe

Vite + React frontend for deployment testing with `testing-be`.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Set backend URL in `.env`:

```bash
VITE_API_URL=http://localhost:5000
```

## Production

```bash
npm run build
npm run preview
```
