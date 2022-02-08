import React from 'react';
import { motion } from 'framer-motion';

interface PropsShape {
  fadeSettings: any
}

export default (props: PropsShape) => (
  <motion.section
    variants={props.fadeSettings}
    initial='hidden'
    exit='hidden'
    animate='opaque'
  >
    <h2>About</h2>
    <p>
      Fresh out of college, a friend and I started a online lead generation business. Google and Facebook traffic with local city keywords were our focus. We would either rank highly in the "organic search", or pay for ads, capture leads, and resell them to local businesses.
    </p>
    <p>
      I wore a lot of hats back then. I handled analytics, analyzing traffic flow from ad to landing page. I learned a lot about design, conversion rate optimization, WordPress,
    </p>
    <p>    
      In the early days of the search engines and social media it was easy to make money. That eventually came to an end.... competition and ad prices increased. We shut the doors on the business when it no longer made sense to us. 
    </p>
    <p>    
      I took my self developed skills into the world of professional IT. Modern toolsets used a JavaScript tech stack so that was a big shift. React.js, Node.js, Express.js, and MongoDB (which I swapped for PostgreSQL due to what we used at my workplace). 
    </p>
    <p>    
      Professional development is a lot less hacky and a lot more accountable. I both love and hate it at times (I'm looking at you, multi day debugs!). Even with 10+ years in IT, I continue to learn new things every day from both junior and senior colleagues. That unending learning environment is the part of development I enjoy most.
    </p>
  </motion.section>
);