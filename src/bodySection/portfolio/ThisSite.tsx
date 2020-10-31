import React from 'react';
import LogoContainer from "../../shared/LogoContainer";
import FittedImage from "../../shared/FittedImage";

interface PropsShape {
  GithubLogo: string
}

export default (props: PropsShape) => {

  return (
    <div>
      <h2>This Site</h2>
      <h5>React.js, Styled Components, Framer Motion</h5>
      <p>Built with React.js Typescript. CSS via Styled Components. Animations using Framer Motion.</p>

      <div>
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

      <h3>Design Highlights</h3>

      <ul>
        <li>Changing backgrounds based on state</li>
        <li>Mostly subtle animations to improve UX a little</li>
        <li>Font selection and color palette to suit a tech audience</li>
      </ul>
   </div>
  )
}