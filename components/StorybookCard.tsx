import React from 'react';
import { Storybook } from '../types';

interface StorybookCardProps {
  storybook: Storybook;
}

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5.14v14l11-7-11-7z"></path>
    </svg>
);


const StorybookCard: React.FC<StorybookCardProps> = ({ storybook }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-orange-500/20 overflow-hidden transform hover:-translate-y-3 hover:rotate-2 transition-all duration-300 ease-in-out group">
      <div className="relative">
        <img 
          src={storybook.thumbnailUrl} 
          alt={storybook.title} 
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => window.open(storybook.youtubeUrl, '_blank')}>
            <div className="bg-white/80 rounded-full p-4">
                <PlayIcon className="w-16 h-16 text-orange-500 drop-shadow-lg" />
            </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{storybook.title}</h3>
        <p className="text-slate-600 flex-grow mb-4">{storybook.description}</p>
        <a 
          href={storybook.youtubeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-auto bg-pink-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 transform hover:scale-105"
        >
          Assistir Agora!
        </a>
      </div>
    </div>
  );
};

export default StorybookCard;