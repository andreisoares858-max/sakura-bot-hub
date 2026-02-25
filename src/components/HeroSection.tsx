import heroBg from "@/assets/hero-bg.png";

const stats = [
  { value: "81+", label: "Comandos" },
  { value: "24", label: "Eventos" },
  { value: "8", label: "Categorias" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating petals */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary/40 animate-pulse-glow"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Discord Bot • Node.js</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-800 mb-6 leading-tight">
          <span className="text-gradient-sakura">Sakura</span>
          <br />
          <span className="text-foreground">Bot</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforme seu servidor com <span className="text-primary font-medium">81+ comandos</span> poderosos — de economia e jogos a moderação avançada e IA. Tudo em um único bot, leve e personalizável.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://discord.gg/N8TGxZvAN3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-sakura text-primary-foreground font-semibold text-lg shadow-sakura hover:shadow-sakura-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
            Servidor de suporte
          </a>
          <a
            href="#comandos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary/30 text-foreground font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
          >
            Ver Comandos
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient-sakura">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
