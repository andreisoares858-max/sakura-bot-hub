import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cherry, Shield, TrendingUp, Ticket, Heart, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, title: "Moderação", desc: "Ban, kick, mute, warn e logs completos para manter seu servidor seguro.", color: "text-red-400" },
  { icon: TrendingUp, title: "Economia & Levels", desc: "Sistema de XP, níveis, moedas, trabalho e loja personalizável.", color: "text-yellow-400" },
  { icon: Ticket, title: "Tickets", desc: "Sistema de suporte com painel interativo e gestão de tickets.", color: "text-blue-400" },
  { icon: Heart, title: "Boas-vindas", desc: "Mensagens automáticas de entrada e saída com autorole.", color: "text-primary" },
];

const stats = [
  { label: "Comandos", value: "30+" },
  { label: "Categorias", value: "4" },
  { label: "Atualizações", value: "Frequentes" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full sakura-border-glow bg-card/50">
            <Cherry className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Bot de Comunidade para Discord</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="sakura-text-gradient">Sakura Bot</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            O bot completo para gerenciar sua comunidade no Discord. Moderação, economia, tickets e muito mais — tudo em um só lugar.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="sakura-gradient text-primary-foreground font-semibold px-8" asChild>
              <Link to="/docs"><BookOpen className="mr-2 h-4 w-4" /> Ver Documentação</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
              <a href="https://builtbybit.com/resources/sakura-community-bot.95773/" target="_blank" rel="noopener noreferrer">
                Comprar no BuiltByBit <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-muted-foreground/30 hover:bg-accent/10 hover:border-primary/50" asChild>
              <a href="https://discord.gg/N8TGxZvAN3" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Discord de Suporte
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-8 md:gap-16 mt-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold sakura-text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tudo que você precisa para sua <span className="sakura-text-gradient">comunidade</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card sakura-border-glow hover:bg-card/80 transition-colors group"
            >
              <f.icon className={`h-10 w-10 mb-4 ${f.color} group-hover:scale-110 transition-transform`} />
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Index;
