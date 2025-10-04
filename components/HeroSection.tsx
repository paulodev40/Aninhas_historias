import React from 'react';

const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M110.167 76.25H17.8333C8.29167 76.25 0.5 68.4583 0.5 58.9167C0.5 49.375 8.29167 41.5833 17.8333 41.5833C17.8333 41.5833 18.9167 41.5833 19.9583 41.6917C23.2083 18.7083 43.5 0.75 66.8333 0.75C86.5833 0.75 103.542 12.875 109.208 30.5833C120 30.5833 127.5 39.5833 127.5 50.125C127.5 64.3333 115 76.25 110.167 76.25Z" fill="white" fillOpacity="0.5"/>
    </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#a7e5ff] overflow-hidden">
        <CloudIcon className="w-48 absolute top-10 left-10 animate-pulse" />
        <CloudIcon className="w-32 absolute top-20 right-20" />
        <CloudIcon className="w-24 absolute bottom-1/4 left-1/3 animate-pulse delay-1000" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-shadow mb-4" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.1)'}}>
          Um Mundo de Aventuras!
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-semibold max-w-3xl mx-auto mb-10">
          Descubra nossa coleção de livros de histórias encantadoras, criadas com amor para despertar a imaginação.
        </p>
        <a 
          href="#stories" 
          className="bg-yellow-400 text-slate-800 font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-yellow-300 transform hover:scale-110 hover:animate-bounce transition-all duration-300 ease-in-out"
        >
          Começar a Ler!
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-24">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-full">
            <path d="M1440,0 C1200,100 960,0 720,50 C480,100 240,0 0,20 L0,100 L1440,100 Z" className="fill-current text-[#FFF8F0]"></path>
        </svg>
    </div>
    </section>
  );
};

export default HeroSection;