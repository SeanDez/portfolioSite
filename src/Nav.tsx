import React from 'react';

import { makeAllLinks } from "./utilities";
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
      {makeAllLinks(props.body)}
    </nav>
  )
}





