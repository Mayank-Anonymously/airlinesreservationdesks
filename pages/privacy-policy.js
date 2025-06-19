import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'
import { Container } from 'react-bootstrap'





const html  = `<p><strong>Privacy Policy - FlighstReservationsWeb</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">FlighstReservationsWeb (&ldquo;FlighstReservationsWeb,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy. In this Privacy Policy, we will discuss how we collect and use your personal details when you visit www.FlightsReservationsWeb.com. We will also share how we take measures to protect your personal information when interacting with our site.</span></p>
<p><span style="font-weight: 400;">By accessing or using our Services, you agree to the terms of this Privacy Policy.</span></p>
<h3><span style="font-weight: 400;">1. Information We Collect</span></h3>
<p><span style="font-weight: 400;">We may collect the following types of information when you interact with our Services:</span></p>
<h4><span style="font-weight: 400;">a. Personal Information</span></h4>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">User&rsquo;s Name</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">His/ Her Email address</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Customer&rsquo;s Phone number</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Payment information (processed securely via third-party processors)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Travel preferences and booking details</span></li>
</ul>
<h4><span style="font-weight: 400;">b. Non-Personal Information</span></h4>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">IP address</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Browser type and device information</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Location data (approximate, based on IP)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cookies and usage data (pages visited, links clicked, etc.)</span></li>
</ul>
<h3><span style="font-weight: 400;">2. How We Use Your Information</span></h3>
<p><span style="font-weight: 400;">We use the information we collect for purposes such as:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Processing your ticket bookings and payments</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Providing customer support</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Sending booking confirmations, updates, or service-related notices</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Improving website performance and user experience</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Preventing fraud and ensuring security</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Complying with legal obligations</span></li>
</ul>
<h3><span style="font-weight: 400;">3. Sharing Your Information</span></h3>
<p><span style="font-weight: 400;">We do </span><strong>not sell</strong><span style="font-weight: 400;"> your personal information. We may share your data with:</span></p>
<ul>
<li style="font-weight: 400;"><strong>Train operators and travel partners</strong><span style="font-weight: 400;"> to fulfill your bookings</span></li>
<li style="font-weight: 400;"><strong>Service providers</strong><span style="font-weight: 400;"> (e.g., payment processors, analytics services) who assist us in operating our business</span></li>
<li style="font-weight: 400;"><strong>Legal authorities,</strong><span style="font-weight: 400;"> when it is needed to comply with the law or protect our rights</span></li>
<li style="font-weight: 400;"><strong>In the event of a business transfer</strong><span style="font-weight: 400;">, such as a merger or acquisition</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">All third-party partners are required to handle your data in compliance with applicable privacy laws.</span></p>
<h3><span style="font-weight: 400;">4. Cookies and Tracking Technologies</span></h3>
<p><span style="font-weight: 400;">FlighstReservationsWeb uses cookies and similar technologies to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Remember your preferences</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Analyze website traffic and trends</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Improve site functionality and content</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">To control cookie preferences, visit your browser settings. Disabling cookies as per your preferences, however, it may impact your user experience.</span></p>
<h3><span style="font-weight: 400;">5. Data Security</span></h3>
<p><span style="font-weight: 400;">FlighstReservationsWeb takes strong and reasonable technical, administrative, and physical measures to protect your information from unauthorized access, use, or disclosure. However, there is no method on the internet that is 100% secure.</span></p>
<h3><span style="font-weight: 400;">6. Your Privacy Rights</span></h3>
<p><span style="font-weight: 400;">Depending on your location, you may have rights under applicable data privacy laws, including:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Access to the personal information we gathered from you</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Requesting correction or deletion of your data</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Opting out of marketing communications</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">To exercise your rights, contact us at support@flightsreservationsweb.com.</span></p>
<h3><span style="font-weight: 400;">7. Third-Party Links</span></h3>
<p><span style="font-weight: 400;">Our website may contain links to third-party websites (such as rail operators or travel partners). We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.</span></p>
<h3><span style="font-weight: 400;">8. Changes to This Policy</span></h3>
<p><span style="font-weight: 400;">FlighstReservationsWeb reserves the right to update this Privacy Policy from time to time. The modified policy will be posted on this page, and it will be effective immediately. We highly encourage you to check out the Privacy Policy from time to time.</span></p>
<h3><span style="font-weight: 400;">9. Contact Us</span></h3>
<p><span style="font-weight: 400;">If you have any questions or concerns about this Privacy Policy, please contact us at:</span></p>
<p><strong>FlighstReservationsWeb</strong><strong><br /></strong><span style="font-weight: 400;"> Email: support@flightsreservationsweb.com</span></p>
<p><br /><br /></p>`















const index = () => {
    return (
        <Screen>
    <Seo title="Privacy Policy | FlightsReservationsWeb"/>
            <Breadcrumb
                main="Home"
                page="Privacy Policy"
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