import { Cherry } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-20">
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Cherry className="h-5 w-5 text-primary" />
            <span className="font-bold sakura-text-gradient">Sakura Bot</span>
          </div>
          <p className="text-sm text-muted-foreground">
            O bot de comunidade completo para o seu servidor Discord.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/docs" className="hover:text-primary transition-colors">Documentação</Link>
            <Link to="/commands" className="hover:text-primary transition-colors">Comandos</Link>
            <Link to="/changelog" className="hover:text-primary transition-colors">Changelog</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Externo</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="https://discord.gg/N8TGxZvAN3" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord de Suporte</a>
            <a href="https://builtbybit.com/resources/sakura-community-bot.95773/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BuiltByBit</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © 2025 Sakura Bot. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
