import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
              <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='Fusion'>Fusion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='Conta'>Conta</Link>
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
