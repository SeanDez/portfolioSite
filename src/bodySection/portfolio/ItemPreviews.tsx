import React from 'react';
import styled from 'styled-components';
import StyledLink from '../../shared/StyledLink';
import ComponentData from '../ComponentDataInterface';


export default function(props: { previewData: ComponentData[], portfolioRoute: string }) {
  return (
    <div>
      {
        props.previewData.map(singlePreview => (
          <StyledLink to={`${props.portfolioRoute}${singlePreview.slug}`}>
            <Container>
                <h4>{singlePreview.name}</h4>
              <MutedPreviewText>{singlePreview.previewText}</MutedPreviewText>
            </Container>
          </StyledLink>
        ))
      }
    </div>
  )
}

const Container = styled.div`
  border: 2px dotted rgba(90, 90, 90, .8);
  border-radius: 5%;
  padding: 2vh 2vw;

  &:hover {
    background-color: rgba(110, 110, 110, .1);
  }
`;

const MutedPreviewText = styled.p`
  font-size: .8rem;
`;