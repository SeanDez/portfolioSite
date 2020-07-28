import React from 'react';

export function createComponentNameFromString(nameString: string): string {
  const noOddCharacters = nameString.replace(/[^a-zA-Z\s]/g, "");

  const words: string[] = noOddCharacters.split(" ");
  
  const capitalizedUnspacedWords = words.map(word => word[0].toUpperCase() + word.slice(1)).join("");

  return capitalizedUnspacedWords;
}

export function addPropsAndChildrenToJsxComponent <GenericProps extends object>(component: React.FunctionComponent | React.ComponentClass, props?: GenericProps, children?: JSX.Element) {
  return React.createElement(component, props || undefined, children || undefined);
}