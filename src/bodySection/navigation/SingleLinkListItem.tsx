import React from 'react';
import ComponentData from '../ComponentDataInterface';
import StyledLink from '../../shared/StyledLink';


export default (props: { linkData: ComponentData }): JSX.Element => {
  return (
  <li>
    <StyledLink to={props.linkData.slug}>{props.linkData.name}</StyledLink>
  </li>
  )
}
