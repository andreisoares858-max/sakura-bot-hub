import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  BookOpen,
  Terminal,
  Settings,
  Shield,
  Coins,
  Gamepad2,
  TrendingUp,
  Wrench,
  ArrowLeft,
} from "lucide-react";

const sections = [
  {
    id: "getting-started",
    icon: BookOpen,
    title: "Primeiros Passos",
    content: [
      {
        subtitle: "Adicionando o Bot",
        text: "Convide o Sakura Bot para o seu servidor Discord através do nosso link de convite. Após adicionar, o bot já estará pronto para uso com as configurações padrão.",
      },
      {
        subtitle: "Configuração Inicial",
        text: "Use o comando /help para ver todos os comandos disponíveis. Configure o bot através do arquivo config.yml com token, MongoDB URI, ID do servidor e preferências gerais.",
      },
      {
        subtitle: "Requisitos",
        text: "Node.js 18+, MongoDB, e um token de bot do Discord. O bot utiliza YAML para configuração, tornando a personalização simples e legível.",
      },
    ],
  },
  {
    id: "commands",
    icon: Terminal,
    title: "Comandos",
    content: [
      {
        subtitle: "Diversão (26 comandos)",
        text: "Jogos como 2048, Wordle, Connect Four, Tic Tac Toe e Hangman. Interações sociais como hug, kiss e slap. Memes, piadas, citações e muito mais.",
      },
      {
        subtitle: "Economia (20 comandos)",
        text: "Sistema completo com banco (deposit/withdraw), trabalho, apostas (blackjack, slot, roulette, coinflip), loja de itens, inventário, fishing, pet system e heist em grupo.",
      },
      {
        subtitle: "Geral (13 comandos)",
        text: "Informações do bot e servidor, sistema de giveaways, lembretes, sugestões, snipe de mensagens deletadas e mais.",
      },
      {
        subtitle: "Moderação (7 comandos)",
        text: "Gerenciamento de cargos, sistema de apelação, enquetes, reports, anti-hoist e painel completo de moderação.",
      },
      {
        subtitle: "Utilidades (11 comandos)",
        text: "Backup de servidor, auto-react, auto-response, tradução, embed builder, roubo de emojis, sistema de tickets e rastreamento de convites.",
      },
      {
        subtitle: "Leveling (3 comandos)",
        text: "Sistema de XP por mensagens, rank cards personalizados e leaderboard do servidor.",
      },
    ],
  },
  {
    id: "config",
    icon: Settings,
    title: "Configuração (YAML)",
    content: [
      {
        subtitle: "config.yml",
        text: "Arquivo principal com token do bot, MongoDB URI, ID do servidor, cores de embed, timezone, canais de log (member updates, bans, kicks, voice, messages) e configurações de sistemas como tickets, welcome, leveling e anti-nuke.",
      },
      {
        subtitle: "commands.yml",
        text: "Habilite ou desabilite comandos individualmente. Cada comando pode ser ligado ou desligado sem precisar reiniciar o bot.",
      },
      {
        subtitle: "lang.yml",
        text: "Personalize todas as mensagens do bot no seu idioma. Inclui textos de embed, mensagens de erro, respostas de comandos e notificações de sistemas.",
      },
      {
        subtitle: "events.yml",
        text: "Configure eventos como Engagement Events para interações automáticas com os membros do servidor.",
      },
    ],
  },
  {
    id: "moderation",
    icon: Shield,
    title: "Moderação & Segurança",
    content: [
      {
        subtitle: "Anti-Nuke",
        text: "Proteção contra ações destrutivas em massa como criação/deleção de canais, bans em massa e alterações no servidor.",
      },
      {
        subtitle: "Auto-Moderação",
        text: "Anti-spam, anti-mass mention, blacklist de palavras, anti-hoist e prevenção contra contas alternativas.",
      },
      {
        subtitle: "Sistema de Warns",
        text: "Avise membros com histórico completo. Configure auto-kick após X avisos. Inclui sistema de apelação para membros recorrerem.",
      },
      {
        subtitle: "Logs Detalhados",
        text: "Logs para mensagens editadas/deletadas, entrada/saída de membros, bans, kicks, timeouts, mudanças de cargo, atualizações de canal e atividade de voz.",
      },
    ],
  },
  {
    id: "economy",
    icon: Coins,
    title: "Economia",
    content: [
      {
        subtitle: "Sistema Bancário",
        text: "Saldo em carteira e banco com comandos de depósito e saque. Transferências entre membros e sistema de roubo com cooldowns.",
      },
      {
        subtitle: "Trabalho & Crime",
        text: "Ganhe moedas trabalhando ou arriscando com crimes. Recompensas diárias e sistema de boosters para multiplicadores de ganho.",
      },
      {
        subtitle: "Jogos de Aposta",
        text: "Blackjack, caça-níquel, roleta, coinflip e dados. Cada jogo com mecânicas próprias e odds configuráveis.",
      },
      {
        subtitle: "Loja & Inventário",
        text: "Crie itens personalizados na loja com preços e efeitos. Membros podem comprar, usar e colecionar itens. Inclui sistema de pet e fishing.",
      },
    ],
  },
  {
    id: "events",
    icon: TrendingUp,
    title: "Eventos & Automação",
    content: [
      {
        subtitle: "Welcome & Leave",
        text: "Mensagens personalizadas de boas-vindas e saída com embeds customizáveis. Auto-role para novos membros.",
      },
      {
        subtitle: "Giveaways",
        text: "Sistema completo de sorteios com logs, agendamento, múltiplos vencedores e re-roll.",
      },
      {
        subtitle: "Verificação",
        text: "Sistema de verificação para novos membros com botão e embed customizáveis, adicionando segurança ao servidor.",
      },
      {
        subtitle: "Engagement Events",
        text: "Eventos automáticos de engajamento para manter os membros ativos e interagindo no servidor.",
      },
    ],
  },
  {
    id: "utilities",
    icon: Wrench,
    title: "Utilitários",
    content: [
      {
        subtitle: "Tickets",
        text: "Sistema avançado com tipos de ticket, prioridade, horário de funcionamento, transcrições, alertas automáticos, DM de fechamento e reviews.",
      },
      {
        subtitle: "Backup",
        text: "Crie backups completos do servidor incluindo canais, cargos e configurações. Restaure a qualquer momento com confirmação de segurança.",
      },
      {
        subtitle: "IA Integrada",
        text: "Provider de IA configurável para interações inteligentes. Adicione respostas automáticas contextuais ao seu servidor.",
      },
      {
        subtitle: "Outros",
        text: "Tradução em tempo real, embed builder visual, roubo de emojis de outros servidores, stats de canal e sistema de sugestões com votação.",
      },
    ],
  },
];

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient-sakura">Documentação</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Guia completo para configurar e utilizar o Sakura Bot no seu servidor.
          </p>
        </div>

        {/* Quick nav */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-16">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-card border border-border hover:border-primary/40 transition-all text-sm text-muted-foreground hover:text-foreground"
            >
              <s.icon className="w-4 h-4 text-primary shrink-0" />
              {s.title}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-6">
                {section.content.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-card border border-border rounded-xl p-6"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default DocsPage;
