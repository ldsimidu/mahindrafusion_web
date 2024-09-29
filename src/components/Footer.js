import React from 'react';
import './Footer.css'; // Certifique-se de incluir a extensão .css

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-4">
      <div className="container">
        <div className="row">
          {/* Seção Sobre Nós */}
          <div className="col-md-4">
            <h3>Sobre Nós</h3>
            <p>
              Somos apaixonados por corridas e trazemos as últimas novidades, resultados e análises do mundo das competições automobilísticas.
              Nossa missão é proporcionar excelência em todos os serviços prestados.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="col-md-4">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">Serviços</a></li>
              <li><a href="#" className="text-light">Sobre</a></li>
              <li><a href="#" className="text-light">Contato</a></li>
            </ul>
          </div>

          {/* Seção de Contato */}
          <div className="col-md-4 text-md-end">
            <h3>Contato</h3>
            <p>Email: contato@exemplo.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p>&copy; 2024 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
