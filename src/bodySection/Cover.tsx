import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PropsShape {
  fadeSettings: any
}

const textMotions = {
  offscreen: {
    x: 200,
    y: '100vh'
  },
  onscreen: {
    x: 0,
    y: 0,
    transition: { duration: 4, type: 'spring' }
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
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;

  & > * {
    line-height: 2rem;
    margin: 10px;
  }
`;