import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    content: "MCA Fashion pieces are absolutely stunning! Their collection has become my go-to for all occasions. The quality and style are unmatched.",
    rating: 5,
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    content: "Golden Oud is the perfect sophisticated scent for business meetings. I constantly receive compliments. Worth every penny!",
    rating: 5,
    initials: "MC"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Makeup Artist",
    content: "As a fashion stylist, I appreciate the artistry in MCA Fashion's designs. Each piece tells a unique story.",
    rating: 5,
    initials: "EW"
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Entrepreneur",
    content: "The designs are luxurious and the quality is incredible. MCA Fashion has become my go-to brand for special occasions.",
    rating: 5,
    initials: "DM"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Interior Designer",
    content: "Velvet Rose is pure elegance in a bottle. The scent is sophisticated yet playful. I'm obsessed!",
    rating: 5,
    initials: "LA"
  },
  {
    id: 6,
    name: "James Taylor",
    role: "Photographer",
    content: "The attention to detail in every MCA Fashion piece is remarkable. They capture style and elegance beautifully.",
    rating: 5,
    initials: "JT"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered their signature scent
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="h-full shadow-elegant">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-foreground mb-6 leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="gradient-primary text-primary-foreground">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
