import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const images = [
    "src/assets/slider1.jpg",
    "src/assets/slide2.jpg",
    "src/assets/slide3.jpg",
    "src/assets/slide4.jpg",
    "src/assets/slide5.jpg",
    "src/assets/slide7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <button className="nav-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        <img src={images[currentIndex]} alt="slider" />
      </div>
      <button className="nav-button next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="indicator-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-line ${currentIndex === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;