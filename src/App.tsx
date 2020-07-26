import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './theme.scss';
import styled from 'styled-components';

import Nav from './Nav';
import Cover from './bodySection/Cover';
import Portfolio from './bodySection/Portfolio';
import About from './bodySection/About';
import Contact from './bodySection/Contact';

const bodyViews = {
  cover: { name: "Home", slug: '/', element: <Cover /> },
  portfolio: { name: "Portfolio", slug: "portfolio", element: <Portfolio /> },
  about: { name: "About", slug: 'about', element: <About /> },
  contact: { name: "Contact", slug: 'contact', element: <Contact /> }
}

function App() {
  return (
    <OutermostStyleContainer>
      <BrowserRouter>
        <Nav body={bodyViews} />

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