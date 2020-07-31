import React from 'react';
import StyledLink from '../../shared/StyledLink';
import ComponentData from '../ComponentDataInterface';


export default function(props: { previewData: ComponentData[], portfolioRoute: string }) {
  return (
    <div>
      {
        props.previewData.map(singlePreview => (
          <div>
            <StyledLink to={`${props.portfolioRoute}${singlePreview.slug}`}>
              {singlePreview.name}
            </StyledLink>
          </div>
        ))
      }
    </div>
  )
}