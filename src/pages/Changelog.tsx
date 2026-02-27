import { changelog } from "@/data/changelog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import EditableText from "@/components/EditableText";
import { useSiteContent, useUpdateSiteContent } from "@/hooks/useSiteContent";

const tagStyles = {
  new: "bg-green-500/20 text-green-400 border-green-500/30",
  fix: "bg-red-500/20 text-red-400 border-red-500/30",
  improvement: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const tagLabels = { new: "Novo", fix: "Correção", improvement: "Melhoria" };

const Changelog = () => {
  const { data: headerContent } = useSiteContent("changelog", "header");
  const { data: entriesContent } = useSiteContent("changelog", "entries");
  const updateContent = useUpdateSiteContent();

  const header = (headerContent as any) || { title: "Changelog", subtitle: "Histórico de atualizações do Sakura Bot." };
  const entries = (entriesContent as any)?.items || changelog;

  const saveHeader = (field: string, value: string) => {
    updateContent.mutate({ page: "changelog", sectionKey: "header", content: { ...header, [field]: value } });
  };

  const saveEntry = (entryIdx: number, changeIdx: number, value: string) => {
    const updated = [...entries];
    updated[entryIdx] = {
      ...updated[entryIdx],
      changes: updated[entryIdx].changes.map((c: any, i: number) => i === changeIdx ? { ...c, text: value } : c),
    };
    updateContent.mutate({ page: "changelog", sectionKey: "entries", content: { items: updated } });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <EditableText value={header.title} onSave={(v) => saveHeader("title", v)} as="h1" className="text-3xl font-bold mb-2 sakura-text-gradient" />
      <EditableText value={header.subtitle} onSave={(v) => saveHeader("subtitle", v)} as="p" className="text-muted-foreground mb-10" />

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {entries.map((entry: any, entryIdx: number) => (
            <div key={entry.version} className="relative pl-10">
              <div className="absolute left-[10px] top-1.5 w-3 h-3 rounded-full bg-primary sakura-glow" />
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="text-xl font-bold">v{entry.version}</h3>
                <span className="text-sm text-muted-foreground">{entry.date}</span>
              </div>
              <div className="space-y-2">
                {entry.changes.map((change: any, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card sakura-border-glow">
                    <Badge variant="outline" className={cn("text-xs shrink-0 mt-0.5", tagStyles[change.type as keyof typeof tagStyles])}>
                      {tagLabels[change.type as keyof typeof tagLabels]}
                    </Badge>
                    <EditableText value={change.text} onSave={(v) => saveEntry(entryIdx, i, v)} as="span" className="text-sm" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
