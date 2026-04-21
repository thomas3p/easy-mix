// ── API wrapper ──────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
}

export interface PagedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

// ── Product ──────────────────────────────────────────────
export interface Nutrition {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  original?: number;
  badge?: string;
  size: string;
  pack: string;
  tag: string;
  description: string;
  ingredients: string;
  storage: string;
  imgUrl?: string;
  highlights: string[];
  usages: string[];
  nutritions: Nutrition[];
}

// ── Recipe ───────────────────────────────────────────────
export interface Recipe {
  id: number;
  slug: string;
  title: string;
  description: string;
  time: string;
  serves: string;
  difficulty: string;
  category: string;
  imgUrl?: string;
  ingredients: string[];
  steps: string[];
  tips: string[];
}

// ── Post ─────────────────────────────────────────────────
export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  imgUrl?: string;
  publishedAt?: string;
  content: string[];
}
