import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './theme.scss';

import Nav from './Nav';
import Cover from './bodySection/Cover';
import Portfolio from './bodySection/Portfolio';
import AboutAndContact from './bodySection/AboutAndContact';

const bodyViews = {
  cover: { name: "Home", slug: '/', element: <Cover /> },
  portfolio: { name: "Portfolio", slug: "portfolio", element: <Portfolio /> },
  aboutContact: { name: "About / Contact", slug: 'aboutContact', element: <AboutAndContact /> }
}

function App() {
  const [bodyView, setBodyView] = useState(bodyViews.portfolio.element);

  return (
    <BrowserRouter>
      <Nav body={bodyViews} />

      {bodyView}

      <AboutAndContact />

      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
