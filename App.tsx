import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorybookGallery from './components/StorybookGallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FFF8F0] min-h-screen text-slate-700">
      <Header />
      <main>
        <HeroSection />
        <StorybookGallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;