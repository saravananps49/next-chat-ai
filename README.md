# Next.js AI Chatbot

A simple AI chatbot built with **Next.js 16, React, TypeScript, and the OpenAI API**, featuring a chat interface and streaming AI responses.

## 🚀 Tech Stack

- **Frontend:** Next.js 16, React, TypeScript, Tailwind CSS
- **AI Integration:** OpenAI API (`gpt-4o-mini`)
- **AI SDK:** `ai`, `@ai-sdk/react`
- **API:** Next.js Route Handlers
- **Streaming:** Real-time text responses

## ✨ Features

- Interactive chat interface
- AI-generated responses
- Streaming responses
- Server-side API integration
- Environment-based API key configuration

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd next-chat-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key
```

Get your API key from the [OpenAI Platform](https://platform.openai.com/api-keys).

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```text
next-chat-ai/
├── src/
│   └── app/
│       ├── api/
│       │   └── chat/
│       │       └── route.ts
│       ├── layout.tsx
│       └── page.tsx
├── .env.local
├── package.json
└── README.md
```

## 🔐 Security

- Keep your OpenAI API key on the server.
- Never commit `.env.local` or expose API keys in frontend code.
- Ensure `.env.local` is included in `.gitignore`.

## 🛠️ Future Enhancements

- Chat history and conversation management
- Authentication and user profiles
- Improved error handling
- Local LLM support using Ollama

## 📄 License

This project is available for learning and personal development.