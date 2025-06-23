import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import Features from '@/component/Screens/Home/Features'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const index = () => {
    return (
        <Screen>
            <Seo title="About Us | FlightsReservationsWeb" />

            <Breadcrumb
                main="Home"
                page="About Us"
                link="/"
                background="/assets/passenger/passenger-two.jpg"
            />

            <section>
                <Container>
                    <div className='m-5'>
                        <h2>Welcome to FlightsReservationsWeb – Your Independent Flight Booking Partner</h2>
                        <p>
                            At FlightsReservationsWeb, we believe in giving travelers the freedom to explore the world on their own terms. Our only motive is to simplify the flight search, compare ticket prices, and help you find the best deals. We are your one-stop platform to book flight tickets to your favorite destination within your budget.
                        </p>
                        <p>
                            We're not tied to any specific carrier. That means our only priority is you — your preferences, your budget, and your journey. We make it easy to browse, compare, and book the right flight for you.
                        </p>
                    </div>

                    <div className='m-5'>
                        <h2>What We Do</h2>
                        <p>
                            We scan hundreds of airlines to bring you the most competitive fares, route options, and schedules. Our platform empowers travelers to:
                        </p>
                        <ul>
                            <li>Compare flights, prices, and timings across multiple airlines</li>
                            <li>Book flights easily with transparent pricing</li>
                            <li>Enjoy a hassle-free booking experience without any hidden fees</li>
                            <li>Access simple, real-time customer support and travel information</li>
                        </ul>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className='m-5'>
                        <Row>
                            <Col md={6}><img src="/assets/passenger/passenger-three.jpg" alt="Why Choose Us" /></Col>
                            <Col md={6}>
                                <div className='m-5'>
                                    <h2>Why Choose Us</h2>
                                    <ul>
                                        <li><strong>Comprehensive Search:</strong> We scan hundreds of airlines to bring you the most competitive fares, route options, and schedules.</li>
                                        <li><strong>Unbiased & Transparent:</strong> You never see us favor any airline as we are an independent third-party travel service provider. We show you the best options simply.</li>
                                        <li><strong>Built for Real Travelers:</strong> Whether you are booking your first flight or are a seasoned traveler, our platform is designed for ease of use, flexibility, and savings.</li>
                                        <li><strong>Simple Booking Process:</strong> With FlightsReservationsWeb, you can book your flight without any additional effort. Just call and confirm your booking.</li>
                                        <li><strong>24/7 Support:</strong> We’re here round-the-clock to assist you before, during, or after your trip.</li>
                                    </ul>
                                    <p>
                                        FlightsReservationsWeb is your reliable travel partner whose sole motive is to make your journey an enjoyable one. Choose us as your booking partner, and keep all your worries away. So go ahead, call us to book your tickets, and double the joy of your trip.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <Features />
        </Screen>
    )
}

export default index
