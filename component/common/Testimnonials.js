// components/TestimonialCarousel.js
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    title: "Card title 1",
    image: "https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 2",
    image: "https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 3",
    image: "https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 4",
    image: "https://codingyaar.com/wp-content/uploads/headshot-4-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 5",
    image: "https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 6",
    image: "https://codingyaar.com/wp-content/uploads/headshot-6-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
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
