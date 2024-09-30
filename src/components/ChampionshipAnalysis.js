import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChampionshipAnalysis.css'; // Caso tenha um CSS para estilos adicionais

const ChampionshipAnalysis = () => {
  return (
    <section className="container last-review__content py-5">
      <h2>Análise do Campeonato</h2>
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>POS</th>
              <th>INC</th>
              <th>DRIVER</th>
              <th>TEAM</th>
              <th>STARTED</th>
              <th>BEST</th>
              <th>TIME</th>
              <th>GAP</th>
              <th>LATEST RESULTS</th>
              <th>POINTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b className="postion-1">1</b></td>
              <td>
                <img src="./Assets/Img/sobe.png" alt="Team Logo" className="team-logo img-fluid" />
              </td>
              <td className="driver-info">
                <img src="./Assets/Corredores/Pascal.png" alt="Pascal Wehrlein" className="driver-image img-fluid rounded-circle" />
                <i className="player-title">Pascal <br /><i className="main-name">Wehrlein</i></i>
              </td>
              <td>
                <h6>TAG Heuer Porsche Formula E Team</h6>
              </td>
              <td>4</td>
              <td>1:15:87</td>
              <td>53:03:07</td>
              <td>-</td>
              <td>
                <img src="./Assets/Img/3.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/11.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/5.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/7.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/1.png" alt="Place" className="flag img-fluid" />
              </td>
              <td>26</td>
            </tr>

            <tr>
              <td><b className="postion-2">2</b></td>
              <td>
                <img src="./Assets/Img/desce.png" alt="Team Logo" className="team-logo img-fluid" />
              </td>
              <td className="driver-info">
                <img src="./Assets/Corredores/Oliver.png" alt="Oliver Rowland" className="driver-image img-fluid rounded-circle" />
                <i className="player-title">Oliver <br /><i className="main-name">Rowland</i></i>
              </td>
              <td>
                <h6>Nissan Formula E Team</h6>
              </td>
              <td>3</td>
              <td>1:15:80</td>
              <td>53:03:63</td>
              <td>+ 0:0056</td>
              <td>
                <img src="./Assets/Img/2.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/1.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/2.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/5.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/21.png" alt="Place" className="flag img-fluid" />
              </td>
              <td>20</td>
            </tr>

            <tr>
              <td><b className="postion-3">3</b></td>
              <td>
                <img src="./Assets/Img/desce.png" alt="Team Logo" className="team-logo img-fluid" />
              </td>
              <td className="driver-info">
                <img src="./Assets/Corredores/Mitch.png" alt="Mitch Evans" className="driver-image img-fluid rounded-circle" />
                <i className="player-title">Mitch <br /><i className="main-name">&nbsp;&nbsp;&nbsp;&nbsp;Evans&nbsp;&nbsp;</i></i>
              </td>
              <td>
                <h6>Jaguar TCS Racing</h6>
              </td>
              <td>17</td>
              <td>1:15:97</td>
              <td>53:06:61</td>
              <td>+ 0:03:54</td>
              <td>
                <img src="./Assets/Img/4.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/20.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/14.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/12.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/17.png" alt="Place" className="flag img-fluid" />
              </td>
              <td>19</td>
            </tr>

            <tr>
              <td><b className="postion-4">4</b></td>
              <td>
                <img src="./Assets/Img/sobe.png" alt="Team Logo" className="team-logo img-fluid" />
              </td>
              <td className="driver-info">
                <img src="./Assets/Corredores/Jean.png" alt="Jean-Éric Vergne" className="driver-image img-fluid rounded-circle" />
                <i className="player-title">Jean-Éric <br /><i className="main-name">Vergne</i></i>
              </td>
              <td>
                <h6>DS Penske</h6>
              </td>
              <td>9</td>
              <td>1:15:87</td>
              <td>53:06:70</td>
              <td>+ 0:03:62</td>
              <td>
                <img src="./Assets/Img/17.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/21.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/5.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/13.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/4.png" alt="Place" className="flag img-fluid" />
              </td>
              <td>16</td>
            </tr>

            <tr>
              <td><b className="postion-5">5</b></td>
              <td>
                <img src="./Assets/Img/sobe.png" alt="Team Logo" className="team-logo img-fluid" />
              </td>
              <td className="driver-info">
                <img src="./Assets/Corredores/Nick.png" alt="Nick Cassidy" className="driver-image img-fluid rounded-circle" />
                <i className="player-title">Nick <br /><i className="main-name">Cassidy</i></i>
              </td>
              <td>
                <h6>Jaguar TCS Racing</h6>
              </td>
              <td>12</td>
              <td>1:15:89</td>
              <td>53:06:79</td>
              <td>+ 0:03:72</td>
              <td>
                <img src="./Assets/Img/13.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/5.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/10.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/17.png" alt="Place" className="flag img-fluid" />
                <img src="./Assets/Img/2.png" alt="Place" className="flag img-fluid" />
              </td>
              <td>16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ChampionshipAnalysis;
