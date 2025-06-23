import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'



const promoData = [
  {
    title: "Crafted itineraries as per your preferences",
    image: "/assets/clipart/offer.png",
    buttonText: "Learn more",
  },
  {
    title: "Unlimited flight deals on various flights",
    image: "/assets/clipart/flight-booking.jpg",
    buttonText: "Learn more",
  },
  {
    title: "on-stop assistance from travel experts",
    image: "/assets/clipart/checkin.png",
    buttonText: "Learn more",
  },
];



const Features = () => {

    return (
        <>

            <Container className="py-5">
      <Row className="g-4">
        {promoData.map((promo, index) => (
          <Col md={4} key={index}>
            <Card className="text-white promo-card border-0 overflow-hidden">
              <Card.Img src={promo.image} alt={promo.title} className="img-fluid promo-img" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3 bg-dark bg-opacity-50">
                <Card.Title>{promo.title}</Card.Title>
                <Button variant="light" className="mt-2 w-50">
                  {promo.buttonText}
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

        </>)
}

export default Features
