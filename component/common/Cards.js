import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ image, routeFrom, routeTO, routeFromFull, routeToFull }) => {
  return (
    <Card >
      <Card.Img variant="top" src={image} alt={`${routeFrom} to ${routeTO}`} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />

      <Card.Body>
        <Card.Title>
          <h5>
            {routeFrom} <span style={{ color: '#555' }}>–</span> {routeTO}
          </h5>
        </Card.Title>
        <Card.Text>
          <span>{routeFromFull} – {routeToFull}</span>
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Button variant="dark" block> <a href="tel:+1(888) 888-8888" className="text-decoration-none text-white">CALL NOW</a></Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
