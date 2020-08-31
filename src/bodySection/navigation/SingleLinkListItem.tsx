import React from 'react';
import ComponentData from '../ComponentDataInterface';
import StyledLink from '../../shared/StyledLink';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default (props: { linkData: ComponentData }): JSX.Element => {
  return (
  <motion.li
    initial={{ scale: 1 }}
    whileHover={{ 
      scale: 1.1
    }}
  >
    <StyledLink to={props.linkData.slug}>
      <StyledButton
        whileHover={{
          textShadow: '0px 0px 2px rgb(255, 255, 255)'    
        }}
      >{props.linkData.name}</StyledButton>
    </StyledLink>
  </motion.li>
  )
}

const StyledButton = styled(motion.button)`
  background: none;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;

  &:hover {
    background: rgba(200, 200, 200, .02);

  }
`;