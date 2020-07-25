import React from 'react';
import WufooForm from 'react-wufoo-embed';

interface PropsShape {}

export default (props: PropsShape) => {

  return (
    <main>
      <section>
        <h2>About / Contact</h2>

        <p>
         I'm a React Typescript developer currently in Miami, moving to Atlanta for greater job opportunities. 
        </p>

        <p>
         On the back end I use Express.js and PostgreSQL to round out my main stack. 
        </p>

        <p>
          I'm studying AWS serverless techs on the side and maybe in a year will be competent in AWS Lambda, API Gateway, and RDS PostgreSQL. Right now I have familiarity but not proficiency with those techs.
        </p>

        <p>
         I like what I do; my portfolio items were built for me, first and foremost. It'll always be that way. Coding can be frustrating but the aspect of building useful things is like grown-up legos, without the foot pain during mis-steps.
        </p>
      </section>

      <section>
        <h2>Contact</h2>

        <iframe
          height="700" 
          title="Contact Form" 
          // allowtransparency="true" 
          // frameborder="0" 
          scrolling="yes" 
          style={{ width: '100%', height: '700px', maxWidth:"700px", border:"none" }} 
          src="https://mrseand.wufoo.com/embed/z1xzigp70gac5xc/"> 
          <a href="https://mrseand.wufoo.com/forms/z1xzigp70gac5xc/">
            Contact Sean
          </a> 
        </iframe>

        <p>
          {process.env.REACT_APP_WUFOO_EMAIL}
          {process.env.REACT_APP_WUFOO_FORM_ID}
        </p>
      </section>
    </main>
  )
}