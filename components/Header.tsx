import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <span className="text-4xl animate-bounce">👧</span>
            <StarIcon className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300" style={{fontFamily: "'Baloo 2', cursive"}}>
            📚 Aninha e suas Historinhas 🎬
          </span>
        </a>
        <nav className="flex items-center gap-4">
          <span className="hidden md:block text-lg">👶 3-6 anos</span>
          <a href="#stories" className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all font-bold text-lg transform hover:scale-105">
            🎭 Ver Histórias
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;