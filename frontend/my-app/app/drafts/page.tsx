"use client";

import { useState } from "react";

export default function NewPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! Please upload your documents to begin the assessment." },
  ]);

  return (
    <div className="min-h-screen bg-zinc-50 p-10 dark:bg-black">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
        New Assessment
      </h1>

      {/* Chat Container */}
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow dark:bg-zinc-900">
        
        {/* Messages */}
        <div className="mb-6 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 ${
                msg.role === "assistant"
                  ? "bg-zinc-100 dark:bg-zinc-800"
                  : "bg-black text-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Upload */}
        <input
          type="file"
          className="w-full rounded-lg border p-3"
        />

        <button className="mt-4 w-full rounded-lg bg-black p-3 text-white">
          Upload & Analyze
        </button>
      </div>
    </div>
  );
}