import React from 'react';
import styled from 'styled-components';
import ComponentData  from '../ComponentDataInterface';
import { motion } from 'framer-motion';
import SingleLinkListItem from './SingleLinkListItem';
import StyledButton from '../../shared/StyledButton';


export default (props: { jsxData: Record<string, ComponentData> }) => {
  return (
    <NavList>
      { Object.values(props.jsxData).map((nameAndSlug: ComponentData, index: number) => (
        <SingleLinkListItem linkData={nameAndSlug} key={index} />
      )) }
      <a href={require('../../data/Resume-Sean-Dezoysa.docx')} target="_blach">
        <StyledButton
          isActive={false}
         whileHover={{ textShadow: '0px 0px 2px rgb(255, 255, 255)' }}
        >
          Resume (DOCX)
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