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

## CI/CD (S3 + CloudFront)

This repo includes GitHub Actions workflow:

- `.github/workflows/deploy-cloudfront.yml`

Set these in GitHub repository settings before running workflow:

Repository Variables:

- `AWS_REGION` (example: `ap-south-1`)
- `S3_BUCKET` (example: `testing-fe-rohit`)
- `CLOUDFRONT_DISTRIBUTION_ID`
- `VITE_API_URL` (your backend URL)

Repository Secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
