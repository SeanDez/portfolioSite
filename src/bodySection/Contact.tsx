import React from 'react';
import { motion } from 'framer-motion';

interface PropsShape {
  fadeSettings: any
}

const wufooFormStyle = { 
  width: '100%', 
  height: '700px', 
  maxWidth: "700px", 
  border: "none"
}

export default (props: PropsShape) => {

  return (
    <motion.section
      variants={props.fadeSettings}
      initial='hidden'
      exit='hidden'
      animate='opaque'
    >
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
    </motion.section>
  )
}