import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "赞助合作",
  description: "Agent场景库赞助位与品牌合作说明（MVP 占位页）",
};

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="text-sm text-indigo-300 hover:text-indigo-200 hover:underline"
      >
        ← 返回首页
      </Link>
      <h1 className="text-3xl font-bold tracking-tight text-slate-50">
        赞助合作
      </h1>
      <p className="text-slate-300">
        本页为 MVP 占位。后续可展示首页赞助条、分类页推荐位与邮件周报冠名等合作形式。
      </p>
      <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-950/60 to-orange-950/30 p-6 text-sm text-amber-100">
        <p className="font-medium text-amber-50">意向合作可预留：</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-amber-100/85">
          <li>首页顶部赞助条</li>
          <li>热门用例旁品牌工具推荐</li>
          <li>周报 / 公众号 / 小红书内容共创</li>
        </ul>
        <p className="mt-4 text-amber-200/70">
          正式商务邮箱与套餐上线前，请先通过站点订阅占位留下联系方式。
        </p>
      </div>
    </div>
  );
}
