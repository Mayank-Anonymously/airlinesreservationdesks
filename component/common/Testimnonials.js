// components/TestimonialCarousel.js
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    title: "Emma L., Los Angeles",
    image: "https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg",
    text: "Booking my international flight was so easy and affordable. I saved over 20% compared to other sites, and the entire process took just minutes!",
  },
  {
    title: "Raj P., Chicago",
    image: "https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg",
    text: "I had a last-minute change to my itinerary, and the support team handled everything quickly and professionally. I’ll definitely book through them again.",
  },
  {
    title: "Isabella M., Miami",
    image: "https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg",
    text: "I was surprised by how smooth the entire experience was. The deals were real, and I got instant confirmation. Highly recommended!",
  },
  {
    title: "Liam T., New York",
    image: "https://codingyaar.com/wp-content/uploads/headshot-4-scaled.jpg",
    text: "The interface is user-friendly, and they showed real-time flight prices with no hidden charges. Loved the transparency.",
  },
  {
    title: "Sophia R., Houston",
    image: "https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg",
    text: "I booked a round-trip to Europe and received email updates and reminders at every step. The convenience and communication were top-notch.",
  },
  {
    title: "Daniel K., Seattle",
    image: "https://codingyaar.com/wp-content/uploads/headshot-6-scaled.jpg",
    text: "FlightReservationsWeb made it incredibly simple to compare multiple airlines and find the best fare. Plus, I got great discounts using my credit card.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    dots: true,
    infinite: true,
    arrows: false,
    lazyLoad: "ondemand",
    loop: true,
    autoplay :  true ,
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
    <div className="testimonial-slider py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="testimonial-title text-center text-md-start">
              <FaQuoteLeft size={50} className="text-primary mb-3" />
              <h2 className="fw-bold display-6">What our customers say</h2>
            </div>
          </div>
          <div className="col-md-8">
            <Slider {...settings}>
              {testimonials.map((t, index) => (
                <div key={index} className="p-2">
                  <div className="card h-100 shadow-sm">
                    <div className="img-wrapper" style={{ height: "250px", overflow: "hidden" }}>
                      <img
                        src={t.image}
                        alt={t.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-100"
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{t.title}</h5>
                      <div className="mb-2 text-warning">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="me-1" />
                        ))}
                      </div>
                      <p className="card-text">{t.text}</p>
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
