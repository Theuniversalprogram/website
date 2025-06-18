
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';

interface BookHeroProps {
  className?: string;
}

const BookHero: React.FC<BookHeroProps> = ({ className }) => {
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
    <section className={cn('relative min-h-screen flex items-center justify-center py-20 px-4', className)}>
      <div className="container mx-auto max-w-4xl text-center">
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-geometric font-bold text-cosmic-blue mb-6 leading-tight">
            The Universal Program
          </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-geometric font-medium text-cosmic-blue mb-4">
            The Universe Source Code
          </h2>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how three fundamental principles - Matter, Motion, and Persistence - unlock the secrets of everything
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="mb-12">
            <div className="w-48 h-72 mx-auto bg-gradient-to-br from-cosmic-blue to-cosmic-gold rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-white text-center p-6">
                <div className="text-2xl font-geometric font-bold mb-2">THE</div>
                <div className="text-xl font-geometric mb-2">UNIVERSAL</div>
                <div className="text-2xl font-geometric font-bold">PROGRAM</div>
                <div className="text-sm mt-4 opacity-90">The Universe Source Code</div>
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={500}>
          <Button 
            onClick={() => scrollToSection('purchase')}
            className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-cosmic-blue font-geometric font-semibold text-lg px-8 py-4 h-auto rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get the Book
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default BookHero;
