
import React from 'react';
import { cn } from '@/lib/utils';

interface BookFooterProps {
  className?: string;
}

const BookFooter: React.FC<BookFooterProps> = ({ className }) => {
  return (
    <footer className={cn('py-12 bg-cosmic-blue text-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-geometric font-bold mb-4">The Universal Program</h3>
            <div className="flex justify-center space-x-8 text-sm">
              <a 
                href="https://maxios.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cosmic-gold transition-colors duration-300"
              >
                Substack
              </a>
              <a 
                href="https://instagram.com/theuniversalprogram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cosmic-gold transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://x.com/theuniversalprogram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cosmic-gold transition-colors duration-300"
              >
                X (Twitter)
              </a>
              <a 
                href="https://theuniversalprogram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cosmic-gold transition-colors duration-300"
              >
                Website
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} The Universal Program. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BookFooter;
