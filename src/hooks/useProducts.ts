import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

export const useProducts = (tag?: string) =>
  useQuery({
    queryKey: ["products", tag],
    queryFn: () => api.products.list({ tag, limit: 50 }),
    staleTime: 1000 * 60 * 5,
    select: (d) => d.data?.items ?? [],
  });

export const useProduct = (slug: string) =>
  useQuery({
    queryKey: ["product", slug],
    queryFn: () => api.products.get(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    select: (d) => d.data,
  });
