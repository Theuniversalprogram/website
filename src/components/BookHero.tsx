
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';
import SacredGeometryBackground from './background/SacredGeometryBackground';
import { content } from '@/config/content';

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
    <section className={cn('relative w-full flex flex-col items-center justify-center py-32 px-4 overflow-hidden', className)}>
      <SacredGeometryBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10 flex-1">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                {content.hero.title}
                <span className="block font-medium text-cosmic-blue">{content.hero.titleHighlight}</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed">
                {content.hero.subtitle}
              </h2>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-xl font-light">
                {content.hero.description}
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <Button 
                onClick={() => scrollToSection('purchase')}
                className="bg-cosmic-blue hover:bg-cosmic-blue/90 text-white font-medium text-lg px-8 py-4 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-0"
              >
                {content.hero.ctaText}
              </Button>
            </FadeIn>
          </div>

          {/* Right Content - Book */}
          <div className="flex justify-center lg:justify-end">
            <FadeIn delay={500}>
              <div className="relative">
                <div className="relative w-80 h-96 perspective-1000">
                  {/* 3D Book Container */}
                  <div className="relative w-full h-full transform-style-preserve-3d hover:rotate-y-12 transition-transform duration-700 cursor-pointer group">
                    {/* Book Cover */}
                    <div className="absolute inset-0 bg-white rounded-lg shadow-2xl transform translate-z-4 overflow-hidden border border-gray-100">
                      <img 
                        src="/lovable-uploads/ac4937bf-3141-4c3f-947e-959b59389616.png" 
                        alt="The Universal Program Book Cover"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    
                    {/* Book Back Cover */}
                    <div className="absolute inset-0 bg-white rounded-lg shadow-2xl transform rotate-y-180 translate-z-minus-4 overflow-hidden border border-gray-100">
                      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-gray-400 text-center p-8">
                          <div className="text-sm font-light">Back Cover</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Book Pages Edge */}
                    <div className="absolute top-1 right-0 w-2 h-[calc(100%-8px)] bg-gray-200 transform rotate-y-90 origin-right shadow-inner"></div>
                    
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-6 left-6 w-full h-12 bg-black/10 rounded-full blur-xl transform translate-z-minus-2"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription - Bottom Center */}
      <div className="container mx-auto max-w-7xl relative z-10 mt-16">
        <FadeIn delay={600}>
          <div className="text-center">
            <h3 className="text-lg font-medium text-cosmic-blue mb-6">
              Subscribe to weekly insights
            </h3>
            <div className="flex justify-center">
              <iframe 
                src="https://theuniprogram.substack.com/embed" 
                width="480" 
                height="150" 
                style={{border:'1px solid #EEE', background:'white'}} 
                frameBorder="0" 
                scrolling="no"
                className="w-full max-w-md sm:max-w-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BookHero;
