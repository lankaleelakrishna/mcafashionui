import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the quality of MCA Fashion clothing?",
    answer: "Our perfumes are crafted with premium ingredients and typically last 6-8 hours on the skin. Eau de Parfum concentrations offer even longer-lasting wear, up to 12 hours."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return unopened bottles for a full refund. Opened bottles can be exchanged once within 14 days."
  },
  {
    question: "Do you offer sample sizes?",
    answer: "Yes! We offer 2ml sample vials of all our fragrances. This is a perfect way to try a scent before committing to a full bottle. Samples are also available in our Discovery Sets."
  },
  {
    question: "Is MCA Fashion sustainable?",
    answer: "Absolutely. All MCA Fashion pieces are made with sustainable materials and ethical manufacturing practices. We're committed to reducing our environmental impact throughout our production process."
  },
  {
    question: "How should I store my perfume?",
    answer: "Store your perfume in a cool, dry place away from direct sunlight and extreme temperatures. Keep the bottle tightly closed when not in use to preserve the fragrance quality."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping times vary by location, typically 5-10 business days internationally. Free shipping is available on orders over $100."
  },
  {
    question: "Can I track my order?",
    answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can use this to monitor your delivery status in real-time."
  },
  {
    question: "What makes MCA Fashion unique?",
    answer: "MCA Fashion pieces are crafted by expert designers using the finest materials and innovative techniques. Each piece undergoes extensive quality control to ensure unique, lasting designs that make a statement."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about MCA Fashion
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
