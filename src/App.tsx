import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SpatulaCursor from "@/components/easymix/SpatulaCursor";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";

// ── Eager load: หน้าหลักที่ user เห็นทันที ──────────────
import Index from "./pages/Index";

// ── Lazy load: โหลดเฉพาะเมื่อ navigate ──────────────────
const ProductsPage  = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const RecipesPage   = lazy(() => import("./pages/RecipesPage"));
const RecipeDetail  = lazy(() => import("./pages/RecipeDetail"));
const WhereToBuy    = lazy(() => import("./pages/WhereToBuy"));
const AboutPage     = lazy(() => import("./pages/AboutPage"));
const HowTo         = lazy(() => import("./pages/HowTo"));
const Blog          = lazy(() => import("./pages/Blog"));
const BlogDetail    = lazy(() => import("./pages/BlogDetail"));
const Contact       = lazy(() => import("./pages/Contact"));
const NotFound      = lazy(() => import("./pages/NotFound"));

// ── Page loading fallback ─────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      <p className="text-sm text-muted-foreground">กำลังโหลด...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 }, // 5 min cache
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SpatulaCursor />
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <BrowserRouter basename="/easy-mix">
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"               element={<Index />} />
              <Route path="/products"       element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/recipes"        element={<RecipesPage />} />
              <Route path="/recipes/:slug"  element={<RecipeDetail />} />
              <Route path="/where-to-buy"   element={<WhereToBuy />} />
              <Route path="/shop"           element={<WhereToBuy />} />
              <Route path="/about"          element={<AboutPage />} />
              <Route path="/how-to"         element={<HowTo />} />
              <Route path="/blog"           element={<Blog />} />
              <Route path="/blog/:slug"     element={<BlogDetail />} />
              <Route path="/contact"        element={<Contact />} />
              <Route path="*"               element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
