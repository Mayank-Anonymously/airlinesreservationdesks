import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import Features from '@/component/Screens/Home/Features'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const index = () => {
    return (
        <Screen>
            <Seo title="About Us | FlightsReservationsWeb"/>

            <Breadcrumb
                main="Home"
                page="About Us"
                link="/"
                background="/assets/passenger/passenger-two.jpg"
            />




            <section >
                <Container>
                    <div className='m-5'>
                        <h2>
                            Welcome to FlighstReservationsWeb -Your Trusted Booking Partner!

                        </h2>
                        <p>
                            At FlighstReservationsWeb, we strongly believe that train travel should be enjoyable. That's why we've built a platform that takes the stress out of ticket booking, giving you access to real-time schedules, competitive prices, and reliable customer assistance. From planning your journey to arriving at your destination, we are here to help at every step of your journey.
                        </p>
                        <p>
                            If you are looking for the right platform that can help you with planning a train journey, then look no further. Get in touch with our experts as soon as possible to share your priorities and book your next train without any additional effort.

                        </p>
                    </div>

                    <div className='m-5'>
                        <h2>What we do</h2>
                        <p>
                            We connect travelers with rail services, offering a wide selection of routes and operators, all in one place. With our platform, you can:


                        </p>
                        <ul>
                            <li>
                                Compare train times and fares instantly

                            </li>
                            <li>
                                Book securely with flexible payment options
                            </li>
                            <li>Access your tickets digitally, no paper required

                            </li>
                            <li>Get live travel updates and assistance when you need it

                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            <section>

                <Container>
                    <div className='m-5'>
                        <Row>
                            <Col md={6}><img src="/assets/passenger/passenger-three.jpg" /></Col>
                            <Col md={6}>
                                <div className='m-5' >
                                    <h2>Why Choose Us</h2>
                                    <p>
                                        Various reasons make us better than other platforms.

                                    </p>
                                    <ul>
                                        <li>
                                            <strong>Best Fares:</strong>        We help you find the lowest fare for your train ride so you can focus on the fun parts of your trip.

                                        </li>
                                        <li>
                                            <strong>100% Customer Satisfaction:</strong> Our sole motive is to provide you with the best services before, during, or after the journey.


                                        </li>
                                        <li>
                                            <strong>Quick Bookings:</strong> You can book your train tickets without any hassle as our experts are available to help 24*7.


                                        </li>
                                        <li>
                                            <strong>Completely Transparent:</strong> There will be no last-minute surprises, as we believe in complete transparency.
                                        </li>
                                        <li>
                                            <strong>24*7 Assistance: </strong> We are available to help our customers throughout the day and night to ensure a pleasant experience.

                                        </li>
                                    </ul>
                                </div></Col>
                        </Row>
                    </div>
                </Container>
            </section>
                <Features />
            </Screen>
    )
}

export default index 