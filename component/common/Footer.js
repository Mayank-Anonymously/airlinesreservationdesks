import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	FaFacebookF,
	FaTwitter,
	FaGoogle,
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaGem,
	FaHome,
	FaEnvelope,
	FaPhone,
	FaPrint,
} from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
	return (
		<footer className='p-2'>
			{/* Main Footer */}
			<section className=''>
				<Container className='text-center text-md-start mt-5'>
					<Row className='mt-3'>
						<Col
							md={3}
							lg={4}
							xl={3}
							className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>
								<img
									src='/assets/logo/logo.png'
									className='logo-img'
									alt='logo-footer'
								/>
							</h6>
							<p>
								At AirlinesReservationdesks, we are dedicated to providing you
								with the best flight fares. Contact us to find limited-time
								deals, and save a big amount on your next flight. Book now!
							</p>
						</Col>

						<Col
							md={2}
							lg={2}
							xl={2}
							className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>
								About Airlinesreservationdesks
							</h6>
							<p>
								<a
									href='/about-us'
									className='text-reset'>
									About Us
								</a>
							</p>
							<p>
								<a
									href='/contact-us'
									className='text-reset'>
									Contact Us
								</a>
							</p>
							{/* <p><a href="#!" className="text-reset">Vue</a></p>
              <p><a href="#!" className="text-reset">Laravel</a></p> */}
						</Col>

						<Col
							md={3}
							lg={2}
							xl={2}
							className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Legal</h6>
							<p>
								<a
									href='/privacy-policy'
									className='text-reset'>
									Privacy Policy
								</a>
							</p>
							<p>
								<a
									href='/terms-and-conditions'
									className='text-reset'>
									Terms and conditions
								</a>
							</p>
							{/* <p><a href="#!" className="text-reset">Orders</a></p>
              <p><a href="#!" className="text-reset">Help</a></p> */}
						</Col>

						<Col
							md={4}
							lg={3}
							xl={3}
							className='mx-auto mb-md-0 mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
							<p>
								<FaHome className='me-2' />
								1050 Southwest 6th Avenue, Portland, OR, 97204, USA
							</p>
							<p>
								<FaEnvelope className='me-3' />{' '}
								info@AirlinesReservationdesks.com
							</p>
							<p>
								<FaPhone className='me-3' />{' '}
								<a
									className='text-decoration-none text-black'
									href='tel: +1-855-706-2195'>
									+1-855-706-2195
								</a>{' '}
							</p>
							{/* <p><FaPrint className="me-3" /> + 01 234 567 89</p> */}
						</Col>
					</Row>
				</Container>
			</section>

			{/* Copyright */}
			<div
				className='text-center p-4'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
				<h6 className='text-uppercase fw-bold mb-4'>IMPORTANT NOTICE</h6>
				<p>
					Airlinesreservationdesks is an airline service provider for booking
					flights and not an airline. We act as a booking intermediary between
					travelers and airlines, but are not liable for any delay,
					cancellation, or change of flights. All content on this website is
					subject to change without notice. Visitors should verify that they
					have all the requirements to enter, including visas and passports.
					Airlinesreservationdesks is not responsible for third-party services
					or any incidents related to traveling. Use our platform responsibly.
				</p>{' '}
			</div>
			<div
				className='text-center p-4'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
				© 2025 Copyright:
				<a
					className='text-reset fw-bold'
					href='/'>
					{' '}
					AirlinesReservationdesks.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
