import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Categories from "@/components/Categories";
import ProductCarousel from "@/components/ProductCarousel";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Index = () => {
  const bestSellers = products.filter(p => p.isBestSeller);
  const newArrivals = products.filter(p => p.isNew);
  const onSale = products.filter(p => p.isSale);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <Categories />
        <ProductCarousel products={bestSellers} title="Best Sellers" />
        <ProductCarousel products={newArrivals} title="New Arrivals" />
        <Testimonials />
        <ProductCarousel products={onSale} title="Special Offers" />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;