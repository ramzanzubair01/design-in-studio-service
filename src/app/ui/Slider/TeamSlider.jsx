import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
const teamData = [
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Adnan Akber',
    memberDesignation: 'Founder & CEO',
    href: '/team/adnan',

    
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Muhammad Zubair',
    memberDesignation: 'Co -Founder & CTO',
    href: '/team/zubair',

    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'khuram Malik',
    memberDesignation: 'Marketing Manager',
    href: '/team/khuram',

    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Saqib Raza',
    memberDesignation: 'Senior Developer',
    href: '/team/saqib',

    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  
];

export default function TeamSlider() {
  /** Team Member Data **/

  /** Slider Settings **/
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
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Link href={item.href} >
        <Div key={index}>
          
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />

        </Div>
          </Link>
      ))}
    </Slider>
  );
}
