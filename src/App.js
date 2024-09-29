import React from 'react';
import Header from './components/Header';
import News from './components/News';
import Results from './components/Results';
import ChampionshipAnalysis from './components/ChampionshipAnalysis';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
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

export default App;
