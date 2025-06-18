
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface PurchaseOptionsProps {
  className?: string;
}

const PurchaseOptions: React.FC<PurchaseOptionsProps> = ({ className }) => {
  const purchaseOptions = [
    {
      name: 'Amazon Kindle',
      description: 'Digital edition',
      url: '#',
      popular: true
    },
    {
      name: 'Apple Books',
      description: 'For iOS devices',
      url: '#'
    },
    {
      name: 'Google Books',
      description: 'Digital library',
      url: '#'
    },
    {
      name: 'Barnes & Noble',
      description: 'Digital & print',
      url: '#'
    },
    {
      name: 'Kobo',
      description: 'E-reader platform',
      url: '#'
    },
    {
      name: 'Physical Bookstores',
      description: 'Local retailers',
      url: '#'
    }
  ];

  return (
    <section id="purchase" className={cn('py-20 md:py-32 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-cosmic-blue mb-8">
            Where to Buy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Available across all major platforms in digital and physical formats
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchaseOptions.map((option, index) => (
            <FadeIn key={option.name} delay={index * 100}>
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
