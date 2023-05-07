import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCard = ({ coverImage, title, description, startDate, endDate }) => {
    const startDateTime = new Date(startDate);
    const endDateTime = new Date(endDate);
  
    const startDateString = startDateTime.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const startTimeString = startDateTime.toLocaleTimeString([], { timeStyle: 'short' });
    const endDateString = endDateTime.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const endTimeString = endDateTime.toLocaleTimeString([], { timeStyle: 'short' });
  
    return (
      <div className="SliderCard bg-white rounded-lg shadow-md overflow-hidden">
        <img src={coverImage} alt={title} className="h-40 object-cover w-full" />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <div className="flex justify-between text-gray-500 text-sm">
            <div>
              <p className="font-medium">Start Date</p>
              <p>{startDateString}</p>
            </div>
            <div>
              <p className="font-medium">End Date</p>
              <p>{endDateString}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

const SliderWrapper = ({ children }) => (
  <div className="px-4 sm:px-6 md:px-10 mx-auto max-w-7xl">{children}</div>
);

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards at a time
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '80px',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerPadding: '20px',
        },
      },
    ],
    autoplay: true, // Autoplay scrolling
    autoplaySpeed: 3000, // Scroll every 3 seconds
  };

  const [slidesData, setSlidesData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/events')
      .then(response => response.json())
      .then(data => setSlidesData(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="p-4">
            <SliderCard {...slide} />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default SliderComponent;
