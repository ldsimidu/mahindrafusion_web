import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fusion.css'; 
import Footer from './Footer'; 
import Header from './Header';

const Fusion = () => {
    return (
        <div>
            <Header />
            <header className="head-mahindra bg-dark text-white text-center py-4">
                <h1 className="display-5">Acompanhe ao vivo as corridas de Fórmula E.</h1>
                <p className="m-text">Aqui você consegue se manter completamente atualizado dos maiores campeonatos da Fórmula E.</p>
                <div className="btn btn-primary mt-3 streams">
                    <a href="/live-stream" className="text-white">Assista aqui</a>
                </div>
            </header>

            <main className="container-fluid main__content">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card bg-dark text-white mb-4">
                            <img src="https://via.placeholder.com/700x400" className="card-img" alt="Transmissão Principal"/>
                            <div className="card-img-overlay">
                                <div className="video-stream">
                                    <video autoPlay muted loop>
                                        <source src="./Assets/Video/Season 10 Is HERE _ Formula E Opening Titles.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <h5 className="card-title display-4">Transmissão Principal</h5>
                                <p className="card-text">Assista à transmissão ao vivo da corrida em São Paulo.</p>
                                <a href="#" className="btn btn-primary">Assistir</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="card bg-dark text-white h-100">
                                    <img src="./Assets/Img/GrandeFinal.jpg" className="card-img" alt="Grande Final"/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Grande Final</h5>
                                        <p className="card-text">Assista à Grande Final.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="card bg-dark text-white h-100">
                                    <img src="./Assets/Img/ingresso formula e.jpg" className="card-img" alt="Novos Horizontes"/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Garanta seu ingresso</h5>
                                        <p className="card-text">Não perca a chance de viver a adrenalina das pistas ao vivo!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-white mt-4">Transmissões ao Vivo</h1>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card bg-dark text-white h-100">
                            <img src="./Assets/Img/STREAMER 1.jpg" className="card-img-top" alt="Stream 1"/>
                            <div className="card-body">
                                <h5 className="card-title">ElectroDrift</h5>
                                <p className="card-text">Competição de alta velocidade.</p>
                                <a href="#" className="btn btn-primary">Assistir</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-dark text-white h-100">
                            <img src="./Assets/Img/STREAMER 2.jpg" className="card-img-top" alt="Stream 2"/>
                            <div className="card-body">
                                <h5 className="card-title">E-RacerX</h5>
                                <p className="card-text">Transmitindo uma nova corrida.</p>
                                <a href="#" className="btn btn-primary">Assistir</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-dark text-white h-100">
                            <img src="./Assets/Img/STREAMER 3.jpg" className="card-img-top" alt="Stream 3"/>
                            <div className="card-body">
                                <h5 className="card-title">FormulaE_Fanatic</h5>
                                <p className="card-text">Cobertura ao vivo da pista.</p>
                                <a href="#" className="btn btn-primary">Assistir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Fusion;
