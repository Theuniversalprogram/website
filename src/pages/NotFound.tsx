import React from 'react';
import { getContentByComponent } from '@/config/content';

const NotFound = () => {
  const content = getContentByComponent('NotFound');
  const title = content.find(item => item.id === 'notfound-title')?.text || '404 - Page Not Found';
  const description = content.find(item => item.id === 'notfound-description')?.text || "Sorry, the page you're looking for doesn't exist.";
  const linkText = content.find(item => item.id === 'notfound-link')?.text || 'Go back to homepage';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-8">
            {description}
          </p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
