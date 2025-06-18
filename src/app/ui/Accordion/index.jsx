import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'What design services do you offer?',
    answer:
      'We offer a wide range of design services, including Graphic Design, App Design, Web Development, App Development, UX/UI Design, and Branding. Whether you need a brand identity, a user-friendly mobile app, or a stunning website, we have you covered.',
  },
  {
    question: 'Do you design websites?',
    answer:
      'Yes! We specialize in Web Development. Our team creates beautiful, responsive websites that are shape to meet your business needs. From simple landing pages to complex e-commerce platforms, we deliver high-quality web solutions.',
  },
  {
    question: 'Can you design mobile apps?',
    answer:
      'Absolutely! Our App Design and App Development services ensure that your mobile app stands out in the market. We focus on delivering seamless user experiences and engaging interfaces for both iOS and Android platforms.',
  },
  {
    question: 'What is UX/UI Design?',
    answer:
      'UX (User Experience) Design focuses on how a user interacts with a product or service, ensuring its intuitive and easy to use. UI (User Interface) Design focuses on the look and feel of the product, including visual elements like buttons, menus, and layout. Together, they create an enjoyable and efficient user experience.',
  },
  {
    question: 'How can branding help my business?',
    answer:
      'Branding is more than just a logo – it’s the visual identity and voice of your business. Our Branding services help establish a unique presence in the market, creating a connection with your audience and setting you apart from competitors. Strong branding leads to better recognition and trust.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'Project timelines vary depending on the complexity of the work. For a simple website or logo, it might take a few weeks, while more complex projects like custom apps or complete branding can take several months. We will provide you with an estimated timeline before starting your project.',
  },
  {
    question: 'What platforms do you work with?',
    answer:
      'We work with various platforms such as WordPress, React, Next.js, Flutter, and others. Whether you need a website or app for your business, we can work with the platform that suits your needs best.',
  },
  {
    question: ' Can I update my website after it’s completed?',
    answer:
      'Yes! We offer training on how to manage and update your website. Additionally, we provide ongoing support for any future updates or changes you may require. You’ll be able to update content, products, and much more without needing to contact us each time.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
