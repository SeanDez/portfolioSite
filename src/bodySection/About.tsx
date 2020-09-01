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

    <p>I'm a React Typescript developer currently in Miami, moving to Atlanta for greater job opportunities.</p>

    <p>On the back end I use Express.js and PostgreSQL. That is my main stack.</p>
    
    <p>I also know PHP and Wordpress, and have written a couple small plugins. I didn't complete the last 20% or so for them to be presentable, so I didn't add them to my portfolio.</p>

    <p>I'm studying AWS on the side. I'll try to sit for the Certified Developer Associate exam in six to twelve months. My long term goal is to add AWS devops pipelines to my skillset.</p>

    <p>I like what I do; my portfolio items were built for me. Coding is like grown-up legos without foot pain when you mis-step.</p>
  </motion.section>
);