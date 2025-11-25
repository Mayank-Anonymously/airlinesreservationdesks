import Breadcrumb from '@/component/common/Breadcrumb';
import Screen from '@/component/common/Screen';
import Seo from '@/component/common/Seo';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const index = () => {
	return (
		<Screen>
			<Seo
				title='Contact Us | AirlinesReservationdesks'
				description={
					'Get quick assistance for flight bookings, changes, cancellations, and customer support. Contact Airline Reservation Desks for reliable travel help anytime.'
				}
				keywords={
					'contact airline support, flight assistance, travel help, customer service, booking support, Airline Reservation Desks, flight inquiries'
				}
			/>
			<Breadcrumb
				main='Home'
				page='Contact Us'
				link='/'
				background='/assets/passenger/passenger-two.jpg'
			/>

			<section>
				<div class='container py-5'>
					<div class='row g-5'>
						<div class='col-xl-6'>
							<div class='row row-cols-md-2 g-4'>
								<div
									class='aos-item'
									data-aos='fade-up'
									data-aos-delay='200'>
									<div class='aos-item__inner'>
										<div class='bg-light hvr-shutter-out-horizontal d-block p-3'>
											<div class='d-flex justify-content-start'>
												<i class='fa-solid fa-envelope h3 pe-2'></i>
												<span class='h5'>Email</span>
											</div>
											<span>support@airlinesreservationdesks.com</span>
										</div>
									</div>
								</div>
								<div
									class='aos-item'
									data-aos='fade-up'
									data-aos-delay='400'>
									<div class='aos-item__inner'>
										<div class='bg-light hvr-shutter-out-horizontal d-block p-3'>
											<div class='d-flex justify-content-start'>
												<i class='fa-solid fa-phone h3 pe-2'></i>
												<span class='h5'>Phone</span>
											</div>
											<span> +1-855-706-2195</span>
										</div>
									</div>
								</div>
							</div>
							<div
								class='aos-item mt-4'
								data-aos='fade-up'
								data-aos-delay='600'>
								<div class='aos-item__inner'>
									<div class='bg-light hvr-shutter-out-horizontal d-block p-3'>
										<div class='d-flex justify-content-start'>
											<i class='fa-solid fa-location-pin h3 pe-2'></i>
											<span class='h5'>Office location</span>
										</div>
										<span>#007, Street name, Bigtown BG23 4YZ, England</span>
									</div>
								</div>
							</div>
							<div
								class='aos-item'
								data-aos='fade-up'
								data-aos-delay='800'>
								<div class='mt-4 w-100 aos-item__inner'>
									<iframe
										class='hvr-shadow'
										width='100%'
										height='345'
										frameborder='0'
										scrolling='no'
										marginheight='0'
										marginwidth='0'
										src='https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
										<a href='https://www.maps.ie/distance-area-calculator.html'>
											measure acres/hectares on map
										</a>
									</iframe>
								</div>
							</div>
						</div>

						<div class='col-xl-6'>
							<h2 class='pb-4'>Leave a message</h2>
							<div class='row g-4'>
								<div class='col-6 mb-3'>
									<label
										for='exampleFormControlInput1'
										class='form-label'>
										Fname
									</label>
									<input
										type='text'
										class='form-control'
										id='exampleFormControlInput1'
										placeholder='John'
									/>
								</div>
								<div class='col-6 mb-3'>
									<label
										for='exampleFormControlInput1'
										class='form-label'>
										Lname
									</label>
									<input
										type='text'
										class='form-control'
										id='exampleFormControlInput1'
										placeholder='Doe'
									/>
								</div>
							</div>
							<div class='mb-3'>
								<label
									for='exampleFormControlInput1'
									class='form-label'>
									Email
								</label>
								<input
									type='email'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='name@example.com'
								/>
							</div>
							<div class='mb-3'>
								<label
									for='exampleFormControlInput1'
									class='form-label'>
									Phone
								</label>
								<input
									type='tel'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='+1234567890'
								/>
							</div>

							<div class='mb-3'>
								<label
									for='exampleFormControlTextarea1'
									class='form-label'>
									Message
								</label>
								<textarea
									class='form-control'
									id='exampleFormControlTextarea1'
									rows='3'></textarea>
							</div>
							<button
								type='button'
								class='btn btn-dark'>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</section>
		</Screen>
	);
};

export default index;
