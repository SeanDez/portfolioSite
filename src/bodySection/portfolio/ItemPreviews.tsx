import React from 'react';
import { Link } from 'react-router-dom';
import ComponentData from '../ComponentDataInterface';


export default function(props: { previewData: ComponentData[], portfolioRoute: string }) {
  return (
    <div>
      {
        props.previewData.map(singlePreview => (
          <div>
            <Link to={`${props.portfolioRoute}${singlePreview.slug}`}>
              {singlePreview.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}