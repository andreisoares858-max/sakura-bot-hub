import { changelog } from "@/data/changelog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tagStyles = {
  new: "bg-green-500/20 text-green-400 border-green-500/30",
  fix: "bg-red-500/20 text-red-400 border-red-500/30",
  improvement: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const tagLabels = { new: "Novo", fix: "Correção", improvement: "Melhoria" };

const Changelog = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-3xl font-bold mb-2">
      <span className="sakura-text-gradient">Changelog</span>
    </h1>
    <p className="text-muted-foreground mb-10">Histórico de atualizações do Sakura Bot.</p>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-10">
        {changelog.map((entry) => (
          <div key={entry.version} className="relative pl-10">
            {/* Dot */}
            <div className="absolute left-[10px] top-1.5 w-3 h-3 rounded-full bg-primary sakura-glow" />

            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="text-xl font-bold">v{entry.version}</h3>
              <span className="text-sm text-muted-foreground">{entry.date}</span>
            </div>

            <div className="space-y-2">
              {entry.changes.map((change, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card sakura-border-glow">
                  <Badge variant="outline" className={cn("text-xs shrink-0 mt-0.5", tagStyles[change.type])}>
                    {tagLabels[change.type]}
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

export default Changelog;
