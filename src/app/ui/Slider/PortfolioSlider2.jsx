


'use client';
import React, { useEffect, useState } from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';

export default function PortfolioSlider2() {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetch('/data/portfolio.json') // make sure this path matches where you saved the file
      .then((res) => res.json())
      .then((data) => setPortfolioData(data));
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          // dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          // dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4">
      {portfolioData.map((item, index) => (
        <Div key={item.id || index}>
          <Portfolio
            title={item.title}
            subtitle="See Details"
            href={`/portfolio/${item.slug}`}
            src={item.images[0]}
            variant="cs-style1 cs-type2 cs-size3"
          />
        </Div>
      ))}
    </Slider>
  );
}
