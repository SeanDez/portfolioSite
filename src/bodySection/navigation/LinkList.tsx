import React from 'react';
import styled from 'styled-components';
import ComponentData  from '../ComponentDataInterface';

import SingleLinkListItem from './SingleLinkListItem';

export default (props: { jsxData: Record<string, ComponentData> }) => {
  return (
    <section>
      <NavList>
        { Object.values(props.jsxData).map((nameAndSlug: ComponentData, index: number) => (
          <SingleLinkListItem linkData={nameAndSlug} key={index} />
        )) }
      </NavList>
    </section>
  )
} 

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-around;
`