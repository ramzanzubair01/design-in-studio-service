import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'IWe honestly didn’t expect the company profile to turn out this good. Everything from the design to the way our story was told felt just right. It captured who we are without overdoing anything. The whole process was smooth, and your team really listened to what we wanted. We’re proud to share this with our clients now. Great job',
    avatarName: 'Ahsan',
    avatarDesignation: 'CEO AT TWarehouse',
    ratings: '4',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'We’ve worked with a lot of people before, but this felt different. From the very first draft, we could tell you understood what MGT is about. The branding wasn’t just good it felt real, bold, and exactly what we needed. It gave our business a face we’re actually proud of now. Everything from the logo to the brand colors just clicks. Couldn’t have asked for better.',
    avatarName: 'Ayesha Malik',
    avatarDesignation: 'CEO AT MGT',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'Working with your team honestly felt so effortless. We didn’t have to explain too much you just got it. From the logo to the bottle design, every little detail felt personal and thoughtful. It actually felt like you cared about our brand as much as we do. You didn’t just give us a brand, you gave us confidence. Everything looks clean, modern, and truly reflects who we are. We still get compliments on the branding and that says a lot',
    avatarName: 'Uzair Siyal',
    avatarDesignation: 'CEO AT Bin riaz Builders',
    ratings: '4.5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'From the moment we started working together, everything just clicked. We wanted branding that felt fresh, authentic, and true to who we are and you delivered exactly that. The logo, the colors, the packaging every single detail was on point. We’ve had so many people walk in and ask who did our branding. Honestly, we couldn’t be happier. Thank you for making our vision real  and even better than we imagined.',
    avatarName: 'Robert Smith',
    avatarDesignation: 'Owner At The Coffee House',
    ratings: '3.5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

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
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
