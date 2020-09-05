import React from 'react';
import styled from 'styled-components';
import ComponentData  from '../ComponentDataInterface';
import { motion } from 'framer-motion';
import SingleLinkListItem from './SingleLinkListItem';


export default (props: { jsxData: Record<string, ComponentData> }) => {
  return (
    <NavList>
      { Object.values(props.jsxData).map((nameAndSlug: ComponentData, index: number) => (
        <SingleLinkListItem linkData={nameAndSlug} key={index} />
      )) }
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