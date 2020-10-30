import React from 'react';

interface PropsShape {
  GithubLogo: string
}

export default function (props: PropsShape) {

  return (
    <section>
      <h2>Asana Task Repeater</h2>
      <h5>Typescript, React, Express, PostgreSQL</h5>

      <p>Automates repetitive task posting on the Asana platform.</p>

      <h3>Technical Highlights</h3>

      <ul>
        <li>Password-less sign in using Asana.</li>
        <li>OAuth process, handled manually front to end</li>
        <li>Responsive design on front end without use of media queries</li>
        <li>Automated backend cron process to control user defined tasks</li>
      </ul>

      <h3>Commentary</h3>

      <p>It doesn't make sense to hire a full stack developer without a full stack app, so here is the one I like to showcase.</p>

      <p>Like every app on my portfolio, this one has a real world use case. I loved using Asana as an intern and sought to use it for a side project I needed some help with. I just didn't like having to constantly manage it when my input wasn't needed.</p>
        
      <p>Phase one of this app was dedicated solely to handling the repetitive task of duplicating tasks that needed to be repeated on a regular schedule</p>

      <h3>Planned additions</h3>

      <p>Eventually I will widen the scope of this project to include phone call tracking for phone numbers from Voip.ms. This will pivot the application from a singular task post automator, into a marketing campaign automation and analysis platform.</p>
        
      <p>I don't plan to charge for it, the main benefit other than its technical showcase value is still for my own side project (which also benefits from call tracking).</p>
    </section>
  )
}