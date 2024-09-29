import React from 'react';
import './Header.css'; // Certifique-se de incluir a extensão .css

const Header = () => {
  return (
    <header>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="assets/video/fe-header-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      <div className="header-content">
        <div className="logo-container">
          <img src="assets/images/logo/fe-logo.png" alt="Formula E Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
