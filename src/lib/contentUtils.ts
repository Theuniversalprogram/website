import { websiteContent, getContentByComponent, type TextContent } from '@/config/content';
import { websiteLinks, getSocialLinks, getPurchaseLinks, type LinkConfig } from '@/config/links';

/**
 * Get content text by ID with fallback
 */
export const getContentText = (id: string, fallback?: string): string => {
  const content = websiteContent.find(item => item.id === id);
  return content?.text || fallback || '';
};

/**
 * Get content by component and ID
 */
export const getComponentContent = (component: string, id: string, fallback?: string): string => {
  const content = getContentByComponent(component);
  const item = content.find(item => item.id === id);
  return item?.text || fallback || '';
};

/**
 * Get link by name
 */
export const getLinkByName = (name: string): LinkConfig | undefined => {
  return websiteLinks.find(link => link.name === name);
};

/**
 * Get social link URL by platform name
 */
export const getSocialLinkUrl = (platform: string): string => {
  const socialLinks = getSocialLinks();
  const link = socialLinks.find(link => link.name.toLowerCase().includes(platform.toLowerCase()));
  return link?.url || '#';
};

/**
 * Get all content for a specific category
 */
export const getContentByCategory = (category: TextContent['category']): TextContent[] => {
  return websiteContent.filter(item => item.category === category);
};

/**
 * Get meta content as object for easy access
 */
export const getMetaContent = () => {
  const metaContent = getContentByCategory('meta');
  return {
    title: metaContent.find(item => item.id === 'meta-title')?.text || '',
    description: metaContent.find(item => item.id === 'meta-description')?.text || '',
    author: metaContent.find(item => item.id === 'meta-author')?.text || '',
  };
};

/**
 * Get all headings for generating a table of contents
 */
export const getAllHeadings = () => {
  return getContentByCategory('heading').map(heading => ({
    id: heading.id,
    text: heading.text,
    component: heading.component
  }));
};

/**
 * Helper to update URLs in purchase links when they become available
 */
export const updatePurchaseLink = (platformName: string, newUrl: string): void => {
  const purchaseLinks = getPurchaseLinks();
  const linkIndex = purchaseLinks.findIndex(link => link.name === platformName);
  if (linkIndex !== -1) {
    // This would be used to update the config programmatically
    console.log(`Update ${platformName} URL to: ${newUrl}`);
  }
};

export default {
  getContentText,
  getComponentContent,
  getLinkByName,
  getSocialLinkUrl,
  getContentByCategory,
  getMetaContent,
  getAllHeadings,
  updatePurchaseLink
}; 