import React from 'react';

import styled from 'styled-components';

interface PropsShape {}

export default (props: PropsShape) => {

  return (
      <OuterContainer>
        <TextContainer>
          <h1>Sean Dezoysa</h1>
          <h3>React Typescript Developer</h3>
          <h4>(Plus Express, PostgreSQL, and a bit of serverless AWS too)</h4>
        </TextContainer>
      </OuterContainer>
  )
}


const OuterContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-flow: row wrap;
  align-content: flex-end;
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;