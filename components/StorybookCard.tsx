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
  const handleClick = () => {
    window.open(storybook.youtubeUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-orange-500/20 overflow-hidden transform hover:-translate-y-3 hover:rotate-1 transition-all duration-300 ease-in-out group cursor-pointer border-4 border-transparent hover:border-yellow-300">
      <div className="relative" onClick={handleClick}>
        <img 
          src={storybook.thumbnailUrl} 
          alt={storybook.title} 
          className="w-full h-80 object-cover"
          onError={(e) => {
            // Fallback para uma imagem padrão se a thumbnail do YouTube não carregar
            const target = e.target as HTMLImageElement;
            target.src = `./images/story-${storybook.id}.jpg`;
          }}
        />
        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ▶ YouTube
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-6 transform hover:scale-110 transition-transform">
                <PlayIcon className="w-16 h-16 text-red-500 drop-shadow-lg" />
            </div>
        </div>
        {/* Adiciona estrelinhas decorativas */}
        <div className="absolute top-2 left-2 text-yellow-400 text-2xl animate-pulse">⭐</div>
        <div className="absolute bottom-2 right-2 text-pink-400 text-lg animate-bounce">🎭</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">{storybook.title}</h3>
        <p className="text-slate-600 flex-grow mb-6 text-lg leading-relaxed">{storybook.description}</p>
        <button 
          onClick={handleClick}
          className="mt-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 text-lg"
        >
          <PlayIcon className="w-6 h-6" />
          Assistir Agora! 🎬
        </button>
      </div>
    </div>
  );
};

export default StorybookCard;