// src/App.js
import React from 'react';
import './App.css'; // pode manter se tiver estilos ou quiser usar classes do Tailwind via @apply

// Importe os componentes que você criou
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ComparisonTable from './components/ComparisonTable';
import Navbar from './components/Navbar';
import FeaturesHighlight from './components/TrustedBy';
import ApenasUmTeste from './components/ApenasUmTeste';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesHighlight />
      <StatsSection />
      <ComparisonTable />
      <ApenasUmTeste />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
