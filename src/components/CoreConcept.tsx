
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Box, ArrowRight, Database } from 'lucide-react';
import { content } from '@/config/content';

interface CoreConceptProps {
  className?: string;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ className }) => {
  const iconMap = {
    'Matter': Box,
    'Motion': ArrowRight,
    'Persistence': Database
  };

  return (
    <section id="concept" className={cn('py-20 md:py-32 bg-cosmic-gray relative', className)}>
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-cosmic-blue mb-8">
            {content.coreConcept.title}
          </h2>
        </FadeIn>
        
        <FadeIn delay={100} className="text-center mb-8">
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            {content.coreConcept.description}
          </p>
        </FadeIn>
        
        <FadeIn delay={200} className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.coreConcept.subtitle}
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16">
          {content.coreConcept.principles.map((principle, index) => {
            const IconComponent = iconMap[principle.name as keyof typeof iconMap];
            
            return (
              <FadeIn key={principle.name} delay={300 + index * 100}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-cosmic-gold transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-geometric font-semibold text-cosmic-blue mb-4">
                    {principle.name}
                  </h3>
                  <p className="text-lg font-medium text-cosmic-gold mb-2">{principle.category}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreConcept;
