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
          Um bot completo para Discord com <span className="text-primary font-medium">81+ comandos</span>, economia, diversão, moderação, leveling e muito mais.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#comandos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-sakura text-primary-foreground font-semibold text-lg shadow-sakura hover:shadow-sakura-lg transition-all duration-300 hover:scale-105"
          >
            Ver Comandos
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary/30 text-foreground font-semibold text-lg hover:bg-primary/10 transition-all duration-300"
          >
            Funcionalidades
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
