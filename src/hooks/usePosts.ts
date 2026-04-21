import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

export const usePosts = (category?: string) =>
  useQuery({
    queryKey: ["posts", category],
    queryFn: () => api.posts.list({ category, limit: 50 }),
    staleTime: 1000 * 60 * 5,
    select: (d) => d.data?.items ?? [],
  });

export const usePost = (slug: string) =>
  useQuery({
    queryKey: ["post", slug],
    queryFn: () => api.posts.get(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    select: (d) => d.data,
  });
