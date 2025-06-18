import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Box, ArrowRight, Database } from 'lucide-react';
import { getContentByComponent } from '@/config/content';

interface CoreConceptProps {
  className?: string;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ className }) => {
  const content = getContentByComponent('CoreConcept');
  const title = content.find(item => item.id === 'concept-title')?.text || 'The Triadic Framework';
  const introParagraph1 = content.find(item => item.id === 'concept-intro-paragraph-1')?.text || 'Everything in our universe operates through three fundamental principles. From the smallest quantum particles to the largest galactic structures, from simple thoughts to complex civilizations - all follow the same universal pattern. Understanding this framework reveals the hidden architecture of reality itself.';
  const introParagraph2 = content.find(item => item.id === 'concept-intro-paragraph-2')?.text || "This revolutionary perspective transforms how we see science, technology, consciousness, and our place in the cosmos. It's not just theory - it's a practical tool for understanding everything around us.";
  
  const matterTitle = content.find(item => item.id === 'concept-matter-title')?.text || 'Matter';
  const matterSubtitle = content.find(item => item.id === 'concept-matter-subtitle')?.text || 'Structure';
  const matterDescription = content.find(item => item.id === 'concept-matter-description')?.text || 'The fundamental building blocks and organizational patterns that create form and substance in our universe.';
  
  const motionTitle = content.find(item => item.id === 'concept-motion-title')?.text || 'Motion';
  const motionSubtitle = content.find(item => item.id === 'concept-motion-subtitle')?.text || 'Transference';
  const motionDescription = content.find(item => item.id === 'concept-motion-description')?.text || 'The dynamic forces and energy flows that enable change, interaction, and evolution across all systems.';
  
  const persistenceTitle = content.find(item => item.id === 'concept-persistence-title')?.text || 'Persistence';
  const persistenceSubtitle = content.find(item => item.id === 'concept-persistence-subtitle')?.text || 'Storage';
  const persistenceDescription = content.find(item => item.id === 'concept-persistence-description')?.text || 'The mechanisms that preserve information, maintain patterns, and ensure continuity through time.';

  return (
    <section id="concept" className={cn('py-20 md:py-32 bg-cosmic-gray relative', className)}>
      {/* Subtle overlay to ensure readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-cosmic-blue mb-8">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            {introParagraph1}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {introParagraph2}
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16">
          <FadeIn delay={100}>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-cosmic-gold transition-colors duration-300">
                <Box className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-geometric font-semibold text-cosmic-blue mb-4">
                {matterTitle}
              </h3>
              <p className="text-lg font-medium text-cosmic-gold mb-2">{matterSubtitle}</p>
              <p className="text-gray-600 leading-relaxed">
                {matterDescription}
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-cosmic-gold transition-colors duration-300">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-geometric font-semibold text-cosmic-blue mb-4">
                {motionTitle}
              </h3>
              <p className="text-lg font-medium text-cosmic-gold mb-2">{motionSubtitle}</p>
              <p className="text-gray-600 leading-relaxed">
                {motionDescription}
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-cosmic-gold transition-colors duration-300">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-geometric font-semibold text-cosmic-blue mb-4">
                {persistenceTitle}
              </h3>
              <p className="text-lg font-medium text-cosmic-gold mb-2">{persistenceSubtitle}</p>
              <p className="text-gray-600 leading-relaxed">
                {persistenceDescription}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CoreConcept;
