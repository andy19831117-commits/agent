export type CategorySlug =
  | "efficiency"
  | "career"
  | "content"
  | "ecommerce"
  | "education"
  | "life"
  | "devtools"
  | "enterprise";

export type PlatformSlug =
  | "wechat"
  | "wecom"
  | "feishu"
  | "dingtalk"
  | "xiaohongshu"
  | "douyin"
  | "shipinhao"
  | "tongyi"
  | "wenxin"
  | "doubao"
  | "kimi"
  | "deepseek"
  | "claude"
  | "chatgpt"
  | "grok"
  | "coze"
  | "dify"
  | "n8n";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
}

export interface Platform {
  slug: PlatformSlug;
  name: string;
  kind: "im" | "llm" | "social" | "builder";
}

export interface UseCase {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  categories: CategorySlug[];
  platforms: PlatformSlug[];
  sourceUrl: string;
  sourceLabel: string;
  upvotes: number;
  trending?: boolean;
  tags: string[];
  howItWorks: string[];
  tips: string[];
}
