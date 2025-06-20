import Seo from "@/component/common/Seo";
import Screen from "@/component/common/Screen";
import SearchEngine from "@/component/Screens/Home/SearchEngine";
import { Card, Col, Container, Row } from "react-bootstrap";
import Cards from "@/component/common/Cards";
import Features from "@/component/Screens/Home/Features";
import Testimnonials from "@/component/common/Testimnonials";




const DATA = [
  {
    id: 1,      
    routeFrom: "New York",
    routeTO: "Los Angeles",
    routeFromFull: "John F. Kennedy International (JFK)",
    routeToFull: "Los Angeles International (LAX)",
    image: "/assets/destinations/jfk.jpg",
  },
  {
    id: 2,      
    routeFrom: "Chicago",
    routeTO: "Los Angeles",
    routeFromFull: "O'Hare International (ORD)",
    routeToFull: "Los Angeles International (LAX)",
    image: "/assets/destinations/ord.jpg",
  },
  {
    id: 3,      
    routeFrom: "Atlanta",
    routeTO: "Orlando",
    routeFromFull: "Hartsfield–Jackson Atlanta (ATL)",
    routeToFull: "Orlando International (MCO)",
    image: "/assets/destinations/atl.jpg",
  },
  {
    id: 4,      
    routeFrom: "Dallas",
    routeTO: "New York",
    routeFromFull: "Dallas/Fort Worth International (DFW)",
    routeToFull: "John F. Kennedy International (JFK)",
    image: "/assets/destinations/dfw.jpg",
  },
  {
    id: 5,      
    routeFrom: "Miami",
    routeTO: "New York",
    routeFromFull: "Miami International (MIA)",
    routeToFull: "John F. Kennedy International (JFK)",
    image: "/assets/destinations/mia.jpg",
  },
  {
    id: 6,      
    routeFrom: "San Francisco",
    routeTO: "New York",
    routeFromFull: "San Francisco International (SFO)",
    routeToFull: "John F. Kennedy International (JFK)",
    image: "/assets/destinations/sfo.jpg",
  },
];




const Home = () => {


  return (
    <>
      <Seo title="Home | FlightsReservationsWeb" />
      <Screen>
        <section className="home-section-one" >
          <div id="home-engine" />
          <div className="home-engine-content">

            <Container>
              <Row>
                <Col md={6}>
                  <div className="text-white text-center mt-5">
                    <h1>Save Big on Every Flight Booking</h1>
                    <h2>Compare routes and find the best flights fares for your next vacation.</h2>

                  </div>
                </Col>

                <Col md={6}>
                  <SearchEngine />

                </Col>
              </Row>
            </Container>

          </div>
        </section>
        <section id="home-section-two">
          <h3 className="text-center m-5">What We Offer </h3>
          <Features />

        </section>

        <section style={{ marginTop: "100px", marginBottom: "100px", background: "#eee", padding: "5%" }}>
          <Container>
            <h2 className="text-center">About Us</h2>

            <p>At FlightReservationsWeb, we strongly believe that flying should be a delight. That’s why we’ve crafted a platform that removes all the hassle from booking flights—offering you real‑time schedules, the best fares, and dedicated customer support. From choosing your perfect itinerary to landing smoothly at your destination, we’re here to guide you every step of the way.</p>
            <p>If you’re ready to plan and book your next flight with ease, look no further. Contact our aviation experts today to share your preferences and reserve your next set of tickets—effortlessly and reliably.</p>
          </Container>
        </section>

        
        <section id="home-section-three" className="mt-5">
          <Container>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

              <h3>TOP TRAVEL DESTINATION</h3>
              <h6 className="btn-see-more">KNOWN MORE </h6>
            </div>
            <Row>
              {DATA.map((item, index) => (
                <Col key={index} md={4} className="mb-4">
                  <a href="tel:+1(888) 888-8888" className="text-decoration-none ">

                    <Cards {...item} />
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Testimnonials />
        </section>
        <section style={{ marginTop: "100px", marginBottom: "100px", background: "#eee", padding: "5%" }}>
          <Container>
            <h2 className="text-center">Disclaimer</h2>
            <p>FlightReservationsWeb is an independent third-party website that is not affiliated with any airline company or aviation board. We merely act as a facilitator, bringing airline partners and travelers together. Though we try to maintain all data accurate and current, we cannot assure seat availability and fare rates at all times. All tickets purchased through this website are securely processed through trusted payment gateways.</p>
              <p>Ticket bookings made through this site are subject to the terms and conditions set by both our platform and the respective airlines. We do not control operational aspects such as flight delays, cancellations, or in‑flight services. By using FlightReservationsWeb, you acknowledge and agree that any travel‑related issues must be resolved directly with the airline provider. However, our customer service team is available to assist you with any questions regarding your booking experience.</p>
            </Container>
        </section>
      </Screen>
    </>
  );
}


export default Home;

