import { Tag, Shirt, Layers, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Saree", icon: Tag, count: 6, description: "Traditional & elegant", color: "from-pink-500/20 to-rose-500/20", value: "Saree" },
  { name: "Kurta", icon: Shirt, count: 8, description: "Comfortable & versatile", color: "from-cyan-500/20 to-blue-500/20", value: "Kurta" },
  { name: "Lehenga", icon: Layers, count: 4, description: "Festive & bridal", color: "from-amber-500/20 to-orange-500/20", value: "Lehenga" },
  { name: "Tops", icon: Star, count: 12, description: "Casual & party-ready", color: "from-purple-500/20 to-indigo-500/20", value: "Tops" }
];

const Categories = () => {
  const navigate = useNavigate();

  const onSelect = (value) => {
    navigate(`/products?category=${encodeURIComponent(value)}`);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our collections
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                onClick={() => onSelect(category.value)}
                className={`bg-gradient-to-br ${category.color} hover:scale-105 transition-transform cursor-pointer`}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                  <span className="text-sm font-medium">{category.count} items</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;