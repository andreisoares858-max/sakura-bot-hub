import { useState } from "react";

const categories: Record<string, string[]> = {
  "🎮 Fun": [
    "2048", "8ball", "advice", "ascii", "compliment", "connectfour", "darkjoke",
    "fact", "fliptext", "guess", "hangman", "hug", "image", "kill", "kiss",
    "lennyface", "meme", "pickupline", "quote", "rizz", "roast", "rps",
    "say", "slap", "tictactoe", "wordle",
  ],
  "💰 Economy": [
    "balance", "beg", "blackjack", "booster", "coinflip", "crime", "daily",
    "deposit", "economy", "fishing", "heist", "inventory", "rob", "roll",
    "roulette", "slot", "store", "transfer", "withdraw", "work",
  ],
  "📋 General": [
    "botavatar", "botinfo", "eventos", "giveaway", "help", "ping",
    "reminder", "serverinfo", "snipe", "suggest", "suggestapp", "testwelcome", "user",
  ],
  "⚔️ Moderation": [
    "antihoist", "apelo", "moderation", "poll", "removerole", "report", "role",
  ],
  "🔧 Utility": [
    "autoReact", "autoResponse", "backup", "BotActivity", "channelstats",
    "embed", "steal", "translate", "inviter", "invites", "tickets",
  ],
  "📈 Leveling": ["leaderboard", "level", "rank"],
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {categories[active].map((cmd) => (
            <div
              key={cmd}
              className="bg-gradient-card border border-border rounded-lg px-4 py-3 text-center hover:border-primary/40 transition-all duration-200 group"
            >
              <code className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                /{cmd}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;
