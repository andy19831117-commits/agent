import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-medium text-slate-100">Agent场景库</p>
          <p className="mt-1 text-slate-500">
            精选面向个人效率、独立开发者与企业自动化的中文 AI Agent 用例（MVP 草稿）
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/sponsors" className="hover:text-indigo-300">
            赞助合作
          </Link>
          <a href="#subscribe" className="hover:text-indigo-300">
            邮件订阅
          </a>
          <span className="text-slate-600">
            后续分发：小红书 / 公众号 / B站 / 抖音 / 视频号 / 快手
          </span>
        </div>
      </div>
    </footer>
  );
}
