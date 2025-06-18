import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { getContentByComponent } from '@/config/content';

interface AuthorBioProps {
  className?: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ className }) => {
  const content = getContentByComponent('AuthorBio');
  const title = content.find(item => item.id === 'author-title')?.text || 'About the Author';
  const paragraph1 = content.find(item => item.id === 'author-paragraph-1')?.text || 'A researcher and philosopher dedicated to understanding the fundamental patterns that govern our universe. Through years of interdisciplinary study spanning physics, computer science, and consciousness research, they developed the Triadic Framework as a unified approach to understanding reality.';
  const paragraph2 = content.find(item => item.id === 'author-paragraph-2')?.text || 'Their work bridges the gap between ancient wisdom and modern science, offering a practical framework for navigating complexity in our rapidly evolving world.';
  const paragraph3 = content.find(item => item.id === 'author-paragraph-3')?.text || 'When not writing or researching, they can be found exploring the patterns of nature and contemplating the elegant simplicity underlying apparent chaos.';

  return (
    <section id="author" className={cn('py-20 md:py-32 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cosmic-blue to-cosmic-gold rounded-full flex items-center justify-center">
                <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                  <div className="text-cosmic-blue text-6xl font-geometric font-bold">A</div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-geometric font-bold text-cosmic-blue mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {paragraph1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {paragraph2}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {paragraph3}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AuthorBio;
