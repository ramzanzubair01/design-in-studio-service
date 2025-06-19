'use client'
import Accordion from "@/app/ui/Accordion";
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import IconBox from "@/app/ui/IconBox";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import serviceImage from '../../../../public/images/service_img_1.jpeg'

export default function AiChatBots() {
  return (
    <>
      <PageHeading 
        title='Ai Chat Bots'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Ai Chat Bots'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Design working process' 
          subtitle='Ai Chat Bots' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Natural, Human-Like Conversations'
              subtitle='We design chatbots that don’t just reply they understand. Built on top of advanced NLP models, our bots handle real conversations with context awareness, intent recognition, and dynamic responses that feel human  not robotic.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Built to Fit Your Ecosystem

'
              subtitle='Whether it’s a custom website, mobile app, CRM, or platforms like WhatsApp and Messenger our chatbots integrate seamlessly into your existing workflow. No disruption, just smarter interactions where your users already are.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='24/7 Service Without Extra Overhead'
              subtitle='Think of your chatbot as your most reliable employee — one that never sleeps, takes no breaks, and handles thousands of conversations simultaneously. From lead generation to support, your business stays responsive even when your team is offline.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={serviceImage} alt="Service" className='cs-radius_15 w-100' placeholder="blur" />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most AiChatBot related services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/contact' btnText='Custom Chatbot Design & Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='Website & Mobile Chatbot Integration' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='WhatsApp & Messenger Bot Setup' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='AI & NLP Implementation' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='E-commerce Chatbots' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='Appointment & Booking Bots
' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/contact' btnText='Multilingual Chatbots
' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='Chatbot Analytics & Reporting' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='Chatbot Maintenance & Training' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/contact' btnText='Other Ai services' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
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
