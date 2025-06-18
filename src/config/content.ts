export interface TextContent {
  id: string;
  category: 'heading' | 'subheading' | 'paragraph' | 'button' | 'navigation' | 'meta' | 'error';
  component: string;
  text: string;
  context?: string;
}

export const websiteContent: TextContent[] = [
  // Meta content
  {
    id: 'meta-title',
    category: 'meta',
    component: 'index.html',
    text: 'The Universal Program: The Universe Source Code'
  },
  {
    id: 'meta-description',
    category: 'meta',
    component: 'index.html',
    text: 'Discover how three fundamental principles - unlock the secrets of everything.'
  },
  {
    id: 'meta-author',
    category: 'meta',
    component: 'index.html',
    text: 'The Universal Program'
  },

  // BookHero content
  {
    id: 'hero-main-title',
    category: 'heading',
    component: 'BookHero',
    text: 'The Universal Program'
  },
  {
    id: 'hero-subtitle',
    category: 'subheading',
    component: 'BookHero',
    text: 'The Universe Source Code'
  },
  {
    id: 'hero-description',
    category: 'paragraph',
    component: 'BookHero',
    text: 'Discover how three fundamental principles - unlock the secrets of everything'
  },
  {
    id: 'hero-cta-button',
    category: 'button',
    component: 'BookHero',
    text: 'Get the Book'
  },

  // CoreConcept content
  {
    id: 'concept-title',
    category: 'heading',
    component: 'CoreConcept',
    text: 'The Triadic Framework'
  },
  {
    id: 'concept-intro-paragraph-1',
    category: 'paragraph',
    component: 'CoreConcept',
    text: 'Everything in our universe operates through three fundamental principles. From the smallest quantum particles to the largest galactic structures, from simple thoughts to complex civilizations - all follow the same universal pattern. Understanding this framework reveals the hidden architecture of reality itself.'
  },
  {
    id: 'concept-intro-paragraph-2',
    category: 'paragraph',
    component: 'CoreConcept',
    text: "This revolutionary perspective transforms how we see science, technology, consciousness, and our place in the cosmos. It's not just theory - it's a practical tool for understanding everything around us."
  },
  {
    id: 'concept-matter-title',
    category: 'subheading',
    component: 'CoreConcept',
    text: 'Matter'
  },
  {
    id: 'concept-matter-subtitle',
    category: 'subheading',
    component: 'CoreConcept',
    text: 'Structure'
  },
  {
    id: 'concept-matter-description',
    category: 'paragraph',
    component: 'CoreConcept',
    text: 'The fundamental building blocks and organizational patterns that create form and substance in our universe.'
  },
  {
    id: 'concept-motion-title',
    category: 'subheading',
    component: 'CoreConcept',
    text: 'Motion'
  },
  {
    id: 'concept-motion-subtitle',
    category: 'subheading',
    component: 'CoreConcept',
    text: 'Transference'
  },
  {
    id: 'concept-motion-description',
    category: 'paragraph',
    component: 'CoreConcept',
    text: 'The dynamic forces and energy flows that enable change, interaction, and evolution across all systems.'
  },
  {
    id: 'concept-persistence-title',
    category: 'subheading',
    component: 'CoreConcept',
    text: 'Persistence'
  },
  {
    id: 'concept-persistence-subtitle',
    category: 'subheading',
    component: 'CoreConcept',
    text: 'Storage'
  },
  {
    id: 'concept-persistence-description',
    category: 'paragraph',
    component: 'CoreConcept',
    text: 'The mechanisms that preserve information, maintain patterns, and ensure continuity through time.'
  },

  // PurchaseOptions content
  {
    id: 'purchase-title',
    category: 'heading',
    component: 'PurchaseOptions',
    text: 'Where to Buy'
  },
  {
    id: 'purchase-description',
    category: 'paragraph',
    component: 'PurchaseOptions',
    text: 'Available across all major platforms in digital and physical formats'
  },
  {
    id: 'purchase-amazon-name',
    category: 'subheading',
    component: 'PurchaseOptions',
    text: 'Amazon Kindle'
  },
  {
    id: 'purchase-amazon-description',
    category: 'paragraph',
    component: 'PurchaseOptions',
    text: 'Digital edition'
  },
  {
    id: 'purchase-apple-name',
    category: 'subheading',
    component: 'PurchaseOptions',
    text: 'Apple Books'
  },
  {
    id: 'purchase-apple-description',
    category: 'paragraph',
    component: 'PurchaseOptions',
    text: 'For iOS devices'
  },
  {
    id: 'purchase-google-name',
    category: 'subheading',
    component: 'PurchaseOptions',
    text: 'Google Books'
  },
  {
    id: 'purchase-google-description',
    category: 'paragraph',
    component: 'PurchaseOptions',
    text: 'Digital library'
  },
  {
    id: 'purchase-barnes-name',
    category: 'subheading',
    component: 'PurchaseOptions',
    text: 'Barnes & Noble'
  },
  {
    id: 'purchase-barnes-description',
    category: 'paragraph',
    component: 'PurchaseOptions',
    text: 'Digital & print'
  },
  {
    id: 'purchase-kobo-name',
    category: 'subheading',
    component: 'PurchaseOptions',
    text: 'Kobo'
  },
  {
    id: 'purchase-kobo-description',
    category: 'paragraph',
    component: 'PurchaseOptions',
    text: 'E-reader platform'
  },
  {
    id: 'purchase-physical-name',
    category: 'subheading',
    component: 'PurchaseOptions',
    text: 'Physical Bookstores'
  },
  {
    id: 'purchase-physical-description',
    category: 'paragraph',
    component: 'PurchaseOptions',
    text: 'Local retailers'
  },
  {
    id: 'purchase-button',
    category: 'button',
    component: 'PurchaseOptions',
    text: 'Buy Now'
  },
  {
    id: 'purchase-popular-badge',
    category: 'button',
    component: 'PurchaseOptions',
    text: 'Popular'
  },

  // SocialFollow content
  {
    id: 'social-title',
    category: 'heading',
    component: 'SocialFollow',
    text: 'Join the Conversation'
  },
  {
    id: 'social-description',
    category: 'paragraph',
    component: 'SocialFollow',
    text: 'Follow the ongoing development of the Triadic Framework and connect with a community of curious minds exploring the fundamental patterns of reality.'
  },
  {
    id: 'social-substack-name',
    category: 'subheading',
    component: 'SocialFollow',
    text: 'Substack'
  },
  {
    id: 'social-substack-description',
    category: 'paragraph',
    component: 'SocialFollow',
    text: 'Deep insights & analysis'
  },
  {
    id: 'social-instagram-name',
    category: 'subheading',
    component: 'SocialFollow',
    text: 'Instagram'
  },
  {
    id: 'social-instagram-description',
    category: 'paragraph',
    component: 'SocialFollow',
    text: '@theuniprogram'
  },
  {
    id: 'social-twitter-name',
    category: 'subheading',
    component: 'SocialFollow',
    text: 'X (Twitter)'
  },
  {
    id: 'social-twitter-description',
    category: 'paragraph',
    component: 'SocialFollow',
    text: '@theuniprogram'
  },
  {
    id: 'social-website-name',
    category: 'subheading',
    component: 'SocialFollow',
    text: 'Website'
  },
  {
    id: 'social-website-description',
    category: 'paragraph',
    component: 'SocialFollow',
    text: 'theuniversalprogram.com'
  },

  // AuthorBio content
  {
    id: 'author-title',
    category: 'heading',
    component: 'AuthorBio',
    text: 'About the Author'
  },
  {
    id: 'author-paragraph-1',
    category: 'paragraph',
    component: 'AuthorBio',
    text: 'A researcher and philosopher dedicated to understanding the fundamental patterns that govern our universe. Through years of interdisciplinary study spanning physics, computer science, and consciousness research, they developed the Triadic Framework as a unified approach to understanding reality.'
  },
  {
    id: 'author-paragraph-2',
    category: 'paragraph',
    component: 'AuthorBio',
    text: 'Their work bridges the gap between ancient wisdom and modern science, offering a practical framework for navigating complexity in our rapidly evolving world.'
  },
  {
    id: 'author-paragraph-3',
    category: 'paragraph',
    component: 'AuthorBio',
    text: 'When not writing or researching, they can be found exploring the patterns of nature and contemplating the elegant simplicity underlying apparent chaos.'
  },

  // BookFooter content
  {
    id: 'footer-title',
    category: 'heading',
    component: 'BookFooter',
    text: 'MINDCACHE LTD'
  },
  {
    id: 'footer-copyright',
    category: 'paragraph',
    component: 'BookFooter',
    text: 'All rights reserved.'
  },
  {
    id: 'footer-substack-link',
    category: 'navigation',
    component: 'BookFooter',
    text: 'Substack'
  },
  {
    id: 'footer-instagram-link',
    category: 'navigation',
    component: 'BookFooter',
    text: 'Instagram'
  },
  {
    id: 'footer-twitter-link',
    category: 'navigation',
    component: 'BookFooter',
    text: 'X (Twitter)'
  },
  {
    id: 'footer-website-link',
    category: 'navigation',
    component: 'BookFooter',
    text: 'Website'
  },

  // NotFound content
  {
    id: 'notfound-title',
    category: 'heading',
    component: 'NotFound',
    text: '404 - Page Not Found'
  },
  {
    id: 'notfound-description',
    category: 'paragraph',
    component: 'NotFound',
    text: "Sorry, the page you're looking for doesn't exist."
  },
  {
    id: 'notfound-link',
    category: 'navigation',
    component: 'NotFound',
    text: 'Go back to homepage'
  }
];

// Helper functions to get content by category
export const getHeadings = () => websiteContent.filter(item => item.category === 'heading');
export const getSubheadings = () => websiteContent.filter(item => item.category === 'subheading');
export const getParagraphs = () => websiteContent.filter(item => item.category === 'paragraph');
export const getButtons = () => websiteContent.filter(item => item.category === 'button');
export const getNavigation = () => websiteContent.filter(item => item.category === 'navigation');
export const getMetaContent = () => websiteContent.filter(item => item.category === 'meta');
export const getContentByComponent = (component: string) => 
  websiteContent.filter(item => item.component === component);

export default websiteContent; 