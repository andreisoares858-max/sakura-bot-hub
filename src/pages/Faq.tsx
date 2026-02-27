import { faqItems } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-3xl font-bold mb-2">
      <span className="sakura-text-gradient">FAQ</span>
    </h1>
    <p className="text-muted-foreground mb-10">Perguntas frequentes sobre o Sakura Bot.</p>

    <Accordion type="single" collapsible className="space-y-3">
      {faqItems.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl bg-card sakura-border-glow border-none px-5">
          <AccordionTrigger className="hover:no-underline text-left font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default Faq;
