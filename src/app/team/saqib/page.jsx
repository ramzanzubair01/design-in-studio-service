'use client'
import Cta from "@/app/ui/Cta"
import Div from "@/app/ui/Div"
import PageHeading from "@/app/ui/PageHeading"
import Spacing from "@/app/ui/Spacing"
import SocialWidget from "@/app/ui/Widget/SocialWidget"
import imgUrl from '../../../../public/images/member_details_1.jpeg'
import Image from "next/image"

export default function Saqib() {
  return (
    <>
     
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
              <h2 className="cs-section_title">Saqib Raza</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Full Stack Developer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">Meet Mr. Saqib Raza He is the Developer at Design in Studio, responsible for building and maintaining the technical side of the projects. With a strong background in web development, Mr. Saqib specializes in creating responsive, fast, and user-friendly websites that match the creative vision of the design team.</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">He works closely with both designers and clients to ensure every project is functional, visually appealing, and delivered on time. His attention to detail and problem-solving skills help in turning complex ideas into smooth digital experiences. Whether it's a business website, portfolio, or e-commerce platform, Saqib makes sure everything runs perfectly behind the scenes.</p>
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
