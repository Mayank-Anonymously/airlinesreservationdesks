import Seo from '@/component/common/Seo';
import Screen from '@/component/common/Screen';
import SearchEngine from '@/component/Screens/Home/SearchEngine';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Cards from '@/component/common/Cards';
import Features from '@/component/Screens/Home/Features';
import Testimnonials from '@/component/common/Testimnonials';
import ExpediaModal from '@/component/Modal/popup';
import { useState } from 'react';

const DATA = [
	{
		id: 1,
		routeFrom: 'New York',
		routeTO: 'Los Angeles',
		routeFromFull: 'John F. Kennedy International (JFK)',
		routeToFull: 'Los Angeles International (LAX)',
		image: '/assets/destinations/jfk.jpg',
	},
	{
		id: 2,
		routeFrom: 'Chicago',
		routeTO: 'Los Angeles',
		routeFromFull: "O'Hare International (ORD)",
		routeToFull: 'Los Angeles International (LAX)',
		image: '/assets/destinations/ord.jpg',
	},
	{
		id: 3,
		routeFrom: 'Atlanta',
		routeTO: 'Orlando',
		routeFromFull: 'Hartsfield–Jackson Atlanta (ATL)',
		routeToFull: 'Orlando International (MCO)',
		image: '/assets/destinations/atl.jpg',
	},
	{
		id: 4,
		routeFrom: 'Dallas',
		routeTO: 'New York',
		routeFromFull: 'Dallas/Fort Worth International (DFW)',
		routeToFull: 'John F. Kennedy International (JFK)',
		image: '/assets/destinations/dfw.jpg',
	},
	{
		id: 5,
		routeFrom: 'Miami',
		routeTO: 'New York',
		routeFromFull: 'Miami International (MIA)',
		routeToFull: 'John F. Kennedy International (JFK)',
		image: '/assets/destinations/mia.jpg',
	},
	{
		id: 6,
		routeFrom: 'San Francisco',
		routeTO: 'New York',
		routeFromFull: 'San Francisco International (SFO)',
		routeToFull: 'John F. Kennedy International (JFK)',
		image: '/assets/destinations/sfo.jpg',
	},
];

const Home = () => {
	const [showModal, setShowModal] = useState(true);

	return (
		<>
			<Seo title='Home | AirlinesReservationdesks' />
			<Screen>
				<section className='home-section-one'>
					<div id='home-engine' />
					<div className='home-engine-content'>
						<Container>
							<Row>
								<Col md={6}>
									<div className='text-white text-center mt-5'>
										<h1>Tailored Flight Deals For You!</h1>
										<h2>
											Compare fares easily to find the discounted fare for your
											next flight.
										</h2>
									</div>
								</Col>

								<Col md={6}>
									<SearchEngine />
								</Col>
							</Row>
						</Container>
					</div>
				</section>
				<section id='home-section-two'>
					<h3 className='text-center m-5'>What We Offer </h3>
					<Features />
				</section>

				<section
					style={{
						marginTop: '100px',
						marginBottom: '100px',
						background: '#eee',
						padding: '5%',
					}}>
					<Container>
						<h2 className='text-center'>About Us</h2>

						<p>
							AirlinesReservationdesks is a one-stop platform that helps users
							book flights at discounted fares to multiple destinations around
							the world. Whether you want to explore your all-time favorite or
							want to go to a new destination from your bucket list, we will
							help you get there within your budget. Just share your details,
							and we will book the best flight for you.
						</p>
						<p>
							We also offer unlimited flight deals so you can plan a trip that
							suits your budget. Get in touch with us to find the latest travel
							offers, and take off to your destination without hurting your
							pocket. So why the wait? Call us now to book the best trip of your
							life.
						</p>
					</Container>
				</section>

				<section
					id='home-section-three'
					className='mt-5'>
					<Container>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<h3>TOP TRAVEL DESTINATION</h3>
							<h6 className='btn-see-more'>KNOWN MORE </h6>
						</div>
						<Row>
							{DATA.map((item, index) => (
								<Col
									key={index}
									md={4}
									className='mb-4'>
									<a
										href='tel:+1(888) 888-8888'
										className='text-decoration-none '>
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
				<section
					style={{
						marginTop: '100px',
						marginBottom: '100px',
						background: '#eee',
						padding: '5%',
					}}>
					<Container>
						<h2 className='text-center'>Disclaimer</h2>
						<p>
							FlightReservationsWeb is an independent third-party website that
							has no direct affiliation with any airline. We merely act as a
							mediator between airlines and travelers. Bookings made with us are
							subject to Terms and Conditions of both airlines and
							www.AirlinesReservationdesks.com. By using our site, you agree to
							follow all the mentioned Terms.
						</p>

						<p>
							Please note that we do not control operational aspects such as
							flight delays, cancellations, or in‑flight services. For flight
							delays, cancellations, or refunds, you must directly contact the
							service provider. However, we are available to assist you all the
							time.
						</p>
					</Container>
				</section>
			</Screen>
		</>
	);
};

export default Home;
