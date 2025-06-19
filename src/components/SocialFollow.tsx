
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { ExternalLink, Mail, Instagram } from 'lucide-react';
import { content } from '@/config/content';
import { links } from '@/config/links';

interface SocialFollowProps {
  className?: string;
}

const SocialFollow: React.FC<SocialFollowProps> = ({ className }) => {
  const iconMap = {
    'Substack': Mail,
    'Instagram': Instagram,
    'X (Twitter)': ExternalLink
  };

  const urlMap = {
    'Substack': links.social.substack,
    'Instagram': links.social.instagram,
    'X (Twitter)': links.social.twitter
  };

  // Filter out the Website platform
  const filteredPlatforms = content.social.platforms.filter(platform => platform.name !== 'Website');

  const socialLinksWithUrls = filteredPlatforms.map(platform => ({
    ...platform,
    url: urlMap[platform.name as keyof typeof urlMap],
    icon: iconMap[platform.name as keyof typeof iconMap]
  }));

  return (
    <section id="follow" className={cn('py-20 md:py-32 bg-cosmic-gray', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-cosmic-blue mb-8">
            {content.social.title}
          </h2>
        </FadeIn>
        
        <FadeIn delay={100} className="text-center mb-16">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {content.social.description}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinksWithUrls.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <FadeIn key={link.name} delay={200 + index * 100}>
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'block p-6 border-2 rounded-lg transition-all duration-300 hover:shadow-lg group h-full',
                    link.featured 
                      ? 'border-cosmic-gold bg-cosmic-gold/5 hover:bg-cosmic-gold/10' 
                      : 'border-gray-200 hover:border-cosmic-blue bg-white hover:bg-cosmic-blue/5'
                  )}
                >
                  <div className="flex items-center h-full">
                    <div className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 flex-shrink-0',
                      link.featured 
                        ? 'bg-cosmic-gold text-cosmic-blue group-hover:bg-cosmic-blue group-hover:text-white'
                        : 'bg-cosmic-blue text-white group-hover:bg-cosmic-gold group-hover:text-cosmic-blue'
                    )}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-geometric font-semibold text-cosmic-blue mb-1">
                        {link.name}
                      </h3>
                      <p className="text-cosmic-silver">{link.description}</p>
                    </div>
                    
                    <ExternalLink className="w-5 h-5 text-cosmic-silver group-hover:text-cosmic-blue transition-colors duration-300 flex-shrink-0 ml-2" />
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;
