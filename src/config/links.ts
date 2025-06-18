export interface LinkConfig {
  name: string;
  description: string;
  url: string;
  category: 'social' | 'purchase' | 'navigation' | 'external' | 'internal';
  featured?: boolean;
}

export const websiteLinks: LinkConfig[] = [
  // Social Media Links
  {
    name: 'Substack',
    description: 'Deep insights & analysis',
    url: "https://theuniprogram.substack.com/",
    category: 'social',
    featured: true
  },
  {
    name: 'Instagram',
    description: '@theuniversalprogram',
    url: 'https://instagram.com/theuniversalprogram',
    category: 'social'
  },
  {
    name: 'X (Twitter)',
    description: '@theuniprogram',
    url: 'https://x.com/theuniprogram',
    category: 'social'
  },
  {
    name: 'Website',
    description: 'theuniversalprogram.com',
    url: 'https://theuniversalprogram.com',
    category: 'social'
  },
  
  // Purchase Links (Placeholder URLs - need to be updated with actual links)
  {
    name: 'Amazon Kindle',
    description: 'Digital edition',
    url: '#', // TODO: Add actual Amazon Kindle link
    category: 'purchase',
    featured: true
  },
  {
    name: 'Apple Books',
    description: 'For iOS devices',
    url: '#', // TODO: Add actual Apple Books link
    category: 'purchase'
  },
  {
    name: 'Google Books',
    description: 'Digital library',
    url: '#', // TODO: Add actual Google Books link
    category: 'purchase'
  },
  {
    name: 'Barnes & Noble',
    description: 'Digital & print',
    url: '#', // TODO: Add actual Barnes & Noble link
    category: 'purchase'
  },
  {
    name: 'Kobo',
    description: 'E-reader platform',
    url: '#', // TODO: Add actual Kobo link
    category: 'purchase'
  },
  {
    name: 'Physical Bookstores',
    description: 'Local retailers',
    url: '#', // TODO: Add actual physical bookstore finder link
    category: 'purchase'
  },
  
  // Navigation Links (Internal)
  {
    name: 'Home',
    description: 'Homepage',
    url: '/',
    category: 'navigation'
  },
  {
    name: 'Not Found',
    description: '404 page redirect to home',
    url: '/',
    category: 'internal'
  },
  
  // External Dependencies
  {
    name: 'Google Fonts',
    description: 'Inter and Space Grotesk fonts',
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    category: 'external'
  },
  {
    name: 'GPT Engineer Script',
    description: 'Development script',
    url: 'https://cdn.gpteng.co/gptengineer.js',
    category: 'external'
  }
];

// Helper functions to get links by category
export const getSocialLinks = () => websiteLinks.filter(link => link.category === 'social');
export const getPurchaseLinks = () => websiteLinks.filter(link => link.category === 'purchase');
export const getNavigationLinks = () => websiteLinks.filter(link => link.category === 'navigation');
export const getExternalLinks = () => websiteLinks.filter(link => link.category === 'external');
export const getFeaturedLinks = () => websiteLinks.filter(link => link.featured);

export default websiteLinks; 