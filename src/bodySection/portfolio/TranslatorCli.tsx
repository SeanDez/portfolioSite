import React from 'react';

import LogoContainer from "../../shared/LogoContainer";
import FittedImage from "../../shared/FittedImage";
import ImageContainer from '../../shared/ImageContainer';

import ConfigScreenshot from "../../images/foreignSentenceRepeater/config_step_1.jpg";
import WordDefinitionScreenshoot from "../../images/foreignSentenceRepeater/build_step_1_configure_words.jpg";

interface PropsShape {
  GithubLogo: string
}

export default function (props: PropsShape) {
  return (
    <div>
      <section>
        <h2>Translation App</h2>
        <h5>Node.js, Google Cloud</h5>
        <p>A CLI app that uses Google Cloud to turn a sentence file into a foreign language audio-mini course (detailed below).</p>
      </section>

      <section>
        <LogoContainer>
          <a 
            target="_blank" 
            href="https://github.com/SeanDez/foreignSentenceRepeater"
            rel='noopener noreferrer' // for security
          >
            <FittedImage src={props.GithubLogo} alt='Github logo' />
          </a>
        </LogoContainer>
      </section>

      <section className="teaser">
        <h3>Project Rationale</h3>

        <p>My girlfriend is Thai. After breezing through an Intro to Spanish course and never feeling behind the curve, the low repetition of Thai language courses left me feeling like a well designed translation app could do a lot better.</p>

        <p>My app was designed for learning, as opposed to making big claims about how many words the program covers, which is where I think a lot of courses in obscure languages go wrong. loosely follows the Pimsleur model of training by stating them in the foreign language, then defining them, then putting them together in a sentence.</p>
      </section>

      <section>
        <h3>Functionality</h3>

        <p>There are two main steps in this Node.js CLI app. Starting with the <code>--config</code> or <code>-c</code> flag, a guided wizard takes you through setup of a Google Cloud account, gathering necessary details for technical configuration and a couple desired options for the target foreign language and repeats per word, phrase and sentence.</p>

        <ImageContainer
          maxContainerWidth="400px"
          imageSrc={ConfigScreenshot}
          imageAlt="The beginning configuration step"
        />

        <p>Then after filling out the sentences to be built in a sentences.txt file, the build process is run next by running the script and passing <code>--build</code> or <code>-b</code>.</p>

        <p>Because this translator app was built to help people trying to learn obcure languages like Thai, which has no spaces, the build step also requires selecting each foreign word in the initial sentence translation.</p> 
        
        <p>Then, a suggested definition is offered for each word, which is overridable.</p> 

        <ImageContainer
          maxContainerWidth="400px"
          imageSrc={WordDefinitionScreenshoot}
          imageAlt="The word/definition selection screen"
        />
        
        <p>After all words in the sentence are gathered, a subfolder of <code>/audioCourse</code> is built with 3 tracks:</p>

        <ol>
          <li>The sentence in the foreign language, and then in English</li>
          <li>Every foreign word in the sentence, and its accompanying English definition</li>
          <li>A repeat of track one.</li>
        </ol>

        <p>There is also a variable pause based on the amount of words each sentence has, giving a longer time to think for longer sentences.</p>
      </section>

      <section>
        <h3>What I'm proud of</h3>

        <ul>
          <li>Running the entire configuration process using a standardized set of classes, polymorphically designed to allow for duck typing their properties and functions inside of a reduce function that gathers all the config data.</li>

          <li>The planning phase. Working down from theoretical objects, to program flow, to properties/methods. Finally, designing a theoretical "happy path" that captured 70% of the main logic (rest was conjured up as I got closer to the problem)</li>
        </ul>
      </section>

      <section>
        <h3>With more time I'd add...</h3>

        <ul>
          <li>Space detection for automatic parsing of foreign words. Most languages do use spaces to distinguish words. Because I built this app for my own use case, Thai, which uses spaces to separate sentences, space detection was not a priority feature. But others would probably find it helpful, so I'll at it at some point.</li>

          <li>Service layer separation. When I first built this project, I didn't think to design it in a way to make swapping translation and text-to-speech services fairly easy. But a more senior programmer suggested it would be helpful to avoid vendor lock-in. Google Cloud is free for quite a lot of requests so this is not a high priority, but to practice my own system design skills I may take it up later. It would require a massive rewrite of the entire program though.</li>
        </ul>
      </section>
 
    </div>
  )
}


