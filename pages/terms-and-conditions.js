import Breadcrumb from '@/component/common/Breadcrumb';
import Screen from '@/component/common/Screen';
import Seo from '@/component/common/Seo';
import React from 'react';
import { Container } from 'react-bootstrap';

const html = ` <p><span style="font-weight: 400;">In these &ldquo;Terms and Conditions,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo; refer to FlighrtsReservationsWeb, whereas, &ldquo;you,&rdquo; &ldquo;your,&rdquo; &ldquo;customers&rdquo; refer to those who are using our site for booking flights. By using our site or services, you agree to adhere to these terms and conditions. If you have any issues or you don&rsquo;t agree with these Terms, you should avoid using it immediately.</span></p>
<h3><span style="font-weight: 400;">Use of the Website</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">You must be at least 18 years old to use our Services.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">You agree to use the Site only for lawful purposes.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">The User must be in accordance with these Terms if they want to use our services.</span></li>
</ul>
<p><br /><br /></p>
<p><strong>You agree not to:</strong></p>
<p><span style="font-weight: 400;">Use www.AirlinesReservationdesks.com for any fraudulent purpose;</span></p>
<p><span style="font-weight: 400;">Access or use the Site using automated means (e.g., bots or scrapers);</span></p>
<p><span style="font-weight: 400;">Impersonate any person or entity.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">Our Role</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">AirlinesReservationdesks acts as an independent third-party platform that acts as a mediator between customers and airlines.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">We are not affiliated with or operate any airline&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Any bookings made through our Site are subject to the airline&rsquo;s Terms.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">AirlinesReservationdesks are not responsible for flight delays, cancellations, overbooking, or any changes made by the airline.</span></li>
</ul>
<h3><span style="font-weight: 400;">Cookies</span></h3>
<p><span style="font-weight: 400;">AirlinesReservationdesksl uses cookies when users visit the site, only for the sole purpose of enhancing their overall experience. Your use of the Site indicates that you give your consent to use the cookies.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Cookies help us personalize content based on users&rsquo; preferences. Using cookies also helps us to make your visit seamless.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">Booking and Payment</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">When you make a booking with www.AirlinesReservationdesks.com, you authorize us to act as your agent to arrange the booking and process payment on your behalf.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Prices displayed on the Site are subject to change without notice and are not guaranteed until payment is completed and booking is confirmed.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">All bookings are subject to availability and acceptance of the service provider.</span></li>
</ul>
<h3><span style="font-weight: 400;">Changes and Cancellations</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Changes and cancellations are subject to the policies of the airline you booked with.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">We shall not be held liable for any penalties, fees, or losses resulting from a flight cancellation or change by the airline.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">AirlinesReservationdesks is not responsible for any refunds; however, we will help you with the communication.</span></li>
</ul>
<h3><span style="font-weight: 400;">Third-Party Bookings</span></h3>
<p><span style="font-weight: 400;">At AirlinesReservationdesks, we operate as an independent platform that connects users with a wide range of travel and booking options offered by third-party providers. Please note that all bookings made through our website are completed directly with these third-party vendors. They have their own Terms and Conditions that you should read before using their services.</span></p>
<p><span style="font-weight: 400;">This includes, but is not limited to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Payment policies (including methods, schedules, and currency handling)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Changes or amendments to booking details</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cancellation terms (such as applicable fees or penalties for changes or cancellations)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Refund and reimbursement policies</span></li>
</ul>
<p><span style="font-weight: 400;">We strongly encourage all users to check out the specific Terms of the particular third-party provider when using their services. However, we are not responsible for their specific Terms.</span></p>
<h3><span style="font-weight: 400;">User Responsibilities</span></h3>
<p><span style="font-weight: 400;">By using www.AirlinesReservationdesks.com, the user must agree to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Use the site lawfully and not for any unauthorized purpose</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Share accurate and updated information</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Review the terms, conditions, and any other policies of the specific third-party service provider</span></li>
</ul>
<h3><span style="font-weight: 400;">Intellectual Property</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">All content on the Site, including text, graphics, logos, and software, is owned by or licensed to AirlinesReservationdesks and protected by intellectual property laws.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">You may not copy, modify, reproduce, or share any content without taking permission from us.</span></li>
</ul>
<h3><span style="font-weight: 400;">Disclaimer of Warranties</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">The Services are provided "as is" and "as available." We make no warranties or representations regarding the accuracy, completeness, or reliability of the information on the Site.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">We do not guarantee that the Site will be error-free, secure, or free from viruses.</span></li>
</ul>
<h3><span style="font-weight: 400;">Limitation of Liability</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">In any event, AirlinesReservationdesks should not be held responsible for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Our total liability to you for any claim arising from the use of the Site or Services is limited to the amount paid by you to us for the relevant booking.</span></li>
</ul>
<h3><span style="font-weight: 400;">Your Privacy</span></h3>
<p><span style="font-weight: 400;">The user should read our Privacy Policy before using our services. The policy indicates how we collect, use, and safeguard your details.</span></p>
<h3><span style="font-weight: 400;">Changes to Terms</span></h3>
<p><span style="font-weight: 400;">AirlinesReservationdesks reserves the sole right to update these Terms of Service from time to time. To be updated, keep visiting this page. To use our website, you must agree to the updated Terms.</span></p>
<h3><span style="font-weight: 400;">Governing Law</span></h3>
<p><span style="font-weight: 400;">Your use of www.AirlinesReservationdesks.com and these Terms will be governed by the laws of the United States, without reference to its conflict of law provisions.</span></p>
<h3><span style="font-weight: 400;">Contact Us</span></h3>
<p><span style="font-weight: 400;">For any questions or queries, reach out to us-</span></p>
<p><span style="font-weight: 400;">support@AirlinesReservationdesks.com</span></p>`;

const index = () => {
	return (
		<Screen>
			<Seo title='Terms and Conditions | AirlinesReservationdesks' />
			<Breadcrumb
				main='Home'
				page='Terms and Conditions'
				link='/'
				background='/assets/passenger/passenger-two.jpg'
			/>

			<section>
				<Container>
					<div
						className='m-5'
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</Container>
			</section>
		</Screen>
	);
};

export default index;
