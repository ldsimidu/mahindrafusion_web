import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Results = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h2>Results</h2>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Driver 1</td>
                <td>Team A</td>
                <td>1:30.123</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Driver 2</td>
                <td>Team B</td>
                <td>1:31.456</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
