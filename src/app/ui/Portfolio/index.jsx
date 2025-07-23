
import React from 'react';
import Link from 'next/link';
import Div from '../Div';

export default function Portfolio({ href = '#', src = '', title = 'Untitled', subtitle = '', variant = 'cs-style1 cs-type1' }) {
  return (
    <Link
      href={href}
      className={`cs-portfolio cs-bg ${variant}`}
    >
      <Div className="cs-portfolio_hover" />
      <Div
        className="cs-portfolio_bg cs-bg"
        style={{ backgroundImage: `url("${src}")` }}
      />
      <Div className="cs-portfolio_info">
        <Div className="cs-portfolio_info_bg cs-accent_bg" />
        <h2 className="cs-portfolio_title" style={{ color: '#1d1d1d' }}>{title}</h2>
        {/* <Div className="cs-portfolio_subtitle">{subtitle}</Div> */}
      </Div>
    </Link>
  );
}
