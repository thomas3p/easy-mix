/**
 * src/services/api.ts
 * Axios instance + typed API calls สำหรับ Frontend
 */
import axios from "axios";

const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";
const http = axios.create({ baseURL: BASE });

export interface ApiResponse<T> { success: boolean; data?: T; message: string }
export interface PagedResult<T> { items: T[]; total: number; page: number; limit: number; pages: number }
export interface Nutrition { label: string; value: string }

export interface Product {
  id: number; slug: string; name: string; shortName: string;
  price: number; original?: number; badge?: string;
  size: string; pack: string; tag: string;
  description: string; ingredients: string; storage: string;
  imgUrl?: string; highlights: string[]; usages: string[]; nutritions: Nutrition[];
}

export interface Recipe {
  id: number; slug: string; title: string; description: string;
  time: string; serves: string; difficulty: string; category: string;
  imgUrl?: string; ingredients: string[]; steps: string[]; tips: string[];
}

export interface Post {
  id: number; slug: string; title: string; excerpt: string;
  category: string; author: string; readTime: string;
  imgUrl?: string; publishedAt?: string; content: string[];
}

export const api = {
  products: {
    list: (params?: { tag?: string; page?: number; limit?: number }) =>
      http.get<ApiResponse<PagedResult<Product>>>("/api/products", { params }).then(r => r.data),
    get: (slug: string) =>
      http.get<ApiResponse<Product>>(`/api/products/${slug}`).then(r => r.data),
  },
  recipes: {
    list: (params?: { category?: string; page?: number; limit?: number }) =>
      http.get<ApiResponse<PagedResult<Recipe>>>("/api/recipes", { params }).then(r => r.data),
    get: (slug: string) =>
      http.get<ApiResponse<Recipe>>(`/api/recipes/${slug}`).then(r => r.data),
    categories: () =>
      http.get<ApiResponse<string[]>>("/api/recipes/categories").then(r => r.data),
  },
  posts: {
    list: (params?: { category?: string; page?: number; limit?: number }) =>
      http.get<ApiResponse<PagedResult<Post>>>("/api/posts", { params }).then(r => r.data),
    get: (slug: string) =>
      http.get<ApiResponse<Post>>(`/api/posts/${slug}`).then(r => r.data),
  },
};
