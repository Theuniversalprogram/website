
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { content } from '@/config/content';
import { links } from '@/config/links';

interface PurchaseOptionsProps {
  className?: string;
}

const PurchaseOptions: React.FC<PurchaseOptionsProps> = ({ className }) => {
  const purchaseOptionsWithUrls = content.purchase.options.map(option => {
    const urlKey = option.name.toLowerCase().replace(/\s+/g, '').replace('&', '') as keyof typeof links.purchase;
    return {
      ...option,
      url: links.purchase[urlKey] || '#'
    };
  });

  return (
    <section id="purchase" className={cn('py-20 md:py-32 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-cosmic-blue mb-8">
            {content.purchase.title}
          </h2>
        </FadeIn>
        
        <FadeIn delay={100} className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.purchase.description}
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchaseOptionsWithUrls.map((option, index) => (
            <FadeIn key={option.name} delay={200 + index * 50}>
              <div className={cn(
                'relative p-6 border-2 rounded-lg transition-all duration-300 hover:shadow-lg group cursor-pointer',
                option.popular 
                  ? 'border-cosmic-gold bg-cosmic-gold/5' 
                  : 'border-gray-200 hover:border-cosmic-blue'
              )}>
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cosmic-gold text-cosmic-blue px-3 py-1 text-sm font-semibold rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-geometric font-semibold text-cosmic-blue mb-2">
                    {option.name}
                  </h3>
                  <p className="text-cosmic-silver mb-4">{option.description}</p>
                  
                  <Button 
                    variant="outline"
                    className={cn(
                      'w-full group-hover:bg-cosmic-blue group-hover:text-white transition-colors duration-300',
                      option.popular && 'border-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-blue'
                    )}
                  >
                    Buy Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurchaseOptions;
