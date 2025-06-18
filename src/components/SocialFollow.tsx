
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Instagram, Globe } from 'lucide-react';

interface SocialFollowProps {
  className?: string;
}

const SocialFollow: React.FC<SocialFollowProps> = ({ className }) => {
  const socialLinks = [
    {
      name: 'Substack',
      description: 'Deep insights & analysis',
      url: 'https://maxios.substack.com',
      icon: Mail,
      featured: true
    },
    {
      name: 'Instagram',
      description: '@theuniversalprogram',
      url: 'https://instagram.com/theuniversalprogram',
      icon: Instagram
    },
    {
      name: 'X (Twitter)',
      description: '@theuniversalprogram',
      url: 'https://x.com/theuniversalprogram',
      icon: ExternalLink
    },
    {
      name: 'Website',
      description: 'theuniversalprogram.com',
      url: 'https://theuniversalprogram.com',
      icon: Globe
    }
  ];

  return (
    <section id="follow" className={cn('py-20 md:py-32 bg-cosmic-gray', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-cosmic-blue mb-8">
            Join the Conversation
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Follow the ongoing development of the Triadic Framework and connect with a community of curious minds exploring the fundamental patterns of reality.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => (
            <FadeIn key={link.name} delay={index * 100}>
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'block p-6 border-2 rounded-lg transition-all duration-300 hover:shadow-lg group',
                  link.featured 
                    ? 'border-cosmic-gold bg-cosmic-gold/5 hover:bg-cosmic-gold/10' 
                    : 'border-gray-200 hover:border-cosmic-blue bg-white hover:bg-cosmic-blue/5'
                )}
              >
                <div className="flex items-center">
                  <div className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300',
                    link.featured 
                      ? 'bg-cosmic-gold text-cosmic-blue group-hover:bg-cosmic-blue group-hover:text-white'
                      : 'bg-cosmic-blue text-white group-hover:bg-cosmic-gold group-hover:text-cosmic-blue'
                  )}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-geometric font-semibold text-cosmic-blue mb-1">
                      {link.name}
                    </h3>
                    <p className="text-cosmic-silver">{link.description}</p>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-cosmic-silver group-hover:text-cosmic-blue transition-colors duration-300" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;
