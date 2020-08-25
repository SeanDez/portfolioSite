import React from 'react';
import styled from 'styled-components';
import FittedImage from './FittedImage';

interface PropsShape {
  maxContainerWidth: string,
  imageSrc: string,
  imageAlt: string,
  style?: any
}

export default (props: PropsShape) => (
  <Container 
    maxContainerWidth={props.maxContainerWidth} 
    style={{
      ...props.style,
      margin: '0 auto'
    }}
  >
    <FittedImage src={props.imageSrc} alt={props.imageAlt} />
  </Container>
)

const Container = styled.div<Pick<PropsShape, 'maxContainerWidth'>>`
  max-width: ${props => props.maxContainerWidth};
`
