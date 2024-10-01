import React from 'react';
import './Header.css';

const VideoLogo = () => {
    return (
      <header>
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
  
  export default VideoLogo;
  