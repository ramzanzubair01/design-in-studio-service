'use client';
import { useEffect, useState } from 'react';
import Div from '../Div';
import Link from 'next/link';
import DropDown from './DropDown';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  {/* <img src="/images/final_logo.svg" alt="Logo" /> */}
                  <div style={{
    position: 'relative',
    width: '120px',
    height: 'auto',
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
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                      
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </Link>
                     
                    </li>
                    <li className="">
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </Link>
                      
                    </li>
                   
                    <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Pages
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                        
                          
                          <li>
                            <Link
                              href="/case-study/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/images/final_logo.svg" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Stay connected with us for the latest trends, tips, and exclusive design inspirations delivered straight to your inbox."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
