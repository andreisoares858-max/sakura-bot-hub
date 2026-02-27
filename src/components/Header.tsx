import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Cherry, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/docs", label: "Documentação" },
  { to: "/commands", label: "Comandos" },
  { to: "/changelog", label: "Changelog" },
  { to: "/faq", label: "FAQ" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Cherry className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold sakura-text-gradient">Sakura Bot</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://discord.gg/N8TGxZvAN3" target="_blank" rel="noopener noreferrer">
              Discord <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
          <Button size="sm" className="sakura-gradient text-primary-foreground font-semibold" asChild>
            <a href="https://builtbybit.com/resources/sakura-community-bot.95773/" target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-72">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col gap-2 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border my-2" />
              <a href="https://discord.gg/N8TGxZvAN3" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground">
                Discord
              </a>
              <a href="https://builtbybit.com/resources/sakura-community-bot.95773/" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm font-semibold text-primary">
                Comprar no BuiltByBit
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
