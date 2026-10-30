import Link from "next/link";

export function SponsorBar() {
  return (
    <div className="border-b border-amber-400/20 bg-gradient-to-r from-amber-950/80 via-orange-950/50 to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm sm:px-6">
        <p className="text-amber-100/85">
          <span className="font-medium text-amber-50">赞助位预留</span>
          —— 品牌 / 工具方可在此展示，支持中文 Agent 生态建设。
        </p>
        <Link
          href="/sponsors"
          className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-amber-100 hover:bg-amber-400/20"
        >
          了解赞助
        </Link>
      </div>
    </div>
  );
}
