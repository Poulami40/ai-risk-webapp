"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-12 rounded-2xl bg-white p-16 shadow-lg dark:bg-zinc-900">
        {/* Title */}
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
          Risk Assessment Portal
        </h1>

        <p className="text-center text-zinc-600 dark:text-zinc-400">
          Choose an option to continue
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-6">
          {/* NEW */}
          <button
            onClick={() => router.push("/chat/new")}
            className="h-16 rounded-xl bg-black text-lg font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
          >
            New Assessment
          </button>

          {/* SAVED DRAFT */}
          <button
            onClick={() => router.push("/drafts")}
            className="h-16 rounded-xl border border-zinc-300 text-lg font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Saved Drafts
          </button>

          {/* COMPLETED */}
          <button
            onClick={() => router.push("/completed")}
            className="h-16 rounded-xl border border-zinc-300 text-lg font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Completed Assessments
          </button>
        </div>
      </main>
    </div>
  );
}