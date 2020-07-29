import React from 'react';
import { Link } from 'react-router-dom';
import ComponentData from '../ComponentDataInterface';
import styled from 'styled-components';

export default (props: { linkData: ComponentData }): JSX.Element => {
  return (
  <li>
    <StyledLink to={props.linkData.slug}>{props.linkData.name}</StyledLink>
  </li>
  )
}


const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;