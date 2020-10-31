import React from 'react';
import styled from 'styled-components';
import LogoContainer from '../../shared/LogoContainer';
import FittedImage from '../../shared/FittedImage';
import ImageContainer from '../../shared/ImageContainer';

import visitorViewTop from '../../images/atr/visitor-view-top.png';
import repeatRules from '../../images/atr/repeatRules.png';

interface PropsShape {
  GithubLogo: string
}

export default function (props: PropsShape) {

  return (
    <section>
      <h2>Asana Task Repeater</h2>
      <h5>Typescript, React, Express, PostgreSQL</h5>

      <p>Automates repetitive task posting on the Asana platform.</p>

      <FlexRow maxWidth='300px'>
        <div>
          <h4>Front End</h4>
          <LogoContainer>
            <a 
              target="_blank" 
              href="https://github.com/SeanDez/portfolioSite"
              rel='noopener noreferrer' // for security
            >
              <FittedImage src={props.GithubLogo} alt='Github logo' />
            </a>
        </LogoContainer>
        </div>
        <div>
          <h4>Back End</h4>
          <LogoContainer>
            <a 
              target="_blank" 
              href="https://github.com/SeanDez/portfolioSite"
              rel='noopener noreferrer' // for security
            >
              <FittedImage src={props.GithubLogo} alt='Github logo' />
            </a>
        </LogoContainer>
        </div>
      </FlexRow>

      <h3>Technical Highlights</h3>

      <ul>
        <li>Password-less sign in using Asana.</li>
        <li>OAuth process, handled manually front to end</li>
        <li>Responsive design on front end without use of media queries</li>
        <li>Automated backend cron process to control user defined tasks</li>
      </ul>

      <h3>Screen Shots</h3>

      <FlexRow maxWidth='90vw'>
        <ImageContainer
          imageSrc={visitorViewTop}
          imageAlt="Visitor view of Asana Task Repeater"
          maxContainerWidth='none'
          margin='2vh 2vw'
        />
        <ImageContainer
          imageSrc={repeatRules}
          imageAlt="Repeat Rules table of Asana Task Repeater"
          maxContainerWidth='none'
          margin='2vh 2vw'
        />
      </FlexRow>

      <h3>Commentary</h3>

      <p>It doesn't make sense to hire a full stack developer without a full stack app, so here is the one I like to showcase.</p>

      <p>Like every app on my portfolio, this one has a real world use case. I loved using Asana as an intern and sought to use it for a side project I needed some help with. I just didn't like having to constantly manage it when my input wasn't needed.</p>
        
      <p>Phase one of this app was dedicated solely to handling the repetitive task of duplicating tasks that needed to be repeated on a regular schedule</p>

      <h3>Planned Additions</h3>

      <p>Eventually I will widen the scope of this project to include phone call tracking for phone numbers from Voip.ms. This will pivot the application from a singular task post automator, into a marketing campaign automation and analysis platform.</p>
        
      <p>I don't plan to charge for it, the main benefit other than its technical showcase value is still for my own side project (which also benefits from call tracking).</p>
    </section>
  )
}


interface FlexRowProps { maxWidth: string }

const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: ${({ maxWidth }: FlexRowProps) => maxWidth};
`;