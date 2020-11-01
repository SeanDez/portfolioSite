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
      <Spacer></Spacer>
    </nav>
  )
}

const NavContainer = styled.div`
  /* position: fixed;
  width: 90vw;
  border: 2px dashed red; */
`;

const Spacer = styled.div`
  /* height: 80px; */
`;