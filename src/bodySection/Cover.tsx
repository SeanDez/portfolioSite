import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PropsShape {
  fadeSettings: any
}

const textMotions = {
  offscreen: {
    x: 200,
    y: '-110vh',
    scale: 0.2
  },
  onscreen: {
    x: 0,
    y: 0,
    scale: 1,
    transition: { delay: 1, duration: 2, type: 'tween', ease: 'backOut' }
  }
}

export default (props: PropsShape) => {

  return (
      <OuterContainer
        variants={props.fadeSettings}
        initial='hidden'
        exit='hidden'
        animate='opaque'
      >
        <TextContainer
          variants={textMotions}
          initial='offscreen'
          animate='onscreen'
          exit='offscreen'
        >
          <h1>Sean Dezoysa</h1>
          <h3>React Typescript Developer</h3>
          <h4>(Express & PostgreSQL on the back end)</h4>
        </TextContainer>
      </OuterContainer>
  )
}


const OuterContainer = styled(motion.div)`
  display: flex;
  height: 80vh;
  flex-flow: row wrap;
  align-content: flex-end;
  overflow: hidden;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;

  & > * {
    line-height: 2rem;
    margin: 10px;
  }
`;