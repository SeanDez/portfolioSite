import React from 'react';
import StyledLink from '../shared/StyledLink';
import StyledButton from '../shared/StyledButton';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PropsShape {
  fadeSettings: any
  showContactModal: boolean
}

const wufooFormStyle = { 
  width: '100%', 
  height: '700px', 
  maxWidth: "700px", 
  border: "none"
}

const backgroundAnimations = {
  special: { opacity: 1 },
  normal: { opacity: 0 }
}

const modalAnimations = {
  offscreen: { opacity: 0, x: '-100vw' },
  onscreen: { opacity: 1, x: '0', transition: { duration: 2, type: 'tween' } }
}

export default (props: PropsShape) => {

  return (
    <>
      { props.showContactModal === true && (
        <DimBackground
          variants={backgroundAnimations}
          initial="normal"
          animate="special"
        >

        </DimBackground>
      )}
      <ModalBox
        variants={modalAnimations}
        initial='offscreen'
        exit='offscreen'
        animate='onscreen'
      >
        <StyledLink 
          to='/'
          style={{ alignSelf: 'flex-end' }}
        >
          <StyledButton>X [CLOSE]</StyledButton>
        </StyledLink>
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
      </ModalBox>
    </>
  )
}

const ModalBox = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  border: 2px solid rgba(255, 255, 255, 0.4);
  max-width: 600px;
  padding: 2vh 2vw;
  margin: 0 auto;
`;

const DimBackground = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(100, 39, 219, .3);
  z-index: 0;
`;