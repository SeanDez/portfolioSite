import React from 'react';
import { Link } from 'react-router-dom';

import BodyProps from './bodySection/BodyPropInterface';

export function titleFirstCharacter(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

export function makeLink(linkName: string): JSX.Element {
  return (
  <Link to={linkName}>{titleFirstCharacter(linkName)}</Link>
  )
}

export function makeAllLinks(jsxData: BodyProps) {
  const allKeys: Array<keyof BodyProps> = Object.keys(jsxData) as Array<keyof BodyProps>;

  const linkComponents: JSX.Element[] = allKeys.map((keyName: keyof BodyProps) => {
    const linkComponent: JSX.Element = makeLink(jsxData[keyName].name);
    return linkComponent;
  })

  return linkComponents;
}