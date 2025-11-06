import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // add item (sizes removed from products) - merge by id
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    try {
      openCart();
    } catch {}
  };

  return (
    <Card 
      className="group overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth"
        >
          <Heart className="h-4 w-4" />
        </Button>
        
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

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-serif text-lg font-semibold line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.category} • {product.fragranceType}</p>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(product.rating)
                  ? "fill-accent text-accent"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            className="gradient-primary text-primary-foreground"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
