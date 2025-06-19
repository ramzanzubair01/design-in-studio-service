import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://www.linkedin.com/company/designinstudio' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href='https://www.facebook.com/profile.php?id=61576219402495' className="cs-center">
        <Icon icon="fa6-brands:facebook" />               
      </Link>
      <Link href='https://www.instagram.com/designinstudio.official/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />              
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:youtube" />
      </Link>
    </Div>
  )
}
