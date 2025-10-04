import React from 'react';
import { storybooks } from '../constants';
import StorybookCard from './StorybookCard';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );

const StorybookGallery: React.FC = () => {
  return (
    <section id="stories" className="py-16 sm:py-24 bg-[#FFF8F0]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
            <StarIcon className="w-8 h-8 text-yellow-400 transform -rotate-12" />
            <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500">
             Nossa Estante de Histórias
            </h2>
            <StarIcon className="w-8 h-8 text-yellow-400 transform rotate-12" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {storybooks.map(storybook => (
            <StorybookCard key={storybook.id} storybook={storybook} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorybookGallery;