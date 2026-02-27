import { useMemo } from "react";

const SakuraPetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 8}s`,
        size: 8 + Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: p.left,
            top: "-20px",
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            <ellipse cx="10" cy="8" rx="6" ry="8" fill="hsl(330, 80%, 70%)" />
            <ellipse cx="8" cy="10" rx="5" ry="7" fill="hsl(330, 90%, 78%)" opacity="0.7" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SakuraPetals;
