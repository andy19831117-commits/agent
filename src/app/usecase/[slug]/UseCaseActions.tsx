"use client";

import { useState } from "react";

export function UseCaseActions({
  slug,
  initialUpvotes,
  sourceUrl,
  sourceLabel,
}: {
  slug: string;
  initialUpvotes: number;
  sourceUrl: string;
  sourceLabel: string;
}) {
  const [votes, setVotes] = useState(initialUpvotes);
  const [voted, setVoted] = useState(false);
  const [shared, setShared] = useState(false);

  function upvote() {
    if (voted) return;
    setVoted(true);
    setVotes((v) => v + 1);
  }

  async function share() {
    const url = `${window.location.origin}/usecase/${slug}`;
    try {
      await navigator.clipboard?.writeText(url);
    } catch {
      /* ignore */
    }
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  }

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
      <button
        type="button"
        onClick={upvote}
        className={`rounded-xl border px-3 py-1.5 transition ${
          voted
            ? "border-indigo-400/50 bg-indigo-500/20 text-indigo-200"
            : "border-white/15 bg-white/5 text-slate-200 hover:border-indigo-400/40"
        }`}
      >
        ▲ 点赞 {votes}
      </button>
      <button
        type="button"
        onClick={share}
        className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-slate-200 transition hover:border-indigo-400/40"
      >
        {shared ? "链接已复制" : "分享"}
      </button>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
      >
        来源：{sourceLabel} ↗
      </a>
    </div>
  );
}
