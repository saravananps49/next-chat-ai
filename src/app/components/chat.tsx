
'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, error } = useChat();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim() || status === 'submitted' || status === 'streaming') {
      return;
    }

    sendMessage({ text: input });
    setInput('');
  }

  return (
    <div className="mx-auto w-full max-w-2xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Next Chat AI</h1>

      <div className="mb-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="rounded-lg border p-3">
            <strong>
              {message.role === 'user' ? 'You: ' : 'AI: '}
            </strong>

            {message.parts.map((part, index) =>
              part.type === 'text' ? (
                <span key={index} className="whitespace-pre-wrap">
                  {part.text}
                </span>
              ) : null
            )}
          </div>
        ))}
      </div>

      {error && (
        <p className="mb-3 text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={
            !input.trim() ||
            status === 'submitted' ||
            status === 'streaming'
          }
          className="rounded-lg bg-black px-5 py-3 text-white disabled:opacity-50"
        >
          Send
        </button>
      </form>

      {status === 'streaming' && (
        <p className="mt-3 text-sm text-gray-500">AI is responding...</p>
      )}
    </div>
  );
}
