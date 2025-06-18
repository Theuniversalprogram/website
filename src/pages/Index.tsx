
import React from 'react';
import BookHero from '@/components/BookHero';
import CoreConcept from '@/components/CoreConcept';
import PurchaseOptions from '@/components/PurchaseOptions';
import SocialFollow from '@/components/SocialFollow';
import AuthorBio from '@/components/AuthorBio';
import BookFooter from '@/components/BookFooter';

const Index = () => {
  return (
    <main className="relative">
      <BookHero />
      <CoreConcept />
      <PurchaseOptions />
      <SocialFollow />
      <AuthorBio />
      <BookFooter />
    </main>
  );
};

export default Index;
