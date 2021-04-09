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

    <p>Working as a writer was creatively gratifying, but the puzzle-solving side of my left brain often felt neglected. I've always enjoyed the aesthetics and logical component of web development, and decided to study it part time about five years ago, soon landing my first job to work on a React.js application fed by a Node/Express backend.</p>

    <p>Starting with front end feature additions and debug stories, my duties quickly expanded into the back end. I got to spend more time working on an Express.js API. I worked on my database querying skills. On my off hours I studied Typescript concepts I didn't know. Today I can confidently say I'm proficient on both sides of the stack, from React.js to Node and Express, ending at the PostgreSQL database.</p>
    
    <p>Coding is both my work and my passion. Contributing to something useful and important makes it easy to work long hours while enjoying the ride.</p>
  </motion.section>
);