import React from 'react';

import LogoContainer from "../../shared/LogoContainer";
import FittedImage from "../../shared/FittedImage";

interface PropsShape {
  GithubLogo: string
}

export default (props: PropsShape) => (
  <div>

      <section>
        <h3>Front End</h3>
        <LogoContainer>
          <a 
            target="_blank" 
            href="https://github.com/SeanDez/callTrackVoipFrontEnd"
            rel='noopener noreferrer' // for security
          >
            <FittedImage src={props.GithubLogo} alt='Github logo' />
          </a>
        </LogoContainer>

        <h3>Back End</h3>
        <LogoContainer>
          <a 
            target="_blank" 
            href="https://github.com/SeanDez/callTrackVoipFrontEnd"
            rel='noopener noreferrer' // for security
          >
            <FittedImage src={props.GithubLogo} alt='Github logo' />
          </a>
        </LogoContainer>
      </section>

      <section>
        <div>
          <h2>Call Tracker for Voip.ms</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt odio dolorum mollitia exercitationem ad eligendi debitis, facilis ullam. Provident consequuntur labore aspernatur perspiciatis, iusto laborum velit perferendis nostrum eum sapiente.</p>
        </div>
      </section>
  </div>
)