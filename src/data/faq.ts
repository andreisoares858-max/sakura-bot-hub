export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Como adiciono o Sakura Bot ao meu servidor?",
    answer: "Você pode adquirir o Sakura Bot através do BuiltByBit. Após a compra, você receberá instruções detalhadas de como hospedar e configurar o bot no seu servidor Discord.",
  },
  {
    question: "Quais são os requisitos para rodar o bot?",
    answer: "O Sakura Bot requer Node.js 18+ e um banco de dados MongoDB. Recomendamos pelo menos 512MB de RAM e uma conexão estável com a internet para melhor desempenho.",
  },
  {
    question: "Como configuro as mensagens de boas-vindas?",
    answer: "Use o comando /welcome-set seguido do canal e da mensagem desejada. Você pode usar variáveis como {user}, {server} e {membercount} para personalizar. Teste com /welcome-test.",
  },
  {
    question: "O sistema de economia é persistente?",
    answer: "Sim! Todos os dados de economia, XP e níveis são salvos no banco de dados. Mesmo que o bot reinicie, os dados dos usuários são mantidos.",
  },
  {
    question: "Posso personalizar os itens da loja?",
    answer: "Sim, administradores podem adicionar itens com /additem, definindo nome, preço e o cargo que será dado ao comprar. Você pode criar quantos itens quiser.",
  },
  {
    question: "Como funciona o sistema de tickets?",
    answer: "Configure com /ticket-setup definindo o canal e a categoria. Use /ticket-panel para criar um painel com botão. Os membros clicam no botão para abrir tickets privados.",
  },
  {
    question: "O bot tem suporte a múltiplos idiomas?",
    answer: "Atualmente o Sakura Bot está disponível em Português (BR). Suporte a outros idiomas está planejado para futuras atualizações.",
  },
  {
    question: "Onde posso obter suporte?",
    answer: "Junte-se ao nosso servidor de suporte no Discord para obter ajuda da comunidade e da equipe de desenvolvimento. O link está disponível no topo do site.",
  },
];
