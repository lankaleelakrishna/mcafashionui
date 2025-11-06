import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const { toast } = useToast();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    // open the cart drawer so the user sees the item immediately
    try {
      openCart();
    } catch {}
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.fragranceType === product.fragranceType)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isBestSeller && (
                <Badge className="gradient-primary text-primary-foreground">Best Seller</Badge>
              )}
              {product.isNew && (
                <Badge className="gradient-gold text-foreground">New</Badge>
              )}
              {product.isSale && (
                <Badge variant="destructive">Sale</Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground">
                {product.category} • {product.fragranceType}
              </p>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-accent text-accent"
                      : "text-muted"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Fragrance Notes */}
            <Card className="p-4 space-y-2">
              <h3 className="font-semibold">Fragrance Notes</h3>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="font-medium text-muted-foreground">Top</p>
                  <p>{product.notes.top.join(", ")}</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Heart</p>
                  <p>{product.notes.heart.join(", ")}</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Base</p>
                  <p>{product.notes.base.join(", ")}</p>
                </div>
              </div>
            </Card>

            {/* Sizes removed - no size selection needed */}

            {/* Add to Cart */}
            <div className="flex gap-3">
              <Button
                className="flex-1 gradient-primary text-primary-foreground"
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Stock Status */}
            <p className="text-sm text-muted-foreground">
              {product.inStock ? "✓ In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <ProductCarousel products={relatedProducts} title="You May Also Like" />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
