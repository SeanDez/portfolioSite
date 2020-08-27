import React from 'react';

interface PropsShape {
  GithubLogo: string
}

export default function (props: PropsShape) {

  return (
    <section>
      <h2>Asana Task Repeater</h2>

      <p>Asana is a project management tool similar to Basecamp. I find it very helpful for listing out project features. It is also good for collaborative projects.</p>

      <p>One feature it doesn't have is the ability to auto-repeat tasks on a set schedule. This would save a lot of manual task duplication for common team assignments.</p>

      <p>That is exactly what this app does. Asana Task Repeater pulls a list of tasks from a user's available projects, and runs a "duplicate' operation on them according to a user defined ruleset.</p>

      <h2>Planned additions</h2>

      <ul>
        <li>Set modification criteria for planned repeats. This would allow the repeated tasks to be individually unique.</li>
      </ul>
    </section>
  )
}