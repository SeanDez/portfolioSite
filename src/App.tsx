import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './theme.scss';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import ComponentData from './bodySection/ComponentDataInterface';

import Nav from './bodySection/navigation/Nav';
import Cover from './bodySection/Cover';
import Portfolio from './bodySection/portfolio/Portfolio';
import About from './bodySection/About';
import Contact from './bodySection/Contact';

import nightPlanetBoat from './images/nightPlanetBoat.jpg';
import repeaterGearVisual from './images/repeater-automation1.png';
import foreignCliffHouse from './images/foreign-cliffHouse.jpg';
import copperRotaryPhone from './images/calltrack-rotaryphone2.jpg';

const bodyViews: Record<string, ComponentData> = {
  cover: { name: "Home", slug: '/' },
  portfolio: { name: "Portfolio", slug: "/portfolio" },
  about: { name: "About", slug: '/about' },
  contact: { name: "Contact", slug: '/contact' }
}

const backgrounds = {
  '/': nightPlanetBoat,
  '/portfolio': nightPlanetBoat,
  '/about': nightPlanetBoat,
  '/contact': nightPlanetBoat,
  '/portfolio/call-track-voipms': copperRotaryPhone,
  '/portfolio/foreign-sentence-repeater': foreignCliffHouse,
  '/portfolio/this-site': nightPlanetBoat,
  '/portfolio/asana-task-repeater': repeaterGearVisual
}


const fadeSettings = {
  opaque: {
    opacity: 1,
    transition: { delay: 0.4 }
  },
  hidden: {
    opacity: 0,
    transition: { delay: 0.4 }

  }
}

function App(props: any) {
  const location = useLocation();

  const backgroundImage = backgrounds[location.pathname as keyof typeof backgrounds];

  return (
    <OuterContainer backgroundImage={backgroundImage}>
        <Nav bodyViews={bodyViews} />
        <main>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <Route path='/about'><About fadeSettings={fadeSettings} /></Route>
                <Route path='/contact'><Contact fadeSettings={fadeSettings} /></Route>
                <Route path='/portfolio'><Portfolio fadeSettings={fadeSettings} /></Route>
                <Route path='/' exact><Cover fadeSettings={fadeSettings} /></Route>
            </Switch>
          </AnimatePresence>
        </main>
        <footer></footer>
    </OuterContainer>
  );
}

export default App;

interface ExtraContainerProps {
  backgroundImage: string;
}

const OuterContainer = styled.div<ExtraContainerProps>`
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 100vw rgba(10, 10, 10, 0.8);
  position: relative;
  padding: 2vh 2vw;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;