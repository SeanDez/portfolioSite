import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './theme.scss';
import styled from 'styled-components';

import ComponentData from './bodySection/ComponentDataInterface';

import Nav from './bodySection/navigation/Nav';
import Cover from './bodySection/Cover';
import Portfolio from './bodySection/portfolio/Portfolio';
import About from './bodySection/About';
import Contact from './bodySection/Contact';

const bodyViews: Record<string, ComponentData> = {
  cover: { name: "Home", slug: '/', component: Cover },
  portfolio: { name: "Portfolio", slug: "portfolio", component: Portfolio },
  about: { name: "About", slug: 'about', component: About },
  contact: { name: "Contact", slug: 'contact', component: Contact }
}

function App() {
  return (
    <OutermostStyleContainer>
      <BrowserRouter>
        <Nav bodyViews={bodyViews} />

        <main>
          <Switch>
              <Route path='/about'><About /></Route>
              <Route path='/contact'><Contact /></Route>
              <Route path='/portfolio'><Portfolio /></Route>
              <Route path='/' exact><Cover /></Route>
          </Switch>
        </main>

        <footer></footer>
      </BrowserRouter>
    </OutermostStyleContainer>
  );
}

export default App;


const OutermostStyleContainer = styled.div`
  padding: 2vh 2vw;
  max-width: 1200px;
  margin: 0 auto;
`;