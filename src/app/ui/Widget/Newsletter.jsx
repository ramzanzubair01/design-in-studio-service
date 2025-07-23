
import React from 'react'
import Div from '../Div'

export default function Newsletter({title, subtitle, placeholder}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form action="#" className="cs-newsletter_form">
          <input type="email" className="cs-newsletter_input" placeholder={placeholder} />
          <button 
            className="cs-newsletter_btn " 
            style={{
              background: 'var(--accent-gradient)',
              // Optional: Add these for better appearance
              border: 'none',
              color: '#161616', 
              position: 'absolute',  
              right: '0',           
            }}
          >
            <span>Send</span>
          </button>
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
      </Div>
    </>
  )
}
