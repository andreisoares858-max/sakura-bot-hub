import { useState, useMemo } from "react";
import { Search, Terminal } from "lucide-react";
import { commands, categories } from "@/data/commands";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categoryKeys = ["all", ...Object.keys(categories)] as const;

const Commands = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return commands.filter((c) => {
      const matchSearch = c.name.includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
      const matchCat = filter === "all" || c.category === filter;
      return matchSearch && matchCat;
    });
  }, [search, filter]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="sakura-text-gradient">Comandos</span>
      </h1>
      <p className="text-muted-foreground mb-8">Todos os {commands.length} comandos do Sakura Bot.</p>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar comandos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                filter === key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {key === "all" ? "Todos" : categories[key as keyof typeof categories].label}
            </button>
          ))}
        </div>
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((cmd) => (
          <div key={cmd.name} className="p-5 rounded-xl bg-card sakura-border-glow hover:bg-card/80 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-primary" />
              <code className="font-mono font-semibold text-primary">/{cmd.name}</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{cmd.description}</p>
            <code className="text-xs bg-background/50 px-2 py-1 rounded block font-mono text-foreground/70 mb-2">{cmd.usage}</code>
            <div className="flex items-center justify-between mt-2">
              <Badge variant="secondary" className="text-xs">{categories[cmd.category].label}</Badge>
              <span className="text-xs text-muted-foreground">{cmd.permission}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          Nenhum comando encontrado.
        </div>
      )}
    </div>
  );
};

export default Commands;
