"use client";

import { FormEvent, useState } from "react";

export function SubscribePlaceholder() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section
      id="subscribe"
      className="relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-950/80 via-slate-900/70 to-cyan-950/50 p-6 sm:p-8"
    >
      <div
        className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"
        aria-hidden
      />
      <h2 className="relative text-lg font-semibold text-slate-50">
        订阅每周精选用例
      </h2>
      <p className="relative mt-1 text-sm text-slate-300">
        MVP 占位：留下邮箱，后续接入真实订阅服务。不会自动外发。
      </p>
      {done ? (
        <p className="relative mt-4 text-sm font-medium text-cyan-300">
          已记录（本地占位）：感谢关注，正式订阅上线后会再通知。
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="relative mt-4 flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="你的邮箱"
            className="input-dark w-full rounded-xl px-3 py-2.5 text-sm sm:max-w-xs"
          />
          <button
            type="submit"
            className="btn-primary rounded-xl px-4 py-2.5 text-sm font-medium"
          >
            订阅占位
          </button>
        </form>
      )}
    </section>
  );
}
