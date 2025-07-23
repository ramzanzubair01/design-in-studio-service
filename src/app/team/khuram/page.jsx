'use client'
import Cta from "@/app/ui/Cta"
import Div from "@/app/ui/Div"
import PageHeading from "@/app/ui/PageHeading"
import Spacing from "@/app/ui/Spacing"
import SocialWidget from "@/app/ui/Widget/SocialWidget"
import imgUrl from '../../../../public/images/member_details_1.jpeg'
import Image from "next/image"

export default function Khuram() {
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
              <h2 className="cs-section_title">Khurram Malik</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Managing Director</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">Meet Mr. Khurram Malik He is the Managing Director of Design in Studio and brings over 6 years of experience in the creative and corporate industry. At the studio, he oversees day-to-day operations, ensures smooth project delivery, and works closely with the team to maintain high-quality standards. His leadership and strategic thinking have helped the studio grow and succeed in a competitive market.</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">In addition to his role at the studio, Mr. Khurram Malik also works as a Relationship Manager at Meezan Bank, where he has consistently delivered top performance. His strong communication skills and client-focused approach have earned him recognition and trust among clients and colleagues alike. With his background in both design and banking, he brings a unique mix of creativity and professionalism to every project.</p>
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
