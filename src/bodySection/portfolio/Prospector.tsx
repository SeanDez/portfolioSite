import React from 'react';

import LogoContainer from "../../shared/LogoContainer";
import FittedImage from "../../shared/FittedImage";
import ImageContainer from '../../shared/ImageContainer';

import ConfigScreenshot from "../../images/foreignSentenceRepeater/config_step_1.jpg";
import WordDefinitionScreenshoot from "../../images/foreignSentenceRepeater/build_step_1_configure_words.jpg";

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
        <LogoContainer>
          <a 
            target="_blank" 
            href="https://github.com/SeanDez/foreignSentenceRepeater"
            rel='noopener noreferrer' // for security
          >
            <FittedImage src={props.GithubLogo} alt='Github logo' />
          </a>
        </LogoContainer>
      </section>

      <section className="teaser">
        <h3>Project Rationale</h3>

        <p>My Internship ended abruptly during Covid. To bolster my efforts I wrote this app to help me streamline outreach to people at interesting small companies that I wast interested in applying to.</p>
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
        />

        <ImageContainer
          maxContainerWidth="400px"
          imageSrc={WordDefinitionScreenshoot}
          imageAlt="The word/definition selection screen"
        />
        
      </section>
 
    </div>
  )
}


