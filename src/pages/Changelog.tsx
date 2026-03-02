import { changelog } from "@/data/changelog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useSiteContent } from "@/hooks/useSiteContent";

const tagStyles = {
  new: "bg-green-500/20 text-green-400 border-green-500/30",
  fix: "bg-red-500/20 text-red-400 border-red-500/30",
  improvement: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const tagLabels = { new: "Novo", fix: "Correção", improvement: "Melhoria" };

const Changelog = () => {
  const { data: headerContent } = useSiteContent("changelog", "header");
  const { data: entriesContent } = useSiteContent("changelog", "entries");

  const header = (headerContent as any) || { title: "Changelog", subtitle: "Histórico de atualizações do Sakura Bot." };
  const entries = (entriesContent as any)?.items || changelog;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 sakura-text-gradient">{header.title}</h1>
      <p className="text-muted-foreground mb-10">{header.subtitle}</p>

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {entries.map((entry: any) => (
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
                    <span className="text-sm">{change.text}</span>
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
