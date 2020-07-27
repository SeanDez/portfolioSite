import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import ComponentData from '../ComponentDataInterface';


export default function(previewData: ComponentData[]) {
  return (
    <div>
      {
        previewData.map(singlePreview => (
          <div>
            <Link to={`${useRouteMatch().url}${singlePreview.slug}`}>
              {singlePreview.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}