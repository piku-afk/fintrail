# Fintrail

Fintrail is a modern financial insights platform that allows users to upload their bank statement PDFs, automatically parse transactions using AI, and visualize spending patterns using interactive charts.

Built with Next.js, TypeScript, and Supabase, Fintrail is designed to be serverless, secure, and easy to maintain - with background processing, structured data storage, and a seamless user experience.

---

## Tech Stack

- **Frontend**: Next.js + TypeScript
- **Backend**: Supabase (Edge Functions, Auth, Database, Storage)
- **AI Parsing**: OpenAI GPT models for transaction extraction
- **Deployment**: Vercel and Supabase

---

## Features

- Upload and store PDF bank statements
- AI-powered PDF parsing and transaction extraction
- Structured financial data saved in Postgres
- Interactive charts and filters for insights
- Secure user authentication via Supabase Auth
- Background parsing via Supabase Edge or GitHub Actions
