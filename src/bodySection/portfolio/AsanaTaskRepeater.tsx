import React from 'react';

interface PropsShape {
  GithubLogo: string
}

export default function (props: PropsShape) {

  return (
    <section>
      <h2>Asana Task Repeater</h2>

      <p>Asana is a nice task manager but as with most of them, you need to keep creating any task that needs repeating. There is a "duplicate feature" which is nice.</p>

      <p>What would be even better is a dashboard that auto-repeats tasks on a set schedule.</p>

      <p>That is what this app does.</p>

      <h2>Planned additions</h2>

      <ul>
        <li>Set modification criteria for planned repeats. This would allow the repeated tasks to be individually unique.</li>
      </ul>
    </section>
  )
}