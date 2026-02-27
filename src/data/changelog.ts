export interface ChangelogEntry {
  version: string;
  date: string;
  changes: { type: "new" | "fix" | "improvement"; text: string }[];
}

export const changelog: ChangelogEntry[] = [
  {
    version: "2.1.0",
    date: "2025-02-20",
    changes: [
      { type: "new", text: "Sistema de loja com itens personalizáveis" },
      { type: "new", text: "Comando /leaderboard com paginação" },
      { type: "improvement", text: "Desempenho do sistema de XP otimizado" },
      { type: "fix", text: "Correção no cálculo de níveis" },
    ],
  },
  {
    version: "2.0.0",
    date: "2025-01-15",
    changes: [
      { type: "new", text: "Sistema de economia completo com moedas" },
      { type: "new", text: "Sistema de tickets com painel interativo" },
      { type: "new", text: "Mensagens de boas-vindas personalizáveis" },
      { type: "improvement", text: "Interface de comandos migrada para slash commands" },
      { type: "improvement", text: "Sistema de logs completamente reescrito" },
    ],
  },
  {
    version: "1.5.0",
    date: "2024-12-01",
    changes: [
      { type: "new", text: "Sistema de níveis e XP" },
      { type: "new", text: "Comando /rank com card visual" },
      { type: "improvement", text: "Melhorias no sistema de warns" },
      { type: "fix", text: "Correção no comando /purge para mensagens antigas" },
    ],
  },
  {
    version: "1.0.0",
    date: "2024-10-01",
    changes: [
      { type: "new", text: "Lançamento inicial do Sakura Bot" },
      { type: "new", text: "Comandos de moderação: ban, kick, mute, warn" },
      { type: "new", text: "Sistema de logs de moderação" },
      { type: "new", text: "Autorole para novos membros" },
    ],
  },
];
