// src/components/Home.js
import React from 'react';
import Header from './Header'; // Certifique-se de que o caminho está correto
import News from './News'; // Certifique-se de que o caminho está correto
import Results from './Results'; // Certifique-se de que o caminho está correto
import ChampionshipAnalysis from './ChampionshipAnalysis'; // Certifique-se de que o caminho está correto
import Footer from './Footer'; // Certifique-se de que o caminho está correto
import './Home.css'; // Se você tiver um CSS específico para a página inicial

function Home() {
  return (
    <div className="Home">
      <Header />
      <main>
        <News />
        <Results />
        <ChampionshipAnalysis />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
