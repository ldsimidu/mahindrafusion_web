import React from 'react';

const NewsAndResults = () => {
  return (
    <div>
      {/* Destaques Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="red-div">DESTAQUES</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card news-item racing">
              <img
                src="./Assets/Destaques/varioscaras.jpg"
                className="card-img-top"
                alt="Pascal Wehrlein"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Pascal Wehrlein da Porsche corre através do drama para garantir o Campeonato Mundial de Pilotos da Fórmula E em Londres
                </h5>
                <p className="card-text">
                  Pascal Wehrlein da TAG Heuer Porsche superou o drama para conquistar o Campeonato Mundial de Pilotos da ABB FIA Fórmula E 2023/24...
                </p>
                <a href="#" className="btn btn-primary">
                  Ler Artigo
                </a>
              </div>
            </div>
          </div>

          {/* Últimas Notícias */}
          <div className="col-lg-4">
            <h3 className="mb-3">
              <a href="#" className="text-decoration-none">Últimas notícias -</a>
            </h3>
            <div className="row">
              {/* News Cards */}
              {newsItems.map((item, index) => (
                <div className="col-6 mb-3" key={index}>
                  <div className={`card news-item ${item.type}`}>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.alt}
                    />
                    <div className="card-body">
                      <p className="secondary-title truncate">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ver Mais Button */}
            <div className="text-center mt-3">
              <button className="btn btn-primary btn-ver-mais">
                Ver Mais
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Últimos Resultados Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="red-div">ÚLTIMOS RESULTADOS</h1>
          </div>
        </div>

        <section className="last-results__content mt-4">
          <h2 className="text-center">Últimos Resultados</h2>
          <div className="row">
            {resultItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.alt}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// News and Results Data
const newsItems = [
  {
    image: './Assets/Destaques/outrocarro.png',
    alt: 'Lola Yamaha',
    title: 'Lola Yamaha ABT completa a linha de pilotos estreantes com o novato Zaine Malone...',
    type: 'racing',
  },
  {
    image: './Assets/Destaques/umcarro.png',
    alt: 'Semana do Clima',
    title: 'Fórmula E se prepara para a Semana do Clima de Nova York',
    type: 'sustainability',
  },
  {
    image: './Assets/Destaques/doiscara.png',
    alt: 'Envision Racing',
    title: 'Buemi e Frijns retornam com a Envision Racing para a Temporada 11',
    type: 'racing',
  },
  {
    image: './Assets/Destaques/umcara.png',
    alt: 'Melhores Futuros',
    title: 'Fórmula E abre inscrições para o Fundo Melhores Futuros da Temporada 11',
    type: 'sustainability',
  },
  {
    image: './Assets/Destaques/umcarro.png',
    alt: 'Nova Corrida',
    title: 'Nova corrida de Fórmula E agendada para o próximo mês...',
    type: 'racing',
  },
  {
    image: './Assets/Destaques/varioscaras.jpg',
    alt: 'Iniciativa Sustentável',
    title: 'Fórmula E lança nova iniciativa sustentável para 2024',
    type: 'sustainability',
  },
];

const resultItems = [
  {
    image: './Assets/Corridas/mexico4.png',
    alt: 'Imagem do card',
    title: 'MEXICO QUALIFIERS E-PRIX - STAGE 4',
    text: 'Último Stage para se qualificar para México!',
  },
  {
    image: './Assets/Corridas/mexico3.png',
    alt: 'Imagem do card',
    title: 'MEXICO QUALIFIERS E-PRIX - STAGE 3',
    text: 'Stage 3 para se qualificar para México!',
  },
  {
    image: './Assets/Corridas/mexico2.png',
    alt: 'Imagem do card',
    title: 'MEXICO QUALIFIERS E-PRIX - STAGE 2',
    text: 'Stage 2 para se qualificar para México!',
  },
  {
    image: './Assets/Corridas/mexico1.png',
    alt: 'Imagem do card',
    title: 'MEXICO QUALIFIERS E-PRIX - STAGE 1',
    text: 'Primeiro Stage para se qualificar para México!',
  },
  {
    image: './Assets/Corridas/norwayf.png',
    alt: 'Imagem do card',
    title: 'NORWAY GRAND FINALS CHAMPIONS',
    text: 'GRAND FINALS DA E-CHAMPIONS 2024',
  },
  {
    image: './Assets/Corridas/norways.png',
    alt: 'Imagem do card',
    title: 'NORWAY SEMIFINALS CHAMPIONS',
    text: 'SEMIFINALS DA E-CHAMPIONS 2024',
  },
];

export default NewsAndResults;
