'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList"; // ✅ import dynamic service list
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";

export default function ServicesPage() {
  return (
    <>
      {/* Hero / Page heading */}
      <PageHeading 
        title='Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      
      {/* Services Section */}
      <Spacing lg='150' md='80' />
      <Div className='container'>
        <SectionHeading
          title='Services we can help you with' 
          subtitle='What Can We Do'
          variant='cs-style1 text-center'
        />
        <Spacing lg='70' md='45' />
        <ServiceList />
      </Div>

      {/* Pricing Section */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading
          title='Providing best <br/>pricing for client' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div>

      {/* Testimonial Section */}
      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>

      {/* CTA Section */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
