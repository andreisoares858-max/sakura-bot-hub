import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionLinks = isHome
    ? [
        { label: "Features", href: "#features" },
        { label: "Comandos", href: "#comandos" },
      ]
    : [];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-sakura flex items-center justify-center shadow-sakura group-hover:shadow-sakura-lg transition-all">
            <span className="text-primary-foreground font-heading font-bold text-base">S</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            Sakura <span className="text-gradient-sakura">Bot</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/docs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentação
          </Link>
          <a
            href="https://discord.gg/N8TGxZvAN3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-sakura text-primary-foreground text-sm font-semibold shadow-sakura hover:shadow-sakura-lg hover:scale-105 transition-all duration-300"
          >
            Discord
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 space-y-3">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/docs"
            onClick={() => setMobileOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground py-2"
          >
            Documentação
          </Link>
          <a
            href="https://discord.gg/N8TGxZvAN3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-sakura text-primary-foreground text-sm font-semibold"
          >
            Discord
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
