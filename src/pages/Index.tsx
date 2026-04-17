import Header from "@/components/easymix/Header";
import Hero from "@/components/easymix/Hero";
import Features from "@/components/easymix/Features";
import Products from "@/components/easymix/Products";
import Recipes from "@/components/easymix/Recipes";
import About from "@/components/easymix/About";
import CTA from "@/components/easymix/CTA";
import Footer from "@/components/easymix/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Recipes />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
