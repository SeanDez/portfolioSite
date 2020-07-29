import React from 'react';
import LogoContainer from "../../shared/LogoContainer";
import FittedImage from "../../shared/FittedImage";

interface PropsShape {
  GithubLogo: string
}

export default (props: PropsShape) => {

  return (
    <div>
      <p>This simple static site is built with create-react-app, using the Typescript template. It's hosted on a public AWS S3 bucket.</p>

      <LogoContainer>
          <a 
            target="_blank" 
            href="https://github.com/SeanDez/foreignSentenceRepeater"
            rel='noopener noreferrer' // for security
          >
            <FittedImage src={props.GithubLogo} alt='Github logo' />
          </a>
        </LogoContainer>

      <h2>"Justify your design decisions"</h2>

      <h3>Color scheme</h3>

      <p>On <a href="https://www.siteinspire.com/websites?categories=19">Site Inspire's Portfolio Showcase</a> for every 10 sites 5 were white. The rest were a mix of multi-color and black. To slightly boost uniqueness among a majorify of white portfolio sites I went with black.</p>

      <p>Then I went to my favorite color palette generator, <a href="https://coolors.co/generate">Coolers.co</a>. I locked one color to black and kept generating palettes until I found a nice complement of green shades. Green on black is a familiar geek/hacker color scheme. I thought it fit the profile of a developer with a fondness for back end dev and playing around in the terminal all dya.</p>

      <h3>Typography</h3>

      <p>Fonts almost by themselves can make a site feel custom. Something with a monospace or sterotypical geek design would fit the brand of a progammer.</p>

      <h3>Layout</h3>

      <p>Based on my work experience designing small business sites for conversion, layout should be somewhat predictable and uncluttered. The goal is to make it easy for the visitor to find what she wants.</p> 

      <p>I start my design with a mobile layout. Mobile-first designs look nice when expanded outwards. Desktop-first designs need to collapse multiple columns of information, sometimes making them trickier to convert.</p>
    </div>
  )
}