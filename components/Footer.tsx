import React from 'react';

const YoutubeIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.267,4,12,4,12,4S5.733,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.733,2,12,2,12s0,4.267,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.733,20,12,20,12,20s6.267,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.267,22,12,22,12S22,7.733,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl font-bold mb-4" style={{fontFamily: "'Baloo 2', cursive"}}>Acompanhe no YouTube!</p>
        <div className="flex justify-center gap-8 mb-6">
          <a href="#" className="text-red-500 hover:text-red-400 transition-colors transform hover:scale-110"><YoutubeIcon className="w-10 h-10" /></a>
        </div>
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Aninha e suas historinhas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;