import { faqItems } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSiteContent } from "@/hooks/useSiteContent";

const Faq = () => {
  const { data: headerContent } = useSiteContent("faq", "header");
  const { data: itemsContent } = useSiteContent("faq", "items");

  const header = (headerContent as any) || { title: "FAQ", subtitle: "Perguntas frequentes sobre o Sakura Bot." };
  const items = (itemsContent as any)?.items || faqItems;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 sakura-text-gradient">{header.title}</h1>
      <p className="text-muted-foreground mb-10">{header.subtitle}</p>

      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item: any, i: number) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl bg-card sakura-border-glow border-none px-5">
            <AccordionTrigger className="hover:no-underline text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
