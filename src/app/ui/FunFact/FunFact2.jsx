import React from 'react'
import Div from '../Div'

export default function FunFact2({data, variant, bgUrl}) {
  return (
    <Div className={variant?`cs-funfact_wrap_2 ${variant}`:'cs-funfact_wrap_2'}>
      {bgUrl && <div className="cs-funfact_shape" style={{backgroundImage:`url(${bgUrl})`}}></div>}
      <Div className="cs-funfacts">
        {data.map((item, index) => (
          <Div key={index}>
            <Div className="cs-funfact cs-style2">
              <Div className="r cs-primary_font cs-semi_bold cs-primary_color"><span className="odometer" /><span style={{ fontSize: '38px' }}>{item.factNumber}</span><span className="cs-plus" style={{ fontSize: '38px' }}>+</span></Div>
              <h3 className="cs-funfact_title" style={{ fontWeight: 500}}>{item.title}</h3>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  )
}
