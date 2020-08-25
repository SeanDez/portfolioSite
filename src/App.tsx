import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './theme.scss';
import styled, { ThemeProvider } from 'styled-components';

import ComponentData from './bodySection/ComponentDataInterface';

import Nav from './bodySection/navigation/Nav';
import Cover from './bodySection/Cover';
import Portfolio from './bodySection/portfolio/Portfolio';
import About from './bodySection/About';
import Contact from './bodySection/Contact';

import nightPlanetBoat from './images/nightPlanetBoat.jpg';
import spaceGasClouds from './images/space gas clouds.jpg';
import repeaterGearVisual from './images/repeater-automation1.png';
import foreignCliffHouse from './images/foreign-cliffHouse.jpg';
import copperRotaryPhone from './images/calltrack-rotaryphone2.jpg';

const bodyViews: Record<string, ComponentData> = {
  cover: { name: "Home", slug: '/', component: Cover },
  portfolio: { name: "Portfolio", slug: "/portfolio", component: Portfolio },
  about: { name: "About", slug: '/about', component: About },
  contact: { name: "Contact", slug: '/contact', component: Contact }
}

const backgrounds = {
  '/': nightPlanetBoat,
  '/portfolio': spaceGasClouds,
  '/about': spaceGasClouds,
  '/contact': spaceGasClouds,
  '/portfolio/call-track-voipms': copperRotaryPhone,
  '/portfolio/foreign-sentence-repeater': foreignCliffHouse,
  '/portfolio/this-site': spaceGasClouds,
  '/portfolio/asana-task-repeater': repeaterGearVisual
}

function App(props: any) {
  // const [backgroundImage, setBackgroundImage] = useState(nightPlanetBoat);
  // const backgroundImage = backgrounds[props.location.pathName];
  const backgroundImage = nightPlanetBoat;

  // useEffect(() => {
  //   console.log('props.match :>> ', props.match);
  //   console.log('props.location :>> ', props.location);
  //   console.log('props.history', props.history)
  //   setBackgroundImage(backgrounds[props.location.pathName as keyof typeof backgrounds]);
  // }, [props.location.pathName]: [key: string]: string );

  return (
    <OuterContainer backgroundImage={backgroundImage}>
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
    </OuterContainer>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

interface ExtraContainerProps {
  backgroundImage: string;
}

const OuterContainer = styled.div<ExtraContainerProps>`
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 100vw rgba(10, 10, 10, 0.5);
  position: relative;
  padding: 2vh 2vw;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;