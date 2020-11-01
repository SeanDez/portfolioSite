import React from 'react';
import { useLocation } from 'react-router-dom';
import ComponentData from '../ComponentDataInterface';
import StyledLink from '../../shared/StyledLink';
import { motion } from 'framer-motion';
import StyledButton from '../../shared/StyledButton';

export default (props: { linkData: ComponentData }): JSX.Element => {
  const { pathname } = useLocation();

  return (
  <motion.li
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <StyledLink to={props.linkData.slug}>
      <StyledButton
        isActive={ pathname === props.linkData.slug }
        whileHover={{ textShadow: '0px 0px 2px rgb(255, 255, 255)' }}
      >{props.linkData.name}</StyledButton>
    </StyledLink>
  </motion.li>
  )
}