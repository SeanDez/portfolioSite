import React from 'react';

interface PropsShape {}

const wufooFormStyle = { 
  width: '100%', 
  height: '700px', 
  maxWidth: "700px", 
  border: "none"
}

export default (props: PropsShape) => {

  return (
    <section>
      <iframe
        height="700" 
        title="Contact Form"
        // allowtransparency="true" 
        // frameborder="0" 
        scrolling="yes" 
        style={wufooFormStyle} 
        src="https://mrseand.wufoo.com/embed/z1xzigp70gac5xc/"> 
        <a href="https://mrseand.wufoo.com/forms/z1xzigp70gac5xc/">
          Contact Sean
        </a> 
      </iframe>
    </section>
  )
}