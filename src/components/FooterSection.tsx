const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-sakura flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">S</span>
          </div>
          <span className="font-heading font-semibold text-foreground">Sakura Bot</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Sakura Bot. Feito com 🌸 e Node.js
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
