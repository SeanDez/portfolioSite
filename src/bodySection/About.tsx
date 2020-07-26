import React from 'react';

interface PropsShape {}

const wufooFormStyle = { 
  width: '100%', 
  height: '700px', 
  maxWidth: "700px", 
  border: "none"
}

export default (props: PropsShape) => {

  return (
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
        I like what I do; my portfolio items were built for me, first and foremost. Coding can be frustrating but the aspect of building useful things is like grown-up legos, without the foot pain during mis-steps.
      </p>
    </section>
  )
}