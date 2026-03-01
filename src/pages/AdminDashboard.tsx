import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useSiteContent, useUpdateSiteContent } from "@/hooks/useSiteContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Save, Plus, Trash2, LogOut, Home, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { faqItems as defaultFaqItems } from "@/data/faq";
import { changelog as defaultChangelog } from "@/data/changelog";

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const updateContent = useUpdateSiteContent();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin-login", { replace: true });
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading || !isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold sakura-text-gradient">Painel Admin</h1>
          <p className="text-sm text-muted-foreground mt-1">Gerencie todo o conteúdo do site</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Voltar ao site
          </Button>
          <Button variant="outline" size="sm" onClick={signOut} className="text-destructive hover:text-destructive">
            <LogOut className="h-4 w-4 mr-1" /> Sair
          </Button>
        </div>
      </div>

      <Tabs defaultValue="home" className="space-y-6">
        <TabsList className="bg-card sakura-border-glow p-1 h-auto flex-wrap">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="docs">Documentação</TabsTrigger>
          <TabsTrigger value="commands">Comandos</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="changelog">Changelog</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="home"><HomeEditor /></TabsContent>
        <TabsContent value="docs"><DocsEditor /></TabsContent>
        <TabsContent value="commands"><CommandsEditor /></TabsContent>
        <TabsContent value="faq"><FaqEditor /></TabsContent>
        <TabsContent value="changelog"><ChangelogEditor /></TabsContent>
        <TabsContent value="footer"><FooterEditor /></TabsContent>
      </Tabs>
    </div>
  );
};

// ─── HOME EDITOR ────────────────────────────────────────

