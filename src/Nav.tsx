import React from 'react';
import styled from 'styled-components';

import { makeAllLinksIntoListItems } from "./utilities";
import BodyProps from './bodySection/BodyPropInterface';

type navItemKeys = 'cover' | 'portfolio' | 'aboutContact';

interface PropsShape <keyNames extends string> {
  body: BodyProps
}


// ------------------- Main Component

export default (props: PropsShape<navItemKeys>) => {


  return (
    <nav>
      <p>placeholder</p>
      <NavList>
        {makeAllLinksIntoListItems(props.body)}
      </NavList>
    </nav>
  )
}


const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-around;
`
