import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-[#FFD97D] py-24 sm:py-32">
        <div className="absolute top-0 left-0 right-0 w-full h-24 -mt-px">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-full">
                <path d="M0,100 C240,0 480,100 720,50 C960,0 1200,100 1440,80 L1440,0 L0,0 Z" className="fill-current text-[#FFF8F0]"></path>
            </svg>
        </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://picsum.photos/seed/author/400/400" 
              alt="Foto do autor"
              className="rounded-full w-64 h-64 mx-auto md:mx-0 object-cover shadow-2xl border-4 border-dashed border-white p-2"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">Sobre o Criador</h2>
            <p className="text-slate-700 text-lg mb-4">
              Olá! Eu sou um contador de histórias apaixonado por criar mundos mágicos onde a imaginação não tem limites. Minha missão é trazer sorrisos e inspirar com contos de coragem, amizade e aventura.
            </p>
            <p className="text-slate-700 text-lg">
              Cada história é feita com muito carinho, esperando se tornar uma memória preciosa. Obrigado por fazer parte desta jornada!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;