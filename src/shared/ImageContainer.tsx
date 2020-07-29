import React from 'react';
import styled from 'styled-components';
import FittedImage from './FittedImage';

interface PropsShape {
  maxContainerWidth: string,
  imageSrc: string,
  imageAlt: string
}

export default (props: PropsShape) => (
  <Container maxContainerWidth={props.maxContainerWidth}>
    <FittedImage src={props.imageSrc} alt={props.imageAlt} />
  </Container>
)

const Container = styled.div<Pick<PropsShape, 'maxContainerWidth'>>`
  max-width: ${props => props.maxContainerWidth};
`
