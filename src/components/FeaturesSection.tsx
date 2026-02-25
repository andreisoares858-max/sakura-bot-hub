import { Gamepad2, Coins, Shield, TrendingUp, Wrench, Ticket, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Diversão",
    description: "26 comandos de jogos, memes, piadas e interações sociais como hug, kiss e slap.",
    count: 26,
  },
  {
    icon: Coins,
    title: "Economia",
    description: "Sistema completo com banco, trabalho, apostas, loja, inventário e heist.",
    count: 20,
  },
  {
    icon: Users,
    title: "Geral",
    description: "Informações do servidor, giveaways, lembretes, sugestões e mais.",
    count: 13,
  },
  {
    icon: TrendingUp,
    title: "Leveling",
    description: "Sistema de XP com leaderboard, rank cards personalizados e recompensas.",
    count: 3,
  },
  {
    icon: Shield,
    title: "Moderação",
    description: "AntiNuke, antihoist, sistema de warns, polls, reports e logs detalhados.",
    count: 7,
  },
  {
    icon: Wrench,
    title: "Utilidades",
    description: "Backup, auto-react, auto-response, tradução, embed builder e mais.",
    count: 8,
  },
  {
    icon: Ticket,
    title: "Tickets",
    description: "Sistema completo de tickets com prioridade, horários e transcrições.",
    count: 1,
  },
  {
    icon: Sparkles,
    title: "IA Integrada",
    description: "Provider de IA configurável para interações inteligentes com os membros.",
    count: null,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
            Tudo que seu servidor <span className="text-gradient-sakura">precisa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Um bot poderoso com funcionalidades para cada aspecto do seu servidor Discord.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-sakura"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {feature.description}
              </p>
              {feature.count && (
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {feature.count} comandos
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
