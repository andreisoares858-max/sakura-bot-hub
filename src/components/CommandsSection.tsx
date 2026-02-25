import { useState } from "react";

interface Command {
  name: string;
  desc: string;
}

const categories: Record<string, Command[]> = {
  "🎮 Fun": [
    { name: "2048", desc: "Jogue o clássico 2048" },
    { name: "8ball", desc: "Pergunte à bola mágica" },
    { name: "advice", desc: "Receba um conselho" },
    { name: "ascii", desc: "Texto em arte ASCII" },
    { name: "compliment", desc: "Elogie alguém" },
    { name: "connectfour", desc: "Jogue Connect Four" },
    { name: "darkjoke", desc: "Piada de humor negro" },
    { name: "fact", desc: "Fato aleatório" },
    { name: "fliptext", desc: "Inverta seu texto" },
    { name: "guess", desc: "Adivinhe o número" },
    { name: "hangman", desc: "Jogue forca" },
    { name: "hug", desc: "Abrace alguém" },
    { name: "image", desc: "Busque uma imagem" },
    { name: "kill", desc: "Elimine alguém (fictício)" },
    { name: "kiss", desc: "Beije alguém" },
    { name: "lennyface", desc: "( ͡° ͜ʖ ͡°)" },
    { name: "meme", desc: "Meme aleatório" },
    { name: "pickupline", desc: "Cantada aleatória" },
    { name: "quote", desc: "Citação inspiradora" },
    { name: "rizz", desc: "Teste seu charme" },
    { name: "roast", desc: "Zoeira com alguém" },
    { name: "rps", desc: "Pedra, papel, tesoura" },
    { name: "say", desc: "Bot repete sua msg" },
    { name: "slap", desc: "Dê um tapa em alguém" },
    { name: "tictactoe", desc: "Jogo da velha" },
    { name: "wordle", desc: "Jogue Wordle" },
  ],
  "💰 Economy": [
    { name: "balance", desc: "Veja seu saldo" },
    { name: "beg", desc: "Peça dinheiro" },
    { name: "blackjack", desc: "Jogue 21" },
    { name: "booster", desc: "Ative um booster" },
    { name: "coinflip", desc: "Cara ou coroa" },
    { name: "crime", desc: "Cometa um crime" },
    { name: "daily", desc: "Recompensa diária" },
    { name: "deposit", desc: "Deposite no banco" },
    { name: "economy", desc: "Painel de economia" },
    { name: "fishing", desc: "Pesque peixes" },
    { name: "heist", desc: "Assalto em grupo" },
    { name: "inventory", desc: "Seu inventário" },
    { name: "rob", desc: "Roube alguém" },
    { name: "roll", desc: "Role os dados" },
    { name: "roulette", desc: "Roleta russa" },
    { name: "slot", desc: "Caça-níquel" },
    { name: "store", desc: "Loja de itens" },
    { name: "transfer", desc: "Transfira dinheiro" },
    { name: "withdraw", desc: "Saque do banco" },
    { name: "work", desc: "Trabalhe por moedas" },
  ],
  "📋 General": [
    { name: "botavatar", desc: "Avatar do bot" },
    { name: "botinfo", desc: "Info do bot" },
    { name: "eventos", desc: "Eventos ativos" },
    { name: "giveaway", desc: "Crie sorteios" },
    { name: "help", desc: "Lista de comandos" },
    { name: "ping", desc: "Latência do bot" },
    { name: "reminder", desc: "Crie lembretes" },
    { name: "serverinfo", desc: "Info do servidor" },
    { name: "snipe", desc: "Msg deletada" },
    { name: "suggest", desc: "Faça sugestões" },
    { name: "suggestapp", desc: "Sugestão de app" },
    { name: "testwelcome", desc: "Teste boas-vindas" },
    { name: "user", desc: "Info de usuário" },
  ],
  "⚔️ Moderation": [
    { name: "antihoist", desc: "Anti caracteres no nick" },
    { name: "apelo", desc: "Sistema de apelação" },
    { name: "moderation", desc: "Painel de moderação" },
    { name: "poll", desc: "Crie enquetes" },
    { name: "removerole", desc: "Remova um cargo" },
    { name: "report", desc: "Denuncie um usuário" },
    { name: "role", desc: "Gerencie cargos" },
  ],
  "🔧 Utility": [
    { name: "autoReact", desc: "Reação automática" },
    { name: "autoResponse", desc: "Resposta automática" },
    { name: "backup", desc: "Backup do servidor" },
    { name: "BotActivity", desc: "Status do bot" },
    { name: "channelstats", desc: "Stats do canal" },
    { name: "embed", desc: "Crie embeds" },
    { name: "steal", desc: "Roube emojis" },
    { name: "translate", desc: "Traduza textos" },
    { name: "inviter", desc: "Quem convidou" },
    { name: "invites", desc: "Seus convites" },
    { name: "tickets", desc: "Sistema de tickets" },
  ],
  "📈 Leveling": [
    { name: "leaderboard", desc: "Ranking do servidor" },
    { name: "level", desc: "Veja seu nível" },
    { name: "rank", desc: "Seu rank card" },
  ],
};

const CommandsSection = () => {
  const [active, setActive] = useState("🎮 Fun");

  return (
    <section id="comandos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient-sakura">81+</span> Comandos
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore todos os comandos por categoria.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-sakura text-primary-foreground shadow-sakura"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Commands grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {categories[active].map((cmd) => (
            <div
              key={cmd.name}
              className="bg-gradient-card border border-border rounded-lg px-4 py-4 hover:border-primary/40 transition-all duration-200 group"
            >
              <code className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                /{cmd.name}
              </code>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">
                {cmd.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;
