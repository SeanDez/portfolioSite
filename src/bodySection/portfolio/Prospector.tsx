import React from 'react';

import LogoContainer from "../../shared/LogoContainer";
import FittedImage from "../../shared/FittedImage";
import ImageContainer from '../../shared/ImageContainer';

import ConfigScreenshot from "../../images/foreignSentenceRepeater/config_step_1.jpg";
import WordDefinitionScreenshoot from "../../images/foreignSentenceRepeater/build_step_1_configure_words.jpg";
import { FlexRow } from '../../shared/FlexRow';

interface PropsShape {
  GithubLogo: string
}

export default function (props: PropsShape) {
  return (
    <div>
      <section>
        <h2>Prospector</h2>
        <h5>React, Typescript, Express, APIs (Hubspot, AWS, Mailgun)</h5>
        <p>Turns a single textarea into a contact adder (Hubspot) and Emailer (AWS and Mailgun).</p>
      </section>

      <section>
        <FlexRow maxWidth='300px'>
          <div>
            <h4>Front End</h4>
            <LogoContainer>
              <a 
                target="_blank" 
                href="https://github.com/SeanDez/prospector_frontend"
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
                href="https://github.com/SeanDez/prospector_backend"
                rel='noopener noreferrer' // for security
              >
                <FittedImage src={props.GithubLogo} alt='Github logo' />
              </a>
          </LogoContainer>
          </div>
        </FlexRow>
      </section>

      <section className="teaser">
        <h3>Motivation</h3>

        <p>My Internship ended abruptly during Covid. Entering the worst job market in 100 years (at the time), I thought it would be wise to make my job hunt more efficient. Less time on mechanics, more time studying companies and their needs, which is what employers like to see.</p>

        <p>Prospector was designed to let me add contacts from interesting companies and efficiently email them, from a single textarea. </p> 
        
        <p>This was not my hardest project, it may have been my easiest. But I judge my tools on their immediate usefulness and Prospector is my sidearm.</p>
      </section>

      <section>
        <h3>How it works</h3>

        <ol>
          <li>Login is handled via Basic authenciation</li>
          <li>A dashboard with single textarea is used to type an interesting potential contact's information.</li>
          <li>The infomation is parsed by double space delimited, then turned into a Hubspot contact, and also emailed.</li>
        </ol>

        <ImageContainer
          maxContainerWidth="400px"
          imageSrc={ConfigScreenshot}
          imageAlt="The beginning configuration step"
          margin='2vh 2vw'
        />

        <ImageContainer
          maxContainerWidth="400px"
          imageSrc={WordDefinitionScreenshoot}
          imageAlt="The word/definition selection screen"
          margin='2vh 2vw'
        />
        
      </section>
 
    </div>
  )
}


