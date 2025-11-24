// components/TestimonialCarousel.js
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
	{
		title: 'Emma L., Los Angeles',
		image: 'https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg',
		text: 'I booked a flight with AirlinesReservationdesks, and I am happy with the overall experience. The support team helped me with the booking process and made everything simple. I highly recommend this site!',
	},
	{
		title: 'Raj P., Chicago',
		image: 'https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg',
		text: 'AirlinesReservationdesks is one of the best travel websites, as it helped me save 10% on my flight booking. One of their agents gave me a discount code that made my entire journey budget-friendly.',
	},
	{
		title: 'Isabella M., Miami',
		image: 'https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg',
		text: 'This was my second time using AirlinesReservationdesks, and both times the experience has been seamless. Flights booked, confirmed, and no surprises. That’s all I ask for! Highly appreciated!',
	},
	{
		title: 'Liam T., New York',
		image: 'https://codingyaar.com/wp-content/uploads/headshot-4-scaled.jpg',
		text: 'Booked a domestic flight last minute and was worried about getting overcharged, but AirlinesReservationdesks had transparent pricing and no surprise fees at checkout. Booking was straightforward and reliable.',
	},
	{
		title: 'Sophia R., Houston',
		image: 'https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg',
		text: 'I booked a flight with AirlinesReservationdesks and had to make a name correction on my ticket after booking. I contacted the support team, and they sorted it within 24 hours. Very polite and efficient team members. ',
	},
	{
		title: 'Daniel K., Seattle',
		image: 'https://codingyaar.com/wp-content/uploads/headshot-6-scaled.jpg',
		text: "Honestly, I was skeptical at first, but AirlinesReservationdesks found a fare that was significantly cheaper than on the airline's site. I am really thankful for the discount they gave me. I will definitely use it again!",
	},
];

const TestimonialCarousel = () => {
	const settings = {
		centerMode: true,
		centerPadding: '40px',
		dots: true,
		infinite: true,
		arrows: false,
		lazyLoad: 'ondemand',
		loop: true,
		autoplay: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className='testimonial-slider py-5'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-4 mb-4'>
						<div className='testimonial-title text-center text-md-start'>
							<FaQuoteLeft
								size={50}
								className='text-primary mb-3'
							/>
							<h2 className='fw-bold display-6'>What our customers say</h2>
						</div>
					</div>
					<div className='col-md-8'>
						<Slider {...settings}>
							{testimonials.map((t, index) => (
								<div
									key={index}
									className='p-2'>
									<div className='card h-100 shadow-sm'>
										<div
											className='img-wrapper'
											style={{ height: '250px', overflow: 'hidden' }}>
											<img
												src={t.image}
												alt={t.title}
												layout='fill'
												objectFit='cover'
												className='w-100'
												loading='lazy'
											/>
										</div>
										<div className='card-body'>
											<h5 className='card-title'>{t.title}</h5>
											<div className='mb-2 text-warning'>
												{[...Array(5)].map((_, i) => (
													<FaStar
														key={i}
														className='me-1'
													/>
												))}
											</div>
											<p className='card-text'>{t.text}</p>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCarousel;
