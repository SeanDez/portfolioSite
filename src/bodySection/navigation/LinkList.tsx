import React from 'react';
import styled from 'styled-components';
import ComponentData  from '../ComponentDataInterface';
import { motion } from 'framer-motion';
import SingleLinkListItem from './SingleLinkListItem';
import StyledButton from '../../shared/StyledButton';

const resumeGoogleDoc = 'https://docs.google.com/document/d/1B04GszEveekuiB2JWZwvgZTWFpWx2J5xlsTFNHbkuFQ/edit?usp=sharing';

export default (props: { jsxData: Record<string, ComponentData> }) => {
  return (
    <NavList>
      { Object.values(props.jsxData).map((nameAndSlug: ComponentData, index: number) => (
        <SingleLinkListItem linkData={nameAndSlug} key={index} />
      )) }
      <a href="https://docs.google.com/document/d/1uqlRYk_m-bvDYyucfKAJ2kxvzGub-E0Q9i8BTwqxQ_Y/edit?usp=sharing" target="_blach">
        <StyledButton
          isActive={false}
          initial={{ scale: 1 }}
         whileHover={{
           textShadow: '0px 0px 2px rgb(255, 255, 255)',
           scale: 1.1
          }}
          whileTap={{ scale: 0.9 }}
        >
          Resume
        </StyledButton>
      </a>
    </NavList>
  )
}

const NavList = styled(motion.ul)`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  
  > * {
    margin: 3px 0;
  }
`
