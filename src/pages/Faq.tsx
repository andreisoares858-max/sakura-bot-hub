import { faqItems } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import EditableText from "@/components/EditableText";
import { useSiteContent, useUpdateSiteContent } from "@/hooks/useSiteContent";

const Faq = () => {
  const { data: headerContent } = useSiteContent("faq", "header");
  const { data: itemsContent } = useSiteContent("faq", "items");
  const updateContent = useUpdateSiteContent();

  const header = (headerContent as any) || { title: "FAQ", subtitle: "Perguntas frequentes sobre o Sakura Bot." };
  const items = (itemsContent as any)?.items || faqItems;

  const saveHeader = (field: string, value: string) => {
    updateContent.mutate({ page: "faq", sectionKey: "header", content: { ...header, [field]: value } });
  };

  const saveItem = (index: number, field: string, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    updateContent.mutate({ page: "faq", sectionKey: "items", content: { items: updated } });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <EditableText value={header.title} onSave={(v) => saveHeader("title", v)} as="h1" className="text-3xl font-bold mb-2 sakura-text-gradient" />
      <EditableText value={header.subtitle} onSave={(v) => saveHeader("subtitle", v)} as="p" className="text-muted-foreground mb-10" />

      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item: any, i: number) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl bg-card sakura-border-glow border-none px-5">
            <AccordionTrigger className="hover:no-underline text-left font-medium">
              <EditableText value={item.question} onSave={(v) => saveItem(i, "question", v)} as="span" />
            </AccordionTrigger>
            <AccordionContent>
              <EditableText value={item.answer} onSave={(v) => saveItem(i, "answer", v)} as="p" className="text-muted-foreground leading-relaxed" />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
