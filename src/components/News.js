import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const News = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <h2>Latest News</h2>
          {/* Exemplo de conteúdo */}
          <div className="news-item mb-3">
            <h5>News Title 1</h5>
            <p>News description goes here...</p>
          </div>
          <div className="news-item mb-3">
            <h5>News Title 2</h5>
            <p>News description goes here...</p>
          </div>
        </Col>
        <Col md={4}>
          <h2>Related Articles</h2>
          {/* Exemplo de conteúdo */}
          <div className="related-article mb-3">
            <h5>Related Title 1</h5>
          </div>
          <div className="related-article mb-3">
            <h5>Related Title 2</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
