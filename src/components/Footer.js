import React from 'react';
import './Footer.css'; // Certifique-se de incluir a extensão .css

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Sobre Nós</h5>
            <p>
              Somos apaixonados por corridas e trazemos as últimas novidades, resultados e análises do mundo das
              competições automobilísticas.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Redes Sociais</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-light">Facebook</a></li>
              <li className="list-inline-item"><a href="#" className="text-light">Twitter</a></li>
              <li className="list-inline-item"><a href="#" className="text-light">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
