import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'
import { Container } from 'react-bootstrap'




const  html  = ` <p><strong>Terms and Conditions - FlighstReservationsWeb</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Welcome to </span><strong>FlighstReservationsWeb</strong><span style="font-weight: 400;">. These Terms and Conditions ("Terms") govern your use of our website, services, and products (collectively, the "Services") provided by FlighstReservationsWeb ("we," "our," or "us").</span></p>
<p><span style="font-weight: 400;">By accessing or using our Services, the user agrees to follow these Terms. If he does not agree with these Terms, he should not use our Services.</span></p>
<h3><span style="font-weight: 400;">1. Service Overview</span></h3>
<p><span style="font-weight: 400;">FlighstReservationsWeb is an independent, third-party platform that enables users to search, compare, and purchase train tickets within the United States. We don&rsquo;t have any partnership with any rail operator.</span></p>
<p><span style="font-weight: 400;">We are not a rail carrier and do not operate or control any trains. We serve solely as a booking intermediary.</span></p>
<h2><span style="font-weight: 400;">2. User Eligibility</span></h2>
<p><span style="font-weight: 400;">You must be at least 18 years old and capable of entering into a legally binding agreement to use our Services. By using our platform, you represent and warrant that you meet these requirements.</span></p>
<h3><span style="font-weight: 400;">3. Ticket Purchases and Pricing</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">All ticket purchases made through FlighstReservationsWeb are subject to the terms and conditions of the respective train operator.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Prices are displayed in U.S. dollars and include applicable taxes and fees unless otherwise stated.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">We make every effort to ensure accurate pricing and availability, but we cannot guarantee the absence of errors. In the event of a pricing error, FlighstReservationsWeb reserves the right to cancel or adjust your booking.</span></li>
</ul>
<h3><span style="font-weight: 400;">4. Cancellations and Refunds</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cancellation and refund policies are determined by the respective train operator.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">FlighstReservationsWeb does not issue refunds directly unless explicitly stated.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Please refer to the fare rules at the time of booking for detailed information.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">5. Accuracy of Information</span></h3>
<p><span style="font-weight: 400;">We strive to provide accurate, up-to-date information, including schedules, pricing, and service updates. However, we do not guarantee its accuracy or availability.</span></p>
<h3><span style="font-weight: 400;">6. Account Responsibility</span></h3>
<p><span style="font-weight: 400;">If you create an account on our site, you must take sole responsibility for maintaining your login credentials confidentiality. You are also liable for all activity that occurs under your account.</span></p>
<h3><span style="font-weight: 400;">7. Prohibited Activities</span></h3>
<p><span style="font-weight: 400;">The user agrees not to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Use our platform for any unlawful purpose;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Interfere with or disrupt the Services or servers;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Use automated systems to extract data or information from the platform;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Impersonate another user or misrepresent your identity.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><span style="font-weight: 400;">8. Intellectual Property</span></h3>
<p><span style="font-weight: 400;">All content, design, logos, and technology used in our Services are the property of FlighstReservationsWeb or our partners and are protected by intellectual property laws. The user may not copy, reproduce, or distribute any content on the site without getting written permission from us.</span></p>
<h3><span style="font-weight: 400;">9. Limitation of Liability</span></h3>
<p><span style="font-weight: 400;">To the fullest extent permitted by law, www.FlightsReservationsWeb.com should not be held responsible for any direct, indirect, exemplary, special, incidental, or consequential damages resulting from:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Use or inability to use our Services;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Delays, cancellations, or service disruptions by third-party train operators;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Errors or inaccuracies in travel data or pricing.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">10. Indemnification</span></h3>
<p><span style="font-weight: 400;">The user agrees to indemnify, defend, and hold harmless FlighstReservationsWeb, its officers, directors, licensors, employees, and agents from any claims, liabilities, damages, losses, costs, and expenses arising out of your use of the Services or violation of these Terms.</span></p>
<h3><span style="font-weight: 400;">11. Changes to Terms</span></h3>
<p><span style="font-weight: 400;">We may update these Terms from time to time. Changes will be posted on this page when they are effective. If you continue using FlighstReservationsWeb after the updated Terms, it shows your acceptance of the modified Terms.</span></p>
<h3><span style="font-weight: 400;">12. Governing Law</span></h3>
<p><span style="font-weight: 400;">These Terms, along with any disputes or claims arising from or related to them, whether contractual or otherwise, will be interpreted and enforced in accordance with the laws of the United States. This will apply without taking into account any rules that might direct the application of the laws of another jurisdiction.</span></p>
<h3><span style="font-weight: 400;">13. Contact Us</span></h3>
<p><span style="font-weight: 400;">If you have any questions about these Terms, please contact us at:</span></p>
<p><strong>FlighstReservationsWeb</strong><strong><br /></strong><span style="font-weight: 400;">Email: support@flightsreservationsweb.comX</span></p>
<p>&nbsp;</p>`









const index = () => {
    return (
        <Screen>
            <Seo title="Terms and Conditions | FlightsReservationsWeb" />
            <Breadcrumb
                main="Home"
                page="Terms and Conditions"
                link="/"
                background="/assets/passenger/passenger-two.jpg"
            />

                        <section >
                <Container>
                    <div className='m-5' dangerouslySetInnerHTML={{__html : html}} />
                </Container>
            </section>
            
        </Screen>
    )
}

export default index 