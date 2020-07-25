import React from 'react';

export default (props: any) => {

  return (
    <div>
      <p>This simple static site is built with create-react-app, using the Typescript template. It's hosted on a public AWS S3 bucket.</p>

      <h2>"Justify your design decisions"</h2>

      <h3>Color scheme</h3>

      <p>On <a href="https://www.siteinspire.com/websites?categories=19">Site Inspire's Portfolio Showcase</a> I noticed for every 10 sites, 5 were white, and 2-3 were multicolor, 2-3 black. I decided on black for simplicity and uniqueness.</p>

      <h3>Typography</h3>

      <p>Typography almost by itself can make a site feel custom. Something with a monospace or sterotypical geek design would fit the brand of a progammer.</p>

      <h3>Layout</h3>

      <p>I used to read a lot of conversion rate optimization material. Based on my work experience with small businesses, the layout should be predictable and uncluttered.</p> 

      <p>I start with a mobile layout. Mobile-first designs look nice when expanded outward. Desktop-first designs can have more trouble going the other way.</p>
    </div>
  )
}