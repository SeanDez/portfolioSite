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

    <p>Working as a freelance writer was creatively gratifying, but a step down in pay compared to Tech. I've always enjoyed the aesthetics and logical component of web development, and decided to study it part time a few years ago.</p>

    <p>Now with fairly developed skills and an internship, I feel confident to call myself a React Typescript developer from the Miami, Florida area. I'm willing to move to most of the continental US for the right opportunity.</p>

    <p>On the back end I use Express.js and PostgreSQL to round out my full stack skills.</p>
    
    <p>I also know PHP and Wordpress, and have written a couple small plugins. My depth of experience in the Wordpress world is still shallow in comparison to full stack JS though.</p>

    <p>To complete my journey, I'm looking to find a small company with a product that genuinely adds value to the world. Contributing to something useful and important makes it easy to work long hours while enjoying the ride.</p>
  </motion.section>
);