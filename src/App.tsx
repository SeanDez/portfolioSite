import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './theme.scss';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import ComponentData from './bodySection/ComponentDataInterface';
import Footer from './footer/Footer';

import Nav from './bodySection/navigation/Nav';
import Cover from './bodySection/Cover';
import Portfolio from './bodySection/portfolio/Portfolio';
import About from './bodySection/About';
import Contact from './bodySection/Contact';

import nightPlanetBoat from './images/nightPlanetBoat.jpg';
import templeKyoto from './images/temple-kyoto-japan.jpg';
import autumnGarden from './images/autumn-garden.jpg';

const bodyViews: Record<string, ComponentData> = {
  cover: { name: "Home", slug: '/' },
  portfolio: { name: "Portfolio", slug: "/portfolio" },
  about: { name: "About", slug: '/about' },
  contact: { name: "Contact", slug: '/contact' },
}

const backgrounds = {
  '/': nightPlanetBoat,
  '/portfolio': nightPlanetBoat,
  '/about': autumnGarden,
  '/contact': nightPlanetBoat,
  '/portfolio/prospector': nightPlanetBoat,
  '/portfolio/foreign-sentence-repeater': templeKyoto,
  '/portfolio/this-site': nightPlanetBoat,
  '/portfolio/asana-task-repeater': nightPlanetBoat,
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
  const [showContactModal, setShowContactModal] = useState(false);

  // switch modal state defending on location path
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/contact') {
      setShowContactModal(true);
    } else {
      setShowContactModal(false);
    }
  }, [location.pathname])

  const backgroundImage = backgrounds[location.pathname as keyof typeof backgrounds];

  return (
    <OuterContainer backgroundImage={backgroundImage}>
        <Nav bodyViews={bodyViews} />
        <main>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <Route path='/about'><About fadeSettings={fadeSettings} /></Route>
                <Route path='/contact'>
                  <Contact 
                    fadeSettings={fadeSettings}
                    showContactModal={showContactModal}
                  />
                </Route>
                <Route path='/portfolio'><Portfolio fadeSettings={fadeSettings} /></Route>
                <Route path='/' exact><Cover fadeSettings={fadeSettings} /></Route>
            </Switch>
          </AnimatePresence>
        </main>
        <footer>
          <Footer />
        </footer>
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
  box-shadow: inset 2000px 2000px 0 0 rgba(0, 0, 0, 0.8);
  position: relative;
  padding: 2vh 2vw;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;