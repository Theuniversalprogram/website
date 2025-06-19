
import React from 'react';
import { cn } from '@/lib/utils';
import { content } from '@/config/content';
import { links } from '@/config/links';

interface BookFooterProps {
  className?: string;
}

const BookFooter: React.FC<BookFooterProps> = ({ className }) => {
  const footerLinks = [
    { name: 'Substack', url: links.social.substack },
    { name: 'Instagram', url: links.social.instagram },
    { name: 'X (Twitter)', url: links.social.twitter },
  ];

  return (
    <footer className={cn('py-12 bg-cosmic-blue text-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-geometric font-bold mb-4">{content.footer.title}</h3>
            <div className="flex justify-center space-x-8 text-sm">
              {footerLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cosmic-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} {content.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BookFooter;
