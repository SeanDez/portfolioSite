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

    <p>Working as a freelance writer was creatively gratifying, but the puzzle-solving side of my left brain often felt neglected. I've always enjoyed the aesthetics and logical component of web development, and decided to study it part time about five years ago.</p>

    <p>As a new, self studying entrant into the industry, I knew there would be less companies willing to take me on initially. Thankfully I was already writing for ScaleFactor and their Tech Lead decided to hire me on as an intern based on my unpolished skills and enthusiasm to learn more.</p>

    <p>Over the next 7 months, I proved my resolve to become better and was eventually offered a full time role on the company's Web Development team. I spent more time in the back end, an internal Express.js API. I worked on my database querying skills. On my off hours I studied the Typescript concepts I didn't know. Today I can confidently say I'm proficient on both sides of the stack, from React.js to Node and Express, ending at the PostgreSQL database.</p>
    
    <p>My employer had to close due to a loss of business from Covid. Now, I'm looking to find another small company with a product that genuinely adds value to the world. Contributing to something useful and important makes it easy to work long hours while enjoying the ride.</p>
  </motion.section>
);