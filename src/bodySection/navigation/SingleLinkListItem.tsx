import React from 'react';
import { Link } from 'react-router-dom';
import ComponentData from '../ComponentDataInterface';


export default (props: { linkData: ComponentData }): JSX.Element => {
  return (
  <li>
    <Link to={props.linkData.slug}>{props.linkData.name}</Link>
  </li>
  )
}

