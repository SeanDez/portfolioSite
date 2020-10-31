import React from 'react';
import styled from 'styled-components';

const aTags = [
  <a href="https://www.freepik.com/photos/school">School photo created by freepik</a>,
  <a href="https://www.freepik.com/photos/tree">Tree photo created by wirestock</a>,
  <a href="https://www.freepik.com/photos/background">Background photo created by freepik</a>,
  <a href="https://www.freepik.com/photos/tree">Tree photo created by wirestock</a>,
  <a href="https://www.freepik.com/photos/tree">Tree photo created by sergeycauselove</a>,
  <a href="https://www.freepik.com/photos/tree">Tree photo created by tawatchai07</a>,
  <a href="https://www.freepik.com/psd/mockup">Mockup psd created by rawpixel.com</a>,
];

export default () => {

  return (
    <div>

      <AttributionContainer>
        { aTags.map((aTag: JSX.Element)  => aTag) }
      </AttributionContainer>
    </div>
  )
}

const AttributionContainer = styled.div`
  background-color: dark-gray;
  justify-content: space-around;
  display: flex;
  flex-flow: row wrap;
  
  & > * {
    max-width: 100px;
    text-decoration: none;
    color: lightgray;
    font-size: 0.8rem;
  }
`;