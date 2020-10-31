import React from 'react';
import styled from 'styled-components';
import FittedImage from './FittedImage';

interface PropsShape {
  maxContainerWidth: string,
  imageSrc: string,
  imageAlt: string,
  style?: object | undefined,
  margin: string
}

export default ({ style, margin, maxContainerWidth, imageSrc, imageAlt }: PropsShape) => (
  <div 
    style={{
      ...style,
      margin,
      maxWidth: maxContainerWidth,
    }}
  >
    <FittedImage src={imageSrc} alt={imageAlt} />
  </div>
)
