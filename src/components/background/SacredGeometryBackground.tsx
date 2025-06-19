import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SacredGeometryBackgroundProps {
  className?: string;
}

const SacredGeometryBackground: React.FC<SacredGeometryBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationTime = 0;
    const particles: Particle[] = [];
    
    // Resize canvas to match display size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    // Sacred geometry patterns
    class SacredPattern {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      size: number;
      rotation: number;
      opacity: number;
      type: 'trinity' | 'node' | 'connector';
      phase: number;
      swimmingPhase: number;
      swimmingRadius: number;

      constructor(x: number, y: number, size: number, type: 'trinity' | 'node' | 'connector') {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.size = size;
        this.rotation = 0;
        this.opacity = type === 'trinity' ? 0.25 : 0.18;
        this.type = type;
        this.phase = Math.random() * Math.PI * 2;
        this.swimmingPhase = Math.random() * Math.PI * 2;
        this.swimmingRadius = type === 'trinity' ? 30 : 50;
      }

      update(time: number, mouseX: number, mouseY: number) {
        if (reduceMotion) return;

        // Swimming motion - much slower and more gentle
        const swimmingSpeed = 0.0002; // Reduced from 0.0008
        this.swimmingPhase += swimmingSpeed;
        
        if (this.type === 'trinity') {
          // Central trinity does gentle circular motion
          this.x = this.originalX + Math.sin(this.swimmingPhase) * this.swimmingRadius;
          this.y = this.originalY + Math.cos(this.swimmingPhase * 0.7) * this.swimmingRadius * 0.5;
        } else {
          // Nodes do figure-8 swimming motion
          this.x = this.originalX + Math.sin(this.swimmingPhase) * this.swimmingRadius;
          this.y = this.originalY + Math.sin(this.swimmingPhase * 2) * this.swimmingRadius * 0.6;
        }

        // Much slower rotation
        this.rotation += 0.0001; // Reduced from 0.0005
        
        // Much slower breathing effect
        const breathingScale = 1 + Math.sin(time * 0.0003 + this.phase) * 0.03; // Reduced from 0.001 and 0.08
        this.size *= breathingScale;
        
        // Mouse attraction with swimming consideration
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200 * 0.3;
          this.x += dx * force * 0.02;
          this.y += dy * force * 0.02;
          this.opacity = Math.min(0.5, this.opacity + force * 0.2);
        } else {
          this.opacity = Math.max(this.type === 'trinity' ? 0.25 : 0.18, this.opacity - 0.01);
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, '#1a237e');
        gradient.addColorStop(0.5, '#3949ab');
        gradient.addColorStop(1, '#5c6bc0');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.type === 'trinity' ? 3 : 2;
        
        if (this.type === 'trinity') {
          this.drawTrinity(ctx);
        } else if (this.type === 'node') {
          this.drawNode(ctx);
        } else {
          this.drawConnector(ctx);
        }
        
        ctx.restore();
      }

      drawTrinity(ctx: CanvasRenderingContext2D) {
        // Central circle with glow effect
        ctx.shadowColor = '#3949ab';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Three surrounding circles
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2) / 3;
          const x = Math.cos(angle) * this.size * 0.6;
          const y = Math.sin(angle) * this.size * 0.6;
          
          ctx.beginPath();
          ctx.arc(x, y, this.size * 0.25, 0, Math.PI * 2);
          ctx.stroke();
          
          // Hexagonal patterns inside circles
          this.drawHexagon(ctx, x, y, this.size * 0.15);
        }

        // Connecting lines with flowing effect
        for (let i = 0; i < 3; i++) {
          const angle1 = (i * Math.PI * 2) / 3;
          const angle2 = ((i + 1) * Math.PI * 2) / 3;
          
          const x1 = Math.cos(angle1) * this.size * 0.35;
          const y1 = Math.sin(angle1) * this.size * 0.35;
          const x2 = Math.cos(angle2) * this.size * 0.35;
          const y2 = Math.sin(angle2) * this.size * 0.35;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      drawNode(ctx: CanvasRenderingContext2D) {
        // Main circle with glow
        ctx.shadowColor = '#5c6bc0';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
        
        this.drawHexagon(ctx, 0, 0, this.size * 0.7);
      }

      drawConnector(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(-this.size, 0);
        ctx.lineTo(this.size, 0);
        ctx.stroke();
      }

      drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = x + Math.cos(angle) * size;
          const py = y + Math.sin(angle) * size;
          
          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      swimming: boolean;
      swimmingPhase: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3; // Reduced from 1.2
        this.vy = (Math.random() - 0.5) * 0.3; // Reduced from 1.2
        this.life = 0;
        this.maxLife = 600 + Math.random() * 400; // Increased lifespan
        this.size = 3 + Math.random() * 4;
        this.swimming = Math.random() > 0.5;
        this.swimmingPhase = Math.random() * Math.PI * 2;
      }

      update() {
        if (this.swimming) {
          // Much slower swimming motion
          this.swimmingPhase += 0.005; // Reduced from 0.02
          this.x += this.vx + Math.sin(this.swimmingPhase) * 0.1; // Reduced from 0.5
          this.y += this.vy + Math.cos(this.swimmingPhase * 1.3) * 0.05; // Reduced from 0.3
        } else {
          this.x += this.vx;
          this.y += this.vy;
        }
        
        this.life++;
        
        // Gentle deceleration
        this.vx *= 0.998; // Slower deceleration
        this.vy *= 0.998; // Slower deceleration
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = Math.max(0, 1 - this.life / this.maxLife);
        ctx.save();
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = '#1a237e';
        ctx.shadowColor = '#3949ab';
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      isDead() {
        return this.life >= this.maxLife;
      }
    }

    // Connection lines between patterns
    class ConnectionLine {
      pattern1: SacredPattern;
      pattern2: SacredPattern;
      flowPhase: number;

      constructor(pattern1: SacredPattern, pattern2: SacredPattern) {
        this.pattern1 = pattern1;
        this.pattern2 = pattern2;
        this.flowPhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.flowPhase += 0.002; // Much slower from 0.01
      }

      draw(ctx: CanvasRenderingContext2D) {
        const distance = Math.sqrt(
          Math.pow(this.pattern2.x - this.pattern1.x, 2) + 
          Math.pow(this.pattern2.y - this.pattern1.y, 2)
        );
        
        if (distance > 300) return; // Don't draw lines that are too long
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = '#3949ab';
        ctx.lineWidth = 1;
        
        // Draw flowing line
        ctx.beginPath();
        ctx.moveTo(this.pattern1.x, this.pattern1.y);
        ctx.lineTo(this.pattern2.x, this.pattern2.y);
        ctx.stroke();
        
        // Draw flowing particle on the line
        const t = (Math.sin(this.flowPhase) + 1) / 2; // 0 to 1
        const particleX = this.pattern1.x + (this.pattern2.x - this.pattern1.x) * t;
        const particleY = this.pattern1.y + (this.pattern2.y - this.pattern1.y) * t;
        
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#5c6bc0';
        ctx.beginPath();
        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Initialize patterns and connections
    const patterns: SacredPattern[] = [];
    const connections: ConnectionLine[] = [];
    
    const initializePatterns = () => {
      patterns.length = 0;
      connections.length = 0;
      
      const centerX = canvas.width / (window.devicePixelRatio || 1) / 2;
      const centerY = canvas.height / (window.devicePixelRatio || 1) / 2;
      
      // Central trinity
      patterns.push(new SacredPattern(centerX, centerY, 120, 'trinity'));
      
      // Surrounding nodes using golden ratio positioning
      const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle
      for (let i = 0; i < 12; i++) {
        const angle = i * goldenAngle;
        const radius = 200 + (i % 4) * 60;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        patterns.push(new SacredPattern(x, y, 25 + i * 3, 'node'));
      }
      
      // Create connections between nearby patterns
      for (let i = 0; i < patterns.length; i++) {
        for (let j = i + 1; j < patterns.length; j++) {
          if (Math.random() > 0.7) { // Only some connections
            connections.push(new ConnectionLine(patterns[i], patterns[j]));
          }
        }
      }
    };

    const animate = (timestamp: number) => {
      animationTime = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw connections first (behind patterns)
      connections.forEach(connection => {
        connection.update();
        connection.draw(ctx);
      });
      
      // Update and draw patterns
      patterns.forEach(pattern => {
        pattern.update(animationTime, mouseRef.current.x, mouseRef.current.y);
        pattern.draw(ctx);
      });
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        
        if (particles[i].isDead()) {
          particles.splice(i, 1);
        }
      }
      
      // Add new particles more frequently
      if (!reduceMotion && Math.random() < 0.05 && particles.length < 30) {
        particles.push(new Particle(
          Math.random() * canvas.width / (window.devicePixelRatio || 1),
          Math.random() * canvas.height / (window.devicePixelRatio || 1)
        ));
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    // Touch tracking
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;
    };

    // Click/tap effects
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let x, y;
      
      if (e instanceof MouseEvent) {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else {
        const touch = e.touches[0] || e.changedTouches[0];
        x = touch.clientX - rect.left;
        y = touch.clientY - rect.top;
      }
      
      // Create ripple effect with particles
      for (let i = 0; i < 15; i++) {
        particles.push(new Particle(x, y));
      }
    };

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchend', handleClick);
    window.addEventListener('resize', resizeCanvas);

    // Initialize
    resizeCanvas();
    initializePatterns();
    setIsLoaded(true);
    animate(0);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchend', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [reduceMotion]);

  return (
    <div className={cn('absolute bg-orange-500', className)}>
      <canvas
        ref={canvasRef}
        className={cn(
          'w-full h-full transition-opacity duration-1000',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{ 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f1f3f4 100%)',
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* Static fallback for reduced motion */}
      {reduceMotion && (
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <radialGradient id="blueGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a237e" />
                <stop offset="50%" stopColor="#3949ab" />
                <stop offset="100%" stopColor="#5c6bc0" />
              </radialGradient>
            </defs>
            
            {/* Central trinity pattern */}
            <g transform="translate(400, 300)" stroke="url(#blueGradient)" fill="none" strokeWidth="3">
              <circle cx="0" cy="0" r="36" />
              <circle cx="72" cy="0" r="30" />
              <circle cx="-36" cy="62" r="30" />
              <circle cx="-36" cy="-62" r="30" />
              <path d="M 36,0 L -18,31 L -18,-31 Z" />
            </g>
            
            {/* Surrounding nodes */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 12;
              const radius = 180 + (i % 3) * 40;
              const x = 400 + Math.cos(angle) * radius;
              const y = 300 + Math.sin(angle) * radius;
              
              return (
                <g key={i} transform={`translate(${x}, ${y})`} stroke="url(#blueGradient)" fill="none" strokeWidth="2">
                  <circle cx="0" cy="0" r="20" />
                  <polygon points="14,0 7,12 -7,12 -14,0 -7,-12 7,-12" />
                </g>
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );
};

export default SacredGeometryBackground;
