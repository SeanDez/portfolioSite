import React from 'react';

import { makeAllLinksIntoList } from "./utilities";
import BodyProps from './bodySection/BodyPropInterface';

type navItemKeys = 'cover' | 'portfolio' | 'aboutContact';

interface PropsShape <keyNames extends string> {
  body: BodyProps
}


// ------------------- Main Component

export default (props: PropsShape<navItemKeys>) => {


  return (
    <nav>
      <p>placeholder</p>
      {makeAllLinksIntoList(props.body)}
    </nav>
  )
}





