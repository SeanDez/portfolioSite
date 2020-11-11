import React from 'react';
import LinkList from './LinkList';
import ComponentData from '../ComponentDataInterface';
import styled from 'styled-components';

interface PropsShape {
  bodyViews: Record<string, ComponentData>
}


// ------------------- Main Component

export default (props: PropsShape) => {
  return (
    <nav>
      <NavContainer>
        <LinkList jsxData={props.bodyViews} />
      </NavContainer>
    </nav>
  )
}

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 90%;
`;

const Spacer = styled.div`
  /* height: 80px; */
`;