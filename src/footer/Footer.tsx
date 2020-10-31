import React from 'react';
import styled from 'styled-components';
import Attributions from './Attributions';

export default () => {

  return (
    <FooterContainer>
      <Attributions />
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  margin-top: 500px;
`;