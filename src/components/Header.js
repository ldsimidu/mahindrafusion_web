import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mahindra Fusion</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/assets/pages/mahindra-fusion.html">Fusion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/assets/pages/loja-pages/loja-ticket.html">Market</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/assets/pages/forum.html">Forum</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/assets/pages/Usuário/Perfil.html">Conta</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Video and Logo */}
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="./Assets/Video/fe-header-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      <div className="header-content">
        <div className="logo-container">
          <img src="./Assets/Img/fe-logo.png" alt="Formula E Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
