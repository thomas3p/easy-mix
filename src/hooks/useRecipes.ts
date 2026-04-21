import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

export const useRecipes = (category?: string) =>
  useQuery({
    queryKey: ["recipes", category],
    queryFn: () => api.recipes.list({ category, limit: 50 }),
    staleTime: 1000 * 60 * 5,
    select: (d) => d.data?.items ?? [],
  });

export const useRecipe = (slug: string) =>
  useQuery({
    queryKey: ["recipe", slug],
    queryFn: () => api.recipes.get(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    select: (d) => d.data,
  });

export const useRecipeCategories = () =>
  useQuery({
    queryKey: ["recipe-categories"],
    queryFn: () => api.recipes.categories(),
    staleTime: 1000 * 60 * 10,
    select: (d) => d.data ?? [],
  });
