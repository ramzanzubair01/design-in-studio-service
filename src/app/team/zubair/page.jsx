'use client'
import Cta from "@/app/ui/Cta"
import Div from "@/app/ui/Div"
import PageHeading from "@/app/ui/PageHeading"
import Spacing from "@/app/ui/Spacing"
import SocialWidget from "@/app/ui/Widget/SocialWidget"
import imgUrl from '../../../../public/images/member_details_1.jpeg'
import Image from "next/image"

export default function Zubair() {
  return (
    <>
      <PageHeading
        title='Muhammad Zubair'
        bgSrc='/images/team_hero_bg.jpeg'
        pageLinkText='Muhammad Zubair'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={imgUrl} alt="Member" className="w-100" placeholder="blur" />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg='0' md='45'/>
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">Muhammad Zubair</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Co-Founder & Full Stack Developer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">Meet Mr. Muhammad Zubair He is the Co-Founder and Lead Full-Stack Developer at Design in Studio. With a deep understanding of both front-end and back-end development, he builds powerful, modern, and scalable web applications using the latest technologies</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">As a co-founder, he plays a key role in shaping the technical direction of the studio and ensuring each project is built with quality and performance in mind. From user-friendly interfaces to strong and secure backend systems, Mr. Zubair handles every layer of development with skill and passion. His goal is to create smooth, fast, and reliable digital solutions that meet client needs and industry standards.</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget/>
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
