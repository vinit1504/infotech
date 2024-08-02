/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./carousel.css";
const testimonials = [
  // Your testimonials data as before
  {
    name: "Anna Deynah",
    title: "UX Designer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos  hic tenetur quae quaerat ad velit ab hic tenetur.",
    stars: 5,
  },
  {
    name: "John Doe",
    title: "Web Developer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipi tni commodi.",
    stars: 4.5,
  },
  {
    name: "Maria Kate",
    title: "Photographer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    quote:
      "At vero eos et accusamus et iusto odio  praesentium voluptatum deleniti atque corrupti.",
    stars: 4,
  },
  // Add more testimonials as needed
];

const generateStars = (stars) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="star">
          &#9733;
        </span>
      ))}
      {halfStar && <span className="star">&#9734;</span>}
      {[...Array(5 - Math.ceil(stars))].map((_, i) => (
        <span key={i + fullStars} className="star">
          &#9734;
        </span>
      ))}
    </>
  );
};
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getTestimonialIndex = (index) => {
    return (currentIndex + index) % testimonials.length;
  };
  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={handlePrevClick}>
        &#10094;
      </button>
      <div className="carousel-content">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="testimonial" key={i}>
            <div className="testimonial-img">
              <img
                src={testimonials[getTestimonialIndex(i)].image}
                alt={testimonials[getTestimonialIndex(i)].name}
              />
            </div>
            <h5>{testimonials[getTestimonialIndex(i)].name}</h5>
            <h6>{testimonials[getTestimonialIndex(i)].title}</h6>
            <br />
            <p>{testimonials[getTestimonialIndex(i)].quote}</p>
            <div className="stars">
              {generateStars(testimonials[getTestimonialIndex(i)].stars)}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn right" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
