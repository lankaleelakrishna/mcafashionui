import saree1 from "@/assets/products/saree-1.jpg";
import saree2 from "@/assets/products/saree2.jpg";
import saree3 from "@/assets/products/saree-3.jpg";
import saree4 from "@/assets/products/saree-4.jpg";


export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  fragranceType: string; // Style type (Traditional, Modern, Fusion, etc.)
  description: string;
  image: string;
  rating: number;
  reviews: number;
  notes: {
    top: string[]; // Design elements (embroidery, prints, work)
    heart: string[]; // Materials and fabrics
    base: string[]; // Style attributes and occasions
  };
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Banarasi Silk Saree",
    price: 129,
    originalPrice: 159,
    category: "Saree",
    fragranceType: "Traditional",
    description: "Exquisite Banarasi silk saree featuring intricate zari work, traditional motifs, and a rich emerald green hue perfect for special occasions.",
    image: saree1,
    rating: 4.8,
    reviews: 234,
    notes: {
      top: ["Zari Work", "Temple Border", "Paisley Motifs"],
      heart: ["Pure Silk", "Banarasi Weave", "Premium Quality"],
      base: ["Traditional", "Wedding Wear", "Festive"]
    },
    inStock: true,
    isBestSeller: true,
    isSale: true
  },
      {
        id: 2,
        name: "Kanjeevaram Silk Saree",
        price: 189,
        category: "Saree",
        fragranceType: "Traditional",
        description: "Luxurious Kanjeevaram silk saree with heavy zari and classic temple motifs — an heirloom piece.",
        image: saree2,
        rating: 4.9,
        reviews: 189,
        notes: {
          top: ["Heavy Zari", "Contrast Border", "Traditional Motifs"],
          heart: ["Pure Silk", "Kanjeevaram Weave", "Rich Texture"],
          base: ["Ceremonial", "Wedding Wear", "Heritage"]
        },
        inStock: true,
        isBestSeller: true
      },
      {
        id: 3,
        name: "Designer Georgette Saree",
        price: 149,
        category: "Saree",
        fragranceType: "Modern",
        description: "Lightweight georgette saree with contemporary prints and delicate embellishments for evening wear.",
        image: saree3,
        rating: 4.7,
        reviews: 156,
        notes: {
          top: ["Printed Border", "Sequins", "Fringe"],
          heart: ["Georgette", "Light Lining", "Drape Friendly"],
          base: ["Evening Wear", "Party", "Comfortable"]
        },
        inStock: true,
        isNew: true
      },
      {
        id: 4,
        name: "Patola Silk Saree",
        price: 139,
        category: "Saree",
        fragranceType: "Traditional",
        description: "Patola saree with heritage ikat patterns and rich color contrast — a statement traditional saree.",
        image: saree4,
        rating: 4.6,
        reviews: 201,
        notes: {
          top: ["Ikat Patterns", "Contrast Pallu", "Handloom"],
          heart: ["Silk", "Handwoven", "Artisan Made"],
          base: ["Festive", "Ethnic", "Collectible"]
        },
        inStock: true,
        isBestSeller: true
      },
      {
        id: 5,
        name: "Chanderi Cotton Saree",
        price: 119,
        category: "Saree",
        fragranceType: "Casual",
        description: "Breathable Chanderi cotton-silk blend saree ideal for daytime events and comfortable wear.",
        image: saree1,
        rating: 4.5,
        reviews: 178,
        notes: {
          top: ["Light Weave", "Subtle Border", "Classic Print"],
          heart: ["Cotton-Silk", "Breathable", "Everyday Comfort"],
          base: ["Day Wear", "Office Friendly", "Casual"]
        },
        inStock: true
      },
      {
        id: 6,
        name: "Mysore Silk Saree",
        price: 159,
        category: "Saree",
        fragranceType: "Traditional",
        description: "Elegant Mysore silk saree with subtle motifs and smooth lustre — perfect for special gatherings.",
        image: saree2,
        rating: 4.8,
        reviews: 145,
        notes: {
          top: ["Smooth Finish", "Minimal Motifs", "Soft Drape"],
          heart: ["Mysore Silk", "Pure Silk", "Lightweight"],
          base: ["Semi-Formal", "Celebrations", "Elegant"]
        },
        inStock: true,
        isNew: true
      },
      {
        id: 7,
        name: "Embroidered Crop Top",
        price: 129,
        originalPrice: 149,
        category: "Tops",
        fragranceType: "Modern",
        description: "Stylish crop top with intricate embroidery and contemporary design, perfect for both casual and party wear.",
        image: saree3,
        rating: 4.7,
        reviews: 192,
        notes: {
          top: ["Thread Embroidery", "Sequin Work", "Beadwork"],
          heart: ["Premium Cotton", "Net", "Lining"],
          base: ["Party Wear", "Trendy", "Versatile"]
        },
        inStock: true,
        isSale: true
      },
      {
        id: 8,
        name: "Designer Party Top",
        price: 139,
        category: "Tops",
        fragranceType: "Party Wear",
        description: "Eye-catching party top with luxe embellishments and modern cut.",
        image: saree4,
        rating: 4.6,
        reviews: 167,
        notes: {
          top: ["Statement Neckline", "Bead Embellishment", "Glow"],
          heart: ["Silk Blend", "Lined", "Premium Finish"],
          base: ["Party", "Evening", "Statement"]
        },
        inStock: true
      },
      {
        id: 9,
        name: "Floral Print Top",
        price: 109,
        category: "Tops",
        fragranceType: "Casual",
        description: "Lightweight floral print top suitable for daily wear and summer outings.",
        image: saree1,
        rating: 4.4,
        reviews: 143,
        notes: {
          top: ["Floral Print", "Ruffled Sleeve", "Soft Hem"],
          heart: ["Cotton", "Breathable", "Easy Care"],
          base: ["Casual", "Summer", "Comfort"]
        },
        inStock: true,
        isBestSeller: true
      },
      {
        id: 10,
        name: "Sequin Party Top",
        price: 169,
        category: "Tops",
        fragranceType: "Party Wear",
        description: "Bold sequin top designed for celebrations and night events.",
        image: saree2,
        rating: 4.9,
        reviews: 198,
        notes: {
          top: ["Full Sequin", "Back Zip", "Bold Shine"],
          heart: ["Polyester Lining", "Stretch", "Structured"],
          base: ["Night Out", "Party", "Statement"]
        },
        inStock: true,
        isNew: true
      },
      {
        id: 11,
        name: "Casual Cotton Top",
        price: 134,
        category: "Tops",
        fragranceType: "Casual",
        description: "Comfort-driven cotton top ideal for everyday use and relaxed outings.",
        image: saree1,
        rating: 4.5,
        reviews: 176,
        notes: {
          top: ["Crew Neck", "Short Sleeve", "Ease Fit"],
          heart: ["Pure Cotton", "Breathable", "Machine Washable"],
          base: ["Daily Wear", "Comfort", "Minimal"]
        },
        inStock: true
      },
      {
        id: 12,
        name: "Ethnic Fusion Top",
        price: 179,
        category: "Tops",
        fragranceType: "Fusion",
        description: "Fusion-style top combining ethnic prints with modern silhouettes.",
        image: saree4,
        rating: 4.7,
        reviews: 154,
        notes: {
          top: ["Ethnic Print", "High-Low Hem", "Contrast Tie"],
          heart: ["Rayon", "Silk Blend", "Soft Finish"],
          base: ["Festive", "Smart Casual", "Versatile"]
        },
        inStock: true
      },
      {
        id: 13,
        name: "Bridal Red Lehenga",
        price: 124,
        originalPrice: 144,
        category: "Lehenga",
        fragranceType: "Bridal",
        description: "Stunning bridal lehenga in rich red featuring heavy embroidery, mirror work, and intricate designs perfect for wedding ceremonies.",
        image: saree2,
        rating: 4.6,
        reviews: 189,
        notes: {
          top: ["Zardozi Work", "Mirror Work", "Stone Work"],
          heart: ["Raw Silk", "Net", "Satin"],
          base: ["Bridal Wear", "Traditional", "Royal"]
        },
        inStock: true,
        isSale: true
      },
      {
        id: 14,
        name: "Designer Party Lehenga",
        price: 144,
        category: "Lehenga",
        fragranceType: "Party",
        description: "Designer lehenga with modern cuts and elaborate embroidery for receptions and parties.",
        image: saree2,
        rating: 4.8,
        reviews: 223,
        notes: {
          top: ["Flare Skirt", "Embellished Blouse", "Dupatta Work"],
          heart: ["Silk", "Net", "Embroidered"],
          base: ["Reception", "Party", "Designer"]
        },
        inStock: true,
        isBestSeller: true
      },
      {
        id: 15,
        name: "Embroidered Wedding Lehenga",
        price: 154,
        category: "Lehenga",
        fragranceType: "Bridal",
        description: "Hand-embroidered wedding lehenga with traditional motifs and luxurious fabric.",
        image: saree3,
        rating: 4.7,
        reviews: 161,
        notes: {
          top: ["Hand Embroidery", "Heavy Border", "Gota Work"],
          heart: ["Velvet", "Silk", "Lining"],
          base: ["Wedding", "Formal", "Opulent"]
        },
        inStock: true
      },
      {
        id: 16,
        name: "Festive Silk Lehenga",
        price: 134,
        category: "Lehenga",
        fragranceType: "Festive",
        description: "Vibrant festive lehenga in silk with light embellishments suitable for celebrations.",
        image: saree4,
        rating: 4.6,
        reviews: 194,
        notes: {
          top: ["Gota Border", "Light Embellishments", "Printed Skirt"],
          heart: ["Silk", "Lining", "Comfort Fit"],
          base: ["Festive", "Day/Night", "Comfortable"]
        },
        inStock: true,
        isNew: true
      },
      {
        id: 17,
        name: "Cotton Casual Kurta",
        price: 114,
        category: "Kurta",
        fragranceType: "Casual",
        description: "Comfortable cotton kurta with subtle embroidery and modern cut, perfect for daily wear and casual occasions.",
        image: saree1,
        rating: 4.5,
        reviews: 172,
        notes: {
          top: ["Button Placket", "Side Slits", "Straight Cut"],
          heart: ["Cotton", "Cambric", "Soft Fabric"],
          base: ["Casual Wear", "Comfortable", "Versatile"]
        },
        inStock: true
      },
      {
        id: 18,
        name: "Embroidered Party Kurta",
        price: 164,
        category: "Kurta",
        fragranceType: "Party",
        description: "Party kurta with elegant embroidery and refined detailing for festive events.",
        image: saree2,
        rating: 4.9,
        reviews: 207,
        notes: {
          top: ["Embroidered Yoke", "Contrast Piping", "Shaded Buttons"],
          heart: ["Silk Blend", "Lined", "Structured"],
          base: ["Festive", "Wedding Guest", "Smart Casual"]
        },
        inStock: true,
        isBestSeller: true
      },
      {
        id: 19,
        name: "Designer Silk Kurta",
        price: 149,
        category: "Kurta",
        fragranceType: "Formal",
        description: "Silk kurta with refined tailoring and subtle motifs for formal gatherings.",
        image: saree3,
        rating: 4.7,
        reviews: 183,
        notes: {
          top: ["Mandarin Collar", "Panel Work", "Tailored Fit"],
          heart: ["Silk", "Fine Lining", "Premium Stitching"],
          base: ["Formal", "Events", "Elegant"]
        },
        inStock: true
      },
      {
        id: 20,
        name: "Wedding Collection Kurta",
        price: 174,
        originalPrice: 199,
        category: "Kurta",
        fragranceType: "Bridal",
        description: "Ornate kurta designed for wedding festivities with rich embroidery and premium fabric.",
        image: saree4,
        rating: 4.9,
        reviews: 241,
        notes: {
          top: ["Rich Embroidery", "Decorative Buttons", "Contrast Border"],
          heart: ["Silk", "Velvet Accent", "Heavy Lining"],
          base: ["Wedding", "Ceremonial", "Showpiece"]
        },
        inStock: true,
        isBestSeller: true,
        isSale: true
      }
    ];
