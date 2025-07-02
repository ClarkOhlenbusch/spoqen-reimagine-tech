import { useState, useEffect, ReactNode } from "react";

interface InteractiveBackgroundProps {
  children: ReactNode;
  variant?: 'hero' | 'features' | 'how-it-works' | 'pricing' | 'footer';
  className?: string;
}

export const InteractiveBackground = ({ 
  children, 
  variant = 'hero', 
  className = "" 
}: InteractiveBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getVariantConfig = () => {
    switch (variant) {
      case 'features':
        return {
          primaryOrb: { size: 'w-80 h-80', color: 'bg-accent/25', intensity: 0.4 },
          secondaryOrb: { size: 'w-64 h-64', color: 'bg-primary/20', intensity: 0.3 },
          accentOrb: { size: 'w-72 h-72', color: 'bg-secondary/15', intensity: 0.25 },
          particles: 6,
          gradientColors: 'hsl(270 100% 60% / 0.08), hsl(315 100% 50% / 0.06), hsl(180 100% 50% / 0.04)'
        };
      case 'how-it-works':
        return {
          primaryOrb: { size: 'w-96 h-96', color: 'bg-secondary/30', intensity: 0.5 },
          secondaryOrb: { size: 'w-72 h-72', color: 'bg-accent/25', intensity: 0.4 },
          accentOrb: { size: 'w-80 h-80', color: 'bg-primary/20', intensity: 0.3 },
          particles: 8,
          gradientColors: 'hsl(180 100% 50% / 0.1), hsl(270 100% 60% / 0.08), hsl(315 100% 50% / 0.06)'
        };
      case 'pricing':
        return {
          primaryOrb: { size: 'w-64 h-64', color: 'bg-primary/30', intensity: 0.6 },
          secondaryOrb: { size: 'w-88 h-88', color: 'bg-secondary/20', intensity: 0.4 },
          accentOrb: { size: 'w-56 h-56', color: 'bg-accent/25', intensity: 0.3 },
          particles: 5,
          gradientColors: 'hsl(315 100% 50% / 0.12), hsl(180 100% 50% / 0.08), hsl(270 100% 60% / 0.06)'
        };
      case 'footer':
        return {
          primaryOrb: { size: 'w-48 h-48', color: 'bg-primary/15', intensity: 0.3 },
          secondaryOrb: { size: 'w-56 h-56', color: 'bg-accent/15', intensity: 0.25 },
          accentOrb: { size: 'w-40 h-40', color: 'bg-secondary/10', intensity: 0.2 },
          particles: 4,
          gradientColors: 'hsl(315 100% 50% / 0.05), hsl(270 100% 60% / 0.04), hsl(180 100% 50% / 0.03)'
        };
      default: // hero
        return {
          primaryOrb: { size: 'w-96 h-96', color: 'bg-primary/30', intensity: 0.6 },
          secondaryOrb: { size: 'w-80 h-80', color: 'bg-secondary/25', intensity: 0.5 },
          accentOrb: { size: 'w-72 h-72', color: 'bg-accent/20', intensity: 0.4 },
          particles: 8,
          gradientColors: 'hsl(315 100% 50% / 0.1), hsl(270 100% 60% / 0.05), hsl(180 100% 50% / 0.03)'
        };
    }
  };

  const config = getVariantConfig();
  const time = Date.now() * 0.001;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main interactive orb that follows mouse */}
        <div 
          className={`absolute ${config.primaryOrb.size} ${config.primaryOrb.color} rounded-full blur-3xl transition-all duration-700 ease-out`}
          style={{
            left: `${mousePosition.x * config.primaryOrb.intensity}%`,
            top: `${mousePosition.y * config.primaryOrb.intensity + (scrollY * 0.1)}%`,
            transform: `translate(-50%, -50%) scale(${1 + Math.sin(time * 0.8) * 0.2})`,
          }}
        ></div>
        
        {/* Secondary orb with inverse movement */}
        <div 
          className={`absolute ${config.secondaryOrb.size} ${config.secondaryOrb.color} rounded-full blur-3xl transition-all duration-1000 ease-out`}
          style={{
            right: `${(100 - mousePosition.x) * config.secondaryOrb.intensity}%`,
            bottom: `${(100 - mousePosition.y) * config.secondaryOrb.intensity + (scrollY * 0.05)}%`,
            transform: `translate(50%, 50%) scale(${1 + Math.cos(time * 1.2) * 0.15})`,
          }}
        ></div>
        
        {/* Accent orb with circular motion */}
        <div 
          className={`absolute ${config.accentOrb.size} ${config.accentOrb.color} rounded-full blur-3xl transition-all duration-500`}
          style={{
            left: `${50 + Math.sin(time * 0.6 + mousePosition.x * 0.01) * 20}%`,
            top: `${50 + Math.cos(time * 0.6 + mousePosition.y * 0.01) * 20 + (scrollY * 0.03)}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        
        {/* Interactive gradient overlay */}
        <div 
          className="absolute inset-0 opacity-60 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              ${config.gradientColors} 0%, 
              transparent 100%)`,
          }}
        ></div>
        
        {/* Floating particles */}
        {[...Array(config.particles)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full blur-sm animate-float"
            style={{
              left: `${20 + i * (60 / config.particles) + Math.sin(time * 0.8 + i) * 8}%`,
              top: `${30 + (i % 3) * 20 + Math.cos(time * 0.8 + i) * 5 + (scrollY * 0.02)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + i * 0.5}s`,
              opacity: 0.4 + Math.sin(time + i) * 0.2,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};