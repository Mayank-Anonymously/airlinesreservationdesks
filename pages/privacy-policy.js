import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'
import { Container } from 'react-bootstrap'





const html  = `<p>&nbsp;</p>
<p><span style="font-weight: 400;">At FlightsReservationsWeb, we focus on protecting the information of our users. In this Privacy Policy, we will discuss how we collect and use data from users. If you are using our site, you should agree to the Terms mentioned below.</span></p>
<h3><span style="font-weight: 400;">Personal Information We Collect</span></h3>
<p><span style="font-weight: 400;">At www.flightsreservationsweb.com, we collect some personal information from users that we promise to keep safe and secure. Your data will be saved on SSL for security purposes.</span></p>
<h4><span style="font-weight: 400;">Personal Information</span></h4>
<p><span style="font-weight: 400;">When you visit FlightsReservationsWeb, we may collect some personal information from you that include:</span></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Name (traveler&rsquo;s name)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Phone Number</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Email Address</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Passport Number</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Credit Card Information</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Billing Address</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Itinerary Details</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">We may collect some additional details as well, which include:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">IP Address</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cookie Identifiers</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Operating System</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Search History</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">URL and Browser</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Access Time</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">You must ensure to provide the updated, accurate, and complete information for the smooth booking process.</span></p>
<h3><span style="font-weight: 400;">Collecting Your Information</span></h3>
<p><span style="font-weight: 400;">FlightsReservationsWeb collects your information in different ways, including-</span></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Over the phone (Our travel agent or help desk)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Emails and other sources</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">In person</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Through forms</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Through the internet (websites and social media)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Via third-party cookies</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Through subscription and entry forms</span></li>
</ul>
<h3><span style="font-weight: 400;">Using Your Information</span></h3>
<p><span style="font-weight: 400;">FlightsReservationsWeb uses the information to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Process and manage flight bookings</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Communicate with the user about their booking</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Improve the user experience</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Enhance the website functionality&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Send promotional or marketing communications (with your consent)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Give customer support</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Prevent fraud and maintain site security</span></li>
</ul>
<h3><span style="font-weight: 400;">Sharing Your Information</span></h3>
<p><span style="font-weight: 400;">FlightsReservationsWeb may share your information with:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Third-party service providers to fulfill your bookings</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Analytics and marketing platforms to enhance &amp; improve our services</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Legal and regulatory authorities, if it is required by law</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Business partners for joint promotions or offers</span></li>
</ul>
<h3><span style="font-weight: 400;">Cookies and Tracking Technologies</span></h3>
<p><span style="font-weight: 400;">www.flightsresewrvationsweb.com use cookies and similar technologies when users visits FlightsReservationsWeb. We do this to improve the overall experience of users. Cookies are small files that we place on the visitor&rsquo;s device to get information about their preferences. We use these cookies to-</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Maintain session information</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Provide personalize content to users</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Track usage statistics (e.g., via Google Analytics)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Improve site performance&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">You can manage cookie preferences in your browser settings.</span></p>
<h3><span style="font-weight: 400;">Children below 18 Years</span></h3>
<p><span style="font-weight: 400;">Children who are below the age of 18 are not authorized to use FlightsReservationsWeb services. All flight bookings of these children must be made and handled by their parents or guardians.</span></p>
<h3><span style="font-weight: 400;">Data Security</span></h3>
<p><span style="font-weight: 400;">FlightsReservationsWeb implement appropriate technical and organizational measures to protect your personal information. We strive to protect your data from unauthorized access, but no system is 100% secure. We can&rsquo;t guarantee complete security.</span></p>
<h3><span style="font-weight: 400;">Your Rights</span></h3>
<p><span style="font-weight: 400;">Depending on your jurisdiction, you may have rights to:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Access the data we hold about you</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Correct inaccurate information</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Request deletion of your data</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Object to certain data uses</span></li>
</ul>
<p><span style="font-weight: 400;">To exercise your rights, contact us at: support@flightsreservationsweb.com.</span></p>
<h3><span style="font-weight: 400;">Third-Party Links</span></h3>
<p><span style="font-weight: 400;">www.flightsreservationsweb.com may contain links to third-party websites, but we shall not be held responsible for the privacy practices or content of those sites. We advise you to read their privacy policies.</span></p>
<h3><span style="font-weight: 400;">Changes to This Policy</span></h3>
<p><span style="font-weight: 400;">FlightsReservationsWeb reserves the right to modify the Privacy Policy without any notice. The updated Privacy Policy will be posted on this page. Keep checking this page for the revised policy.</span></p>
<h3><span style="font-weight: 400;">Contact Us</span></h3>
<p><span style="font-weight: 400;">Get in touch with us at support@flightsreservationsweb.com for any concerns regarding this privacy policy.</span></p>`















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