import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";



const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(()=>{
    axios
      .get('http://localhost:8082/EmergencyImages') // Make sure your API endpoint is correct and accessible
      .then(response => {
        console.log('Response data:', response.data); // For debugging
        if (response.data && Array.isArray(response.data.data)) {
          setImages(response.data.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(err => console.log(err));
  }, [])

  const settingsLG = {
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    // speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    // speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((person) => (
            <div className="w-full h-56 md:h-80 py-3" key={person._id}>
              <img
                src={person.image}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((person) => (
            <div className="w-full h-96 px-2 py-3" key={person._id}>
              <img
                src={person.image}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
