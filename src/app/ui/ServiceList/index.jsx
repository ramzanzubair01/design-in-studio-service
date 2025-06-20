import React, { useState } from 'react';
import Link from 'next/link';
import Div from '../Div';

const serviceData = [
  {
    title: 'Graphic Design',
    subtitle:
      'We create designs that don’t just look good they tell your story. Whether it’s a logo, a poster, or social media post, we make sure it speaks your brand’s vibe clearly and creatively.',
    imgUrl: '/images/service_7.jpeg',
    href: '/service/graphicdesigning'
  },
  {
    title: 'UI/UX Design',
    subtitle:
      'Good design isn’t just about looks it’s about how things feel and work. We design clean, user-friendly interfaces that make your website or app easy and enjoyable to use.',
    imgUrl: '/images/service_8.jpeg',
    href: '/service/uiux',
  },
  {
    title: 'Web Development',
    subtitle:
      'Need a website that loads fast and works perfectly on all devices? We build custom websites that are not just good-looking but also reliable, smooth, and easy to manage',
    imgUrl: '/images/service_9.jpeg',
    href: '/service/webdevelopement',
  },
  {
    title: 'Ai Solutions',
    subtitle:
      'From idea to launch  we help you build mobile apps that people love to use. Whether it’s Android or iOS, we focus on creating apps that are smooth, simple, and full of useful features.',
    imgUrl: '/images/service_10.jpeg',
    href: '/service/aichatbots',
  },
 
];

export default function ServiceList({ variant }) {
  const [active, setActive] = useState(0);
  const handelActive = index => {
    setActive(index);
  };
  return (
    <Div className={`cs-iconbox_3_list ${variant ? variant : ''}`}>
      {serviceData.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? 'active' : ''}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link href={item.href} className="cs-iconbox cs-style3">
            <>
              <Div className="cs-image_layer cs-style1 cs-size_md">
                <Div className="cs-image_layer_in">
                  <img
                    src={item.imgUrl}
                    alt="Thumb"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              {/* <span className="cs-iconbox_icon cs-center hover"
              >

                <svg
                  width={30}
                  height={29}
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                    fill="currentColor"
                  />
                </svg>

                
              </span> */}

<span className="cs-iconbox_icon cs-center hover"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px', // Adjust as needed
        borderRadius: '50%', // For circular background
        transition: 'all 0.3s ease'
      }}>
  <svg
    width={30}
    height={29}
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: 'block' // Ensures proper alignment
    }}
  >
    <path
      d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
      fill="currentColor"
    />
  </svg>
</span>
              <Div className="cs-iconbox_in">
              <h2 className="cs-iconbox_title" style={{ fontWeight: 500 }}>{item.title}</h2>                <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}
