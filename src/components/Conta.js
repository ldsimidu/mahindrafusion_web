import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Conta.css';
import Footer from './Footer';
import Header from './Header';

function Conta() {
  const [username, setUsername] = useState(() => localStorage.getItem('username') || "Nome do Usuário");
  const [description, setDescription] = useState(() => localStorage.getItem('description') || "Descrição do Usuário");
  const [bannerImage, setBannerImage] = useState(() => localStorage.getItem('bannerImage') || 'https://via.placeholder.com/1500x300');
  const [profileImage, setProfileImage] = useState(() => localStorage.getItem('profileImage') || 'https://via.placeholder.com/150');
  const [optionsVisible, setOptionsVisible] = useState(false); // Estado para controlar a visibilidade das opções

  const handleBannerChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setBannerImage(file);
      localStorage.setItem('bannerImage', file); 
    }
  };

  const handleProfileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfileImage(file);
      localStorage.setItem('profileImage', file); 
    }
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const newUsername = form.usernameInput.value;
    const newDescription = form.descriptionInput.value;

    setUsername(newUsername);
    setDescription(newDescription);
    
    localStorage.setItem('username', newUsername);
    localStorage.setItem('description', newDescription);
  };

  const toggleOptions = () => {
    setOptionsVisible((prev) => !prev); // Alterna a visibilidade das opções
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="profile-header">
          <div className="favorite-img" id="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
          </div>
          <img src={profileImage} alt="Foto do usuário" className="profile-img" id="profile" />
          <div className="profile-name" id="username">{username}</div>
          <div className="profile-description" id="descriptionDisplay">{description}</div>
        </div>

        <div className="mt-5">
          <div className="toggle-options" id="toggleOptions" onClick={toggleOptions}>
            <img className="config-img" src="./Assets/Img/configuration.png" style={{ width: '50px', height: 'auto', display: 'block', margin: '0 auto' }} alt="Configurações" />
          </div>

          {optionsVisible && ( 
            <div id="options">
              <h3>Trocar Imagens</h3>
              <form id="imageForm">
                <div className="mb-3">
                  <label htmlFor="bannerInput" className="form-label">Banner:</label>
                  <input type="file" className="form-control" id="bannerInput" accept="image/*" onChange={handleBannerChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="profileInput" className="form-label">Foto de Perfil:</label>
                  <input type="file" className="form-control" id="profileInput" accept="image/*" onChange={handleProfileChange} />
                </div>
                <button type="submit" className="btn btn-dark">Salvar Imagens</button>
              </form>

              <h3 className="mt-5">Atualizar Nome e Descrição</h3>
              <form id="profileForm" onSubmit={handleProfileUpdate}>
                <div className="mb-3">
                  <label htmlFor="usernameInput" className="form-label">Nome de Usuário:</label>
                  <input type="text" className="form-control" id="usernameInput" placeholder="Digite seu nome" defaultValue={username} />
                </div>
                <div className="mb-3">
                  <label htmlFor="descriptionInput" className="form-label">Descrição:</label>
                  <textarea className="form-control" id="descriptionInput" rows="3" placeholder="Digite sua descrição" defaultValue={description}></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Salvar Informações</button>
              </form>
            </div>
          )}
          <div className="hall-of-fame-title mt-5">HALL OF FAME</div>

          <div className="row hall-section">
            <h3>Carros</h3>
            <div className="col-6 col-md-4">
              <div className="hall-item">Carro 1</div>
            </div>
            <div className="col-6 col-md-4">
              <div className="hall-item">Carro 2</div>
            </div>
          </div>
          
          <div className="row hall-section">
            <h3>Corredores</h3>
            <div className="col-6 col-md-4">
              <div className="hall-item">Corredor 1</div>
            </div>
            <div className="col-6 col-md-4">
              <div className="hall-item">Corredor 2</div>
            </div>
          </div>

          <div className="row hall-section">
            <h3>Pistas</h3>
            <div className="col-6 col-md-4">
              <div className="hall-item">Pista 1</div>
            </div>
            <div className="col-6 col-md-4">
              <div className="hall-item">Pista 2</div>
            </div>
          </div>

          <div className="row hall-section">
            <h3>Best Bettors</h3>
            <div className="col-6 col-md-4">
              <div className="hall-item">Bettor 1</div>
            </div>
            <div className="col-6 col-md-4">
              <div className="hall-item">Bettor 2</div>
            </div>
            <div className="col-6 col-md-4">
              <div className="hall-item">Bettor 3</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Conta;
