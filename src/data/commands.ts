export interface Command {
  name: string;
  description: string;
  usage: string;
  permission: string;
  category: "moderation" | "economy" | "tickets" | "welcome";
  example?: string;
}

export const commands: Command[] = [
  // Moderação
  { name: "ban", description: "Bane um usuário do servidor permanentemente.", usage: "/ban <usuário> [motivo]", permission: "Ban Members", category: "moderation", example: "/ban @user Spam repetitivo" },
  { name: "kick", description: "Expulsa um usuário do servidor.", usage: "/kick <usuário> [motivo]", permission: "Kick Members", category: "moderation", example: "/kick @user Comportamento inadequado" },
  { name: "mute", description: "Silencia um usuário por tempo determinado.", usage: "/mute <usuário> <tempo> [motivo]", permission: "Moderate Members", category: "moderation", example: "/mute @user 30m Flood no chat" },
  { name: "unmute", description: "Remove o silenciamento de um usuário.", usage: "/unmute <usuário>", permission: "Moderate Members", category: "moderation" },
  { name: "warn", description: "Aplica uma advertência a um usuário.", usage: "/warn <usuário> <motivo>", permission: "Moderate Members", category: "moderation", example: "/warn @user Linguagem ofensiva" },
  { name: "warnings", description: "Visualiza as advertências de um usuário.", usage: "/warnings <usuário>", permission: "Moderate Members", category: "moderation" },
  { name: "clearwarns", description: "Limpa todas as advertências de um usuário.", usage: "/clearwarns <usuário>", permission: "Administrator", category: "moderation" },
  { name: "purge", description: "Deleta múltiplas mensagens de um canal.", usage: "/purge <quantidade>", permission: "Manage Messages", category: "moderation", example: "/purge 50" },
  { name: "slowmode", description: "Define o modo lento em um canal.", usage: "/slowmode <segundos>", permission: "Manage Channels", category: "moderation" },
  { name: "logs", description: "Configura o canal de logs de moderação.", usage: "/logs <canal>", permission: "Administrator", category: "moderation" },

  // Economia/Levels
  { name: "rank", description: "Mostra seu nível e XP atual.", usage: "/rank [usuário]", permission: "Todos", category: "economy" },
  { name: "leaderboard", description: "Mostra o ranking dos usuários.", usage: "/leaderboard [página]", permission: "Todos", category: "economy" },
  { name: "balance", description: "Mostra seu saldo de moedas.", usage: "/balance [usuário]", permission: "Todos", category: "economy" },
  { name: "daily", description: "Coleta sua recompensa diária.", usage: "/daily", permission: "Todos", category: "economy" },
  { name: "work", description: "Trabalha para ganhar moedas.", usage: "/work", permission: "Todos", category: "economy" },
  { name: "pay", description: "Transfere moedas para outro usuário.", usage: "/pay <usuário> <quantidade>", permission: "Todos", category: "economy", example: "/pay @user 500" },
  { name: "shop", description: "Abre a loja do servidor.", usage: "/shop", permission: "Todos", category: "economy" },
  { name: "buy", description: "Compra um item da loja.", usage: "/buy <item>", permission: "Todos", category: "economy" },
  { name: "additem", description: "Adiciona um item à loja do servidor.", usage: "/additem <nome> <preço> <cargo>", permission: "Administrator", category: "economy" },
  { name: "setxp", description: "Define o XP de um usuário.", usage: "/setxp <usuário> <quantidade>", permission: "Administrator", category: "economy" },

  // Tickets
  { name: "ticket-setup", description: "Configura o sistema de tickets.", usage: "/ticket-setup <canal> <categoria>", permission: "Administrator", category: "tickets" },
  { name: "ticket-close", description: "Fecha o ticket atual.", usage: "/ticket-close", permission: "Manage Channels", category: "tickets" },
  { name: "ticket-add", description: "Adiciona um usuário ao ticket.", usage: "/ticket-add <usuário>", permission: "Manage Channels", category: "tickets" },
  { name: "ticket-remove", description: "Remove um usuário do ticket.", usage: "/ticket-remove <usuário>", permission: "Manage Channels", category: "tickets" },
  { name: "ticket-panel", description: "Cria um painel de tickets com botão.", usage: "/ticket-panel <título> <descrição>", permission: "Administrator", category: "tickets" },

  // Boas-vindas
  { name: "welcome-set", description: "Configura a mensagem de boas-vindas.", usage: "/welcome-set <canal> <mensagem>", permission: "Administrator", category: "welcome" },
  { name: "leave-set", description: "Configura a mensagem de saída.", usage: "/leave-set <canal> <mensagem>", permission: "Administrator", category: "welcome" },
  { name: "autorole", description: "Define o cargo automático para novos membros.", usage: "/autorole <cargo>", permission: "Administrator", category: "welcome" },
  { name: "welcome-test", description: "Testa a mensagem de boas-vindas.", usage: "/welcome-test", permission: "Administrator", category: "welcome" },
  { name: "welcome-toggle", description: "Ativa ou desativa as boas-vindas.", usage: "/welcome-toggle", permission: "Administrator", category: "welcome" },
];

export const categories = {
  moderation: { label: "Moderação", icon: "Shield", color: "text-red-400" },
  economy: { label: "Economia & Levels", icon: "TrendingUp", color: "text-yellow-400" },
  tickets: { label: "Tickets & Suporte", icon: "Ticket", color: "text-blue-400" },
  welcome: { label: "Boas-vindas", icon: "Heart", color: "text-sakura" },
};
