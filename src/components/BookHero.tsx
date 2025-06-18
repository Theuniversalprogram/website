import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';
import SacredGeometryBackground from './background/SacredGeometryBackground';
import { getContentByComponent } from '@/config/content';

interface BookHeroProps {
  className?: string;
}

const BookHero: React.FC<BookHeroProps> = ({ className }) => {
  const content = getContentByComponent('BookHero');
  const mainTitle = content.find(item => item.id === 'hero-main-title')?.text || 'The Universal Program';
  const subtitle = content.find(item => item.id === 'hero-subtitle')?.text || 'The Universe Source Code';
  const description = content.find(item => item.id === 'hero-description')?.text || 'Discover how three fundamental principles - Matter, Motion, and Persistence - unlock the secrets of everything';
  const ctaButton = content.find(item => item.id === 'hero-cta-button')?.text || 'Get the Book';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={cn('relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden', className)}>
      <SacredGeometryBackground />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-geometric font-bold text-cosmic-blue mb-6 leading-tight drop-shadow-lg">
            {mainTitle}
          </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-geometric font-medium text-cosmic-blue mb-4 drop-shadow-md">
            {subtitle}
          </h2>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {description}
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="mb-12">
            <div className="relative mx-auto w-64 h-80 perspective-1000">
              {/* 3D Book Container */}
              <div className="relative w-full h-full transform-style-preserve-3d hover:rotate-y-12 transition-transform duration-500 cursor-pointer group">
                {/* Book Cover */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl transform translate-z-4 overflow-hidden">
                  <img 
                    src="/lovable-uploads/ac4937bf-3141-4c3f-947e-959b59389616.png" 
                    alt="The Universal Program Book Cover"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                
                {/* Book Back Cover (same as front) */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl transform rotate-y-180 translate-z-minus-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-600 text-center p-6">
                      <div className="text-sm font-geometric">Back Cover</div>
                    </div>
                  </div>
                </div>
                
                {/* Book Pages Edge */}
                <div className="absolute top-1 right-0 w-2 h-[calc(100%-8px)] bg-gray-200 transform rotate-y-90 origin-right shadow-inner"></div>
                
                {/* Shadow underneath */}
                <div className="absolute -bottom-4 left-4 w-full h-8 bg-black/20 rounded-full blur-lg transform translate-z-minus-2"></div>
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={500}>
          <Button 
            onClick={() => scrollToSection('purchase')}
            className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-cosmic-blue font-geometric font-semibold text-lg px-8 py-4 h-auto rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
          >
            {ctaButton}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default BookHero;
