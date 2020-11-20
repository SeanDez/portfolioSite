import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import StyledLink from '../../shared/StyledLink';
import ComponentData from '../ComponentDataInterface';

export default function(props: { previewData: ComponentData[], portfolioRoute: string }) {
  return (
    <OuterList>
      {
        props.previewData.map((singlePreview, index) => (
          <motion.li>
            <StyledLink to={`${props.portfolioRoute}${singlePreview.slug}`} key={index}>
              <Container>
                  <h4>{singlePreview.name}</h4>
                <MutedPreviewText>{singlePreview.previewText}</MutedPreviewText>
              </Container>
            </StyledLink>
          </motion.li>
        ))
      }
    </OuterList>
  )
}

const OuterList = styled(motion.ul)`
  list-style-type: none;
  padding-left: 0;
`;

const Container = styled.div`
  border: 2px dotted rgba(90, 90, 90, .4);
  border-radius: 1%;
  padding: 2vh 2vw;

  &:hover {
    background-color: rgba(110, 110, 110, .1);
  }
`;

const MutedPreviewText = styled.p`
  font-size: .8rem;
`;