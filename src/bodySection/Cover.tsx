import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PropsShape {}

const textMotions = {
  offscreen: {
    x: 200,
    y: '-100vw'
  },
  onscreen: {
    x: 0,
    y: 0,
    transition: { duration: 2, type: 'spring' }
  }
}

export default (props: PropsShape) => {

  return (
      <OuterContainer>
        <TextContainer
          variants={textMotions}
          initial='offscreen'
          animate='onscreen'
        >
          <h1>Sean Dezoysa</h1>
          <h3>React Typescript Developer</h3>
          <h4>(Plus Express, PostgreSQL, and a bit of serverless AWS too)</h4>
        </TextContainer>
      </OuterContainer>
  )
}


const OuterContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-flow: row wrap;
  align-content: flex-end;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
`;