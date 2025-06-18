import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];

const serviceMenu = [
  {
    title: 'Graphic Design',
    
    href: '/service/graphicdesigning'
  },
  {
    title: 'UI/UX Design',
    
    href: '/service/uiux',
  },
  {
    title: 'Web Development',
   
    href: '/service/webdevelopement',
  },
  {
    title: 'App Development',
    
    href: '/service/appdevelopment',
  },
  
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                {/* <TextWidget
                  logoSrc="/images/final_logo.svg"
                  logoAlt="Logo"
                  text="Welcome to design in studio that transforms your ideas into eye-catching, purposeful designs. Whether it’s branding, websites, or digital products, we create visuals that people remember and businesses love."
                /> */}
                <div className="cs-footer_item" style={{ position: 'relative' }}>
  <div style={{
    position: 'relative',
    width: '120px',
    height: 'auto',
    marginBottom: '20px'
  }}>
    <img 
      src="/images/final_logo.svg" 
      alt="Logo" 
      style={{
        width: '100%',
        height: 'auto',
        display: 'block'
      }}
    />
  </div>
  <p>Welcome to design in studio that transforms your ideas into eye-catching, purposeful designs. Whether it’s branding, websites, or digital products, we create visuals that people remember and businesses love.</p>
</div>
               
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Stay connected with us for the latest trends, tips, and exclusive design inspirations delivered straight to your inbox."
                  placeholder="example@gmail.com"
                />
              </Div>
              <SocialWidget />

            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} designinstudio.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
