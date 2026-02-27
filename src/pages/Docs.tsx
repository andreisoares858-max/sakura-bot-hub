import { useState } from "react";
import { Shield, TrendingUp, Ticket, Heart, ChevronRight, Terminal } from "lucide-react";
import { commands, categories, type Command } from "@/data/commands";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import EditableText from "@/components/EditableText";
import { useSiteContent, useUpdateSiteContent } from "@/hooks/useSiteContent";

const iconMap = { Shield, TrendingUp, Ticket, Heart };

const categoryKeys = Object.keys(categories) as (keyof typeof categories)[];

const CategoryContent = ({ category }: { category: keyof typeof categories }) => {
  const cmds = commands.filter((c) => c.category === category);
  const cat = categories[category];
  const { data: content } = useSiteContent("docs", `category-${category}`);
  const updateContent = useUpdateSiteContent();

  const desc = (content as any)?.description || {
    moderation: "Ferramentas para manter seu servidor seguro e organizado.",
    economy: "Sistema completo de XP, níveis, moedas e loja.",
    tickets: "Gerencie suporte com tickets organizados.",
    welcome: "Configure mensagens automáticas e autorole.",
  }[category];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{cat.label}</h2>
      <EditableText
        value={desc}
        onSave={(v) => updateContent.mutate({ page: "docs", sectionKey: `category-${category}`, content: { description: v } })}
        as="p"
        className="text-muted-foreground mb-8 text-sm"
      />
      <div className="space-y-4">
        {cmds.map((cmd) => (
          <CommandBlock key={cmd.name} cmd={cmd} />
        ))}
      </div>
    </div>
  );
};

const CommandBlock = ({ cmd }: { cmd: Command }) => (
  <div className="p-5 rounded-xl bg-card sakura-border-glow">
    <div className="flex items-center gap-2 mb-2">
      <Terminal className="h-4 w-4 text-primary" />
      <code className="font-mono font-semibold text-primary">/{cmd.name}</code>
      <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{cmd.permission}</span>
    </div>
    <p className="text-sm text-muted-foreground mb-3">{cmd.description}</p>
    <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-foreground/80">
      <span className="text-muted-foreground">Uso: </span>{cmd.usage}
    </div>
    {cmd.example && (
      <div className="bg-background/50 rounded-lg p-3 mt-2 font-mono text-sm text-foreground/80">
        <span className="text-muted-foreground">Exemplo: </span>{cmd.example}
      </div>
    )}
  </div>
);

const SidebarNav = ({ active, onSelect }: { active: string; onSelect: (k: string) => void }) => (
  <nav className="space-y-1">
    {categoryKeys.map((key) => {
      const cat = categories[key];
      const Icon = iconMap[cat.icon as keyof typeof iconMap];
      return (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
            active === key ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          {Icon && <Icon className="h-4 w-4" />}
          {cat.label}
          {active === key && <ChevronRight className="ml-auto h-4 w-4" />}
        </button>
      );
    })}
  </nav>
);

const Docs = () => {
  const [active, setActive] = useState<string>("moderation");
  const isMobile = useIsMobile();
  const { data: headerContent } = useSiteContent("docs", "header");
  const updateContent = useUpdateSiteContent();

  const header = (headerContent as any) || { title: "Documentação" };

  return (
    <div className="container mx-auto px-4 py-12">
      <EditableText
        value={header.title}
        onSave={(v) => updateContent.mutate({ page: "docs", sectionKey: "header", content: { title: v } })}
        as="h1"
        className="text-3xl font-bold mb-8 sakura-text-gradient"
      />
      <div className="flex gap-8">
        {!isMobile && (
          <aside className="w-64 shrink-0">
            <div className="sticky top-24 p-4 rounded-xl bg-card sakura-border-glow">
              <SidebarNav active={active} onSelect={setActive} />
            </div>
          </aside>
        )}

        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="fixed bottom-4 right-4 z-40 sakura-glow">
                Categorias
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background w-72">
              <SheetTitle className="sr-only">Categorias</SheetTitle>
              <div className="mt-8">
                <SidebarNav active={active} onSelect={setActive} />
              </div>
            </SheetContent>
          </Sheet>
        )}

        <div className="flex-1 min-w-0">
          <CategoryContent category={active as keyof typeof categories} />
        </div>
      </div>
    </div>
  );
};

export default Docs;
