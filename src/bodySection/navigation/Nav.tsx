import React from 'react';
import LinkList from './LinkList';
import ComponentData from '../ComponentDataInterface';

interface PropsShape {
  bodyViews: Record<string, ComponentData>
}


// ------------------- Main Component

export default (props: PropsShape) => {

  return (
    <nav>
      <div>
        <LinkList jsxData={props.bodyViews} />
      </div>
    </nav>
  )
}



