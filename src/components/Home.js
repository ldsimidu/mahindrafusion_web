// src/components/Home.js
import React from 'react';
import Header from './Header'; 
import News from './News';
import Results from './Results'; 
import ChampionshipAnalysis from './ChampionshipAnalysis'; 
import Footer from './Footer'; 
import './Home.css'; 

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