const HomeEditor = () => {
  const { data: heroContent } = useSiteContent("index", "hero");
  const { data: featuresContent } = useSiteContent("index", "features");
  const updateContent = useUpdateSiteContent();

  const defaultHero = {
    badge: "Bot de Comunidade para Discord",
    title: "Sakura Bot",
    subtitle: "O bot completo para gerenciar sua comunidade no Discord. Moderação, economia, tickets e muito mais — tudo em um só lugar.",
    featuresHeading: "Tudo que você precisa para sua comunidade",
  };

  const defaultFeatures = [
    { title: "Moderação", desc: "Ban, kick, mute, warn e logs completos para manter seu servidor seguro." },
    { title: "Economia & Levels", desc: "Sistema de XP, níveis, moedas, trabalho e loja personalizável." },
    { title: "Tickets", desc: "Sistema de suporte com painel interativo e gestão de tickets." },
    { title: "Boas-vindas", desc: "Mensagens automáticas de entrada e saída com autorole." },
  ];

  const [hero, setHero] = useState(defaultHero);
  const [features, setFeatures] = useState(defaultFeatures);

  useEffect(() => {
    if (heroContent) setHero({ ...defaultHero, ...(heroContent as any) });
  }, [heroContent]);

  useEffect(() => {
    if (featuresContent) setFeatures((featuresContent as any)?.items || defaultFeatures);
  }, [featuresContent]);

  const saveHero = () => {
    updateContent.mutate({ page: "index", sectionKey: "hero", content: hero }, {
      onSuccess: () => toast.success("Hero salvo!"),
    });
  };

  const saveFeatures = () => {
    updateContent.mutate({ page: "index", sectionKey: "features", content: { items: features } }, {
      onSuccess: () => toast.success("Features salvas!"),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card sakura-border-glow">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Hero</CardTitle>
          <Button size="sm" onClick={saveHero}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Badge</label>
            <Input value={hero.badge} onChange={e => setHero({ ...hero, badge: e.target.value })} className="bg-background" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Título</label>
            <Input value={hero.title} onChange={e => setHero({ ...hero, title: e.target.value })} className="bg-background" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Subtítulo</label>
            <Textarea value={hero.subtitle} onChange={e => setHero({ ...hero, subtitle: e.target.value })} className="bg-background" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Título da seção de Features</label>
            <Input value={hero.featuresHeading} onChange={e => setHero({ ...hero, featuresHeading: e.target.value })} className="bg-background" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card sakura-border-glow">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Features</CardTitle>
          <Button size="sm" onClick={saveFeatures}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {features.map((f, i) => (
            <div key={i} className="p-4 rounded-lg bg-background/50 space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Feature {i + 1}</Badge>
              </div>
              <Input value={f.title} onChange={e => {
                const updated = [...features];
                updated[i] = { ...updated[i], title: e.target.value };
                setFeatures(updated);
              }} placeholder="Título" className="bg-background" />
              <Textarea value={f.desc} onChange={e => {
                const updated = [...features];
                updated[i] = { ...updated[i], desc: e.target.value };
                setFeatures(updated);
              }} placeholder="Descrição" className="bg-background" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

// ─── DOCS EDITOR ────────────────────────────────────────

const DocsEditor = () => {
  const { data: headerContent } = useSiteContent("docs", "header");
  const updateContent = useUpdateSiteContent();

  const [header, setHeader] = useState({ title: "Documentação" });

  useEffect(() => {
    if (headerContent) setHeader({ ...header, ...(headerContent as any) });
  }, [headerContent]);

  const categories = ["moderation", "economy", "tickets", "welcome"];
  const defaultDescs: Record<string, string> = {
    moderation: "Ferramentas para manter seu servidor seguro e organizado.",
    economy: "Sistema completo de XP, níveis, moedas e loja.",
    tickets: "Gerencie suporte com tickets organizados.",
    welcome: "Configure mensagens automáticas e autorole.",
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card sakura-border-glow">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Cabeçalho</CardTitle>
          <Button size="sm" onClick={() => {
            updateContent.mutate({ page: "docs", sectionKey: "header", content: header }, {
              onSuccess: () => toast.success("Cabeçalho salvo!"),
            });
          }}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
        </CardHeader>
        <CardContent>
          <label className="text-sm text-muted-foreground mb-1 block">Título</label>
          <Input value={header.title} onChange={e => setHeader({ ...header, title: e.target.value })} className="bg-background" />
        </CardContent>
      </Card>

      {categories.map(cat => (
        <CategoryDescEditor key={cat} category={cat} defaultDesc={defaultDescs[cat]} />
      ))}
    </div>
  );
};

const CategoryDescEditor = ({ category, defaultDesc }: { category: string; defaultDesc: string }) => {
  const { data: content } = useSiteContent("docs", `category-${category}`);
  const updateContent = useUpdateSiteContent();
  const [desc, setDesc] = useState(defaultDesc);

  useEffect(() => {
    if (content) setDesc((content as any)?.description || defaultDesc);
  }, [content]);

  return (
    <Card className="bg-card sakura-border-glow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg capitalize">{category}</CardTitle>
        <Button size="sm" onClick={() => {
          updateContent.mutate({ page: "docs", sectionKey: `category-${category}`, content: { description: desc } }, {
            onSuccess: () => toast.success(`${category} salvo!`),
          });
        }}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
      </CardHeader>
      <CardContent>
        <label className="text-sm text-muted-foreground mb-1 block">Descrição da categoria</label>
        <Textarea value={desc} onChange={e => setDesc(e.target.value)} className="bg-background" />
      </CardContent>
    </Card>
  );
};

// ─── COMMANDS EDITOR ────────────────────────────────────

const CommandsEditor = () => {
  const { data: headerContent } = useSiteContent("commands", "header");
  const updateContent = useUpdateSiteContent();
  const [header, setHeader] = useState({ title: "Comandos", subtitle: "Todos os 30+ comandos do Sakura Bot." });

  useEffect(() => {
    if (headerContent) setHeader({ ...header, ...(headerContent as any) });
  }, [headerContent]);

  return (
    <Card className="bg-card sakura-border-glow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Cabeçalho</CardTitle>
        <Button size="sm" onClick={() => {
          updateContent.mutate({ page: "commands", sectionKey: "header", content: header }, {
            onSuccess: () => toast.success("Cabeçalho salvo!"),
          });
        }}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Título</label>
          <Input value={header.title} onChange={e => setHeader({ ...header, title: e.target.value })} className="bg-background" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Subtítulo</label>
          <Input value={header.subtitle} onChange={e => setHeader({ ...header, subtitle: e.target.value })} className="bg-background" />
        </div>
      </CardContent>
    </Card>
  );
};

// ─── FAQ EDITOR ─────────────────────────────────────────

const FaqEditor = () => {
  const { data: itemsContent } = useSiteContent("faq", "items");
  const { data: headerContent } = useSiteContent("faq", "header");
  const updateContent = useUpdateSiteContent();

  const [header, setHeader] = useState({ title: "FAQ", subtitle: "Perguntas frequentes sobre o Sakura Bot." });
  const [items, setItems] = useState(defaultFaqItems.map(f => ({ question: f.question, answer: f.answer })));

  useEffect(() => {
    if (headerContent) setHeader({ ...header, ...(headerContent as any) });
  }, [headerContent]);

  useEffect(() => {
    if (itemsContent) setItems((itemsContent as any)?.items || defaultFaqItems);
  }, [itemsContent]);

  const saveAll = () => {
    updateContent.mutate({ page: "faq", sectionKey: "header", content: header });
    updateContent.mutate({ page: "faq", sectionKey: "items", content: { items } }, {
      onSuccess: () => toast.success("FAQ salvo!"),
    });
  };

  const addItem = () => {
    setItems([...items, { question: "Nova pergunta", answer: "Resposta aqui..." }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card sakura-border-glow">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Cabeçalho</CardTitle>
          <Button size="sm" onClick={saveAll}><Save className="h-4 w-4 mr-1" /> Salvar tudo</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Título</label>
            <Input value={header.title} onChange={e => setHeader({ ...header, title: e.target.value })} className="bg-background" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Subtítulo</label>
            <Input value={header.subtitle} onChange={e => setHeader({ ...header, subtitle: e.target.value })} className="bg-background" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card sakura-border-glow">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Perguntas ({items.length})</CardTitle>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={addItem}><Plus className="h-4 w-4 mr-1" /> Adicionar</Button>
            <Button size="sm" onClick={saveAll}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-background/50 space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">Pergunta {i + 1}</Badge>
                <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive hover:text-destructive" onClick={() => removeItem(i)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
              <Input value={item.question} onChange={e => {
                const updated = [...items];
                updated[i] = { ...updated[i], question: e.target.value };
                setItems(updated);
              }} placeholder="Pergunta" className="bg-background" />
              <Textarea value={item.answer} onChange={e => {
                const updated = [...items];
                updated[i] = { ...updated[i], answer: e.target.value };
                setItems(updated);
              }} placeholder="Resposta" className="bg-background" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

// ─── CHANGELOG EDITOR ───────────────────────────────────

const ChangelogEditor = () => {
  const { data: headerContent } = useSiteContent("changelog", "header");
  const { data: entriesContent } = useSiteContent("changelog", "entries");
  const updateContent = useUpdateSiteContent();

  const [header, setHeader] = useState({ title: "Changelog", subtitle: "Histórico de atualizações do Sakura Bot." });
  const [entries, setEntries] = useState(defaultChangelog.map(e => ({
    version: e.version,
    date: e.date,
    changes: e.changes.map(c => ({ type: c.type, text: c.text })),
  })));

  useEffect(() => {
    if (headerContent) setHeader({ ...header, ...(headerContent as any) });
  }, [headerContent]);

  useEffect(() => {
    if (entriesContent) setEntries((entriesContent as any)?.items || defaultChangelog);
  }, [entriesContent]);

  const saveAll = () => {
    updateContent.mutate({ page: "changelog", sectionKey: "header", content: header });
    updateContent.mutate({ page: "changelog", sectionKey: "entries", content: { items: entries } }, {
      onSuccess: () => toast.success("Changelog salvo!"),
    });
  };

  const addVersion = () => {
    setEntries([
      { version: "0.0.0", date: new Date().toISOString().split("T")[0], changes: [{ type: "new" as const, text: "Nova mudança" }] },
      ...entries,
    ]);
  };

  const removeVersion = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const addChange = (entryIdx: number) => {
    const updated = [...entries];
    updated[entryIdx] = {
      ...updated[entryIdx],
      changes: [...updated[entryIdx].changes, { type: "new" as const, text: "Nova mudança" }],
    };
    setEntries(updated);
  };

  const removeChange = (entryIdx: number, changeIdx: number) => {
    const updated = [...entries];
    updated[entryIdx] = {
      ...updated[entryIdx],
      changes: updated[entryIdx].changes.filter((_, i) => i !== changeIdx),
    };
    setEntries(updated);
  };

  const tagOptions = [
    { value: "new", label: "Novo" },
    { value: "fix", label: "Correção" },
    { value: "improvement", label: "Melhoria" },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-card sakura-border-glow">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Cabeçalho</CardTitle>
          <Button size="sm" onClick={saveAll}><Save className="h-4 w-4 mr-1" /> Salvar tudo</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Título</label>
            <Input value={header.title} onChange={e => setHeader({ ...header, title: e.target.value })} className="bg-background" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Subtítulo</label>
            <Input value={header.subtitle} onChange={e => setHeader({ ...header, subtitle: e.target.value })} className="bg-background" />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Versões ({entries.length})</h3>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={addVersion}><Plus className="h-4 w-4 mr-1" /> Nova versão</Button>
          <Button size="sm" onClick={saveAll}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
        </div>
      </div>

      {entries.map((entry, entryIdx) => (
        <Card key={entryIdx} className="bg-card sakura-border-glow">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div className="flex items-center gap-3">
              <CardTitle className="text-base">v{entry.version}</CardTitle>
              <span className="text-xs text-muted-foreground">{entry.date}</span>
            </div>
            <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive hover:text-destructive" onClick={() => removeVersion(entryIdx)}>
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Versão</label>
                <Input value={entry.version} onChange={e => {
                  const updated = [...entries];
                  updated[entryIdx] = { ...updated[entryIdx], version: e.target.value };
                  setEntries(updated);
                }} className="bg-background" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Data</label>
                <Input type="date" value={entry.date} onChange={e => {
                  const updated = [...entries];
                  updated[entryIdx] = { ...updated[entryIdx], date: e.target.value };
                  setEntries(updated);
                }} className="bg-background" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Mudanças</label>
                <Button size="sm" variant="ghost" onClick={() => addChange(entryIdx)} className="h-7 text-xs">
                  <Plus className="h-3 w-3 mr-1" /> Adicionar
                </Button>
              </div>
              {entry.changes.map((change, changeIdx) => (
                <div key={changeIdx} className="flex items-start gap-2 p-3 rounded-lg bg-background/50">
                  <select
                    value={change.type}
                    onChange={e => {
                      const updated = [...entries];
                      updated[entryIdx].changes[changeIdx] = { ...change, type: e.target.value as any };
                      setEntries(updated);
                    }}
                    className="bg-background border border-border rounded-md px-2 py-1.5 text-xs text-foreground"
                  >
                    {tagOptions.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <Input value={change.text} onChange={e => {
                    const updated = [...entries];
                    updated[entryIdx].changes[changeIdx] = { ...change, text: e.target.value };
                    setEntries(updated);
                  }} className="bg-background flex-1" />
                  <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0 text-destructive hover:text-destructive" onClick={() => removeChange(entryIdx, changeIdx)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// ─── FOOTER EDITOR ──────────────────────────────────────

const FooterEditor = () => {
  const { data: footerContent } = useSiteContent("global", "footer");
  const updateContent = useUpdateSiteContent();

  const [footer, setFooter] = useState({
    description: "O bot de comunidade completo para o seu servidor Discord.",
    copyright: "© 2025 Sakura Bot. Todos os direitos reservados.",
  });

  useEffect(() => {
    if (footerContent) setFooter({ ...footer, ...(footerContent as any) });
  }, [footerContent]);

  return (
    <Card className="bg-card sakura-border-glow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Footer</CardTitle>
        <Button size="sm" onClick={() => {
          updateContent.mutate({ page: "global", sectionKey: "footer", content: footer }, {
            onSuccess: () => toast.success("Footer salvo!"),
          });
        }}><Save className="h-4 w-4 mr-1" /> Salvar</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Descrição</label>
          <Textarea value={footer.description} onChange={e => setFooter({ ...footer, description: e.target.value })} className="bg-background" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Copyright</label>
          <Input value={footer.copyright} onChange={e => setFooter({ ...footer, copyright: e.target.value })} className="bg-background" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboard;
