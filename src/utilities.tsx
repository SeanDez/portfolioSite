import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BodyProps, { ComponentData } from './bodySection/BodyPropInterface';

export function titleFirstCharacter(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

export function makeLink(linkObject: ComponentData): JSX.Element {
  return (
  <li>
    <Link to={linkObject.slug}>{linkObject.name}</Link>
  </li>
  )
}

export function makeAllLinksIntoList <genericKeyName extends string> (jsxData: Record<genericKeyName, ComponentData>) {
  const allKeys: Array<string> = Object.keys(jsxData);

  const linkComponents: JSX.Element[] = allKeys.map((keyName: string) => {
    const linkComponent: JSX.Element = makeLink(jsxData[keyName as genericKeyName]);
    return linkComponent;
  })

  return (
    <ul className="navigationList">
      {linkComponents}
    </ul>
  );
}