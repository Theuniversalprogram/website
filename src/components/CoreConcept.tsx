
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Cube, ArrowRight, Database } from 'lucide-react';

interface CoreConceptProps {
  className?: string;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ className }) => {
  return (
    <section id="concept" className={cn('py-20 md:py-32 bg-cosmic-gray', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-cosmic-blue mb-8">
            The Triadic Framework
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Everything in our universe operates through three fundamental principles. From the smallest quantum particles to the largest galactic structures, from simple thoughts to complex civilizations - all follow the same universal pattern. Understanding this framework reveals the hidden architecture of reality itself.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This revolutionary perspective transforms how we see science, technology, consciousness, and our place in the cosmos. It's not just theory - it's a practical tool for understanding everything around us.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16">
          <FadeIn delay={100}>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-cosmic-gold transition-colors duration-300">
                <Cube className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-geometric font-semibold text-cosmic-blue mb-4">
                Matter
              </h3>
              <p className="text-lg font-medium text-cosmic-gold mb-2">Structure</p>
              <p className="text-gray-600 leading-relaxed">
                The fundamental building blocks and organizational patterns that create form and substance in our universe.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-cosmic-gold transition-colors duration-300">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-geometric font-semibold text-cosmic-blue mb-4">
                Motion
              </h3>
              <p className="text-lg font-medium text-cosmic-gold mb-2">Transference</p>
              <p className="text-gray-600 leading-relaxed">
                The dynamic forces and energy flows that enable change, interaction, and evolution across all systems.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-cosmic-gold transition-colors duration-300">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-geometric font-semibold text-cosmic-blue mb-4">
                Persistence
              </h3>
              <p className="text-lg font-medium text-cosmic-gold mb-2">Storage</p>
              <p className="text-gray-600 leading-relaxed">
                The mechanisms that preserve information, maintain patterns, and ensure continuity through time.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CoreConcept;
