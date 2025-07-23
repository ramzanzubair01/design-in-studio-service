'use client'
import { useState } from 'react';
import { useEffect } from 'react';
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact2 from "@/app/ui/FunFact/FunFact2";
import Hero5 from "@/app/ui/Hero/Hero5";
import MovingText from "@/app/ui/MovingText";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList";
import PortfolioSlider2 from "@/app/ui/Slider/PortfolioSlider2";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import VideoSection from "@/app/ui/VideoSection";
import Head from 'next/head';
import PortfolioGrid from '@/app/ui/PortfolioGrid';
import { useRouter } from 'next/navigation';



const heroSocialLinks = [
  {
    name: 'Facebook',
    links: 'https://www.facebook.com/profile.php?id=61576219402495',
  },
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/designinstudio.official/',
  },
];
const funfaceData = [
  {
    title: 'Digital products',
    factNumber: '5',
  },
  {
    title: 'Global happy clients',
    factNumber: '40',
  },
  {
    title: 'Project completed',
    factNumber: '317',
  },
  {
    title: 'Team members',
    factNumber: '20',
  },
];

export default function MarketingAgencyHome() {
const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/portfolio.json');
        const data = await res.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center py-20">Loading portfolio...</div>;
  }
 
  return (
    <>
    <Head>
  <title>Design In Studio | Creative Agency </title>
  <meta name="description" content="Design In Studio offers graphic design, web development,UI/UX, Ai Solutions, SEO, and digital marketing services." />
  <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

</Head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Design In Studio",
      "url": "https://www.designinstudio.com",  
      "logo": "https://designinstudio.com/images/final_logo.svg",  // ✅ logo ka link
      "description": "Creative design & web development agency in DHA Lahore. We offer UI/UX, branding, Web Development, Ai Solutions, SEO, and digital marketing.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6 CCA, DHA Phase 5",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54910",
        "addressCountry": "PK"
      },
      "telephone": " +92 313 6741331",
      "email": "designinstudio60@gmail.com",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61576219402495",
        "https://www.instagram.com/designinstudio.official/"
      ]
    })
  }}
/>

      {/* Start Hero Section */}
      <Hero5
  title={`Design Your <br />Vision <span style="background: linear-gradient(90deg, #1bfff3, #aeffae); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; display: inline;">Shape Your</span> Future`}
  subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
  btnLink="contact"
  btnText="Let's talk"
  socialLinksHeading="Follow Us"
  heroSocialLinks={heroSocialLinks}
/>
      {/* End Hero Section */}

      {/* Start Video Block Section */}
      <Div className="cs-video_block_1_wrap ">
        <Div className="container">
        <VideoSection />
        </Div>
      </Div>
      {/* End Video Block Section */}

      {/* Start Services Section */}
      {/* <Spacing lg="145" md="80" /> */}
      <Div className="container">
      <SectionHeading
  title={`Our core <span style="background: linear-gradient(90deg, #1bfff3, #aeffae); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; display: inline;">services</span>`}
  subtitle="Services"
  variant="cs-style1 text-center"
/>
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Services Section */}

      {/* Start PortfolioSlider Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
      <h2 className="cs-font_50 cs-m0 cs-line_height_4">
  Explore the Work We've Done for{' '}
  <span style={{
    background: 'linear-gradient(90deg, #1bfff3, #aeffae)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline'
  }}>
    Our Clients
  </span>
</h2>
      </Div>
      <Spacing lg="90" md="70" />
      <div style={{ display: 'block' }} className="mobile-slider">
  <PortfolioSlider2 />
</div>

{/* Desktop/Laptop (Grid - Bari screens pe show) */}
<div style={{ display: 'none' }} className="desktop-grid">
  <PortfolioGrid 
    portfolioData={portfolioData}
    title="Some recent work"
    subtitle=""
    showFilter={true}
    initialItems={6}
    loadMoreStep={3}
  />
</div>

<style jsx>{`
  /* Mobile & Tablet (768px tak) */
  @media (max-width: 1023px) {
    .desktop-grid {
      display: none !important;
    }
    .mobile-slider {
      display: block !important;
    }
  }
  
  /* Desktop/Laptop (1024px se bada) */
  @media (min-width: 1024px) {
    .mobile-slider {
      display: none !important;
    }
    .desktop-grid {
      display: block !important;
    }
  }
`}</style>
 {/* End PortfolioSlider Section */}

      {/* Start FunFact Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-no_shadow"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End FunFact Section */}

      {/* Start Pricing Section */}
      <Spacing lg="145" md="80" />
     
      {/* End Pricing Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      
     

      

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="<span style={}>Let’s disscuse make <br />something <i>cool</i> together</spnan>"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
