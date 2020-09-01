import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import navigationData from "../../data/navigation";
import ItemPreviews from './ItemPreviews';

import GithubLogo from '../../images/GitHub-WordLogo.svg';
import CallTrackVoipMs from './CallTrackVoipMs';
import ForeignSentenceRepeater from './TranslatorCli';
import ThisSite from './ThisSite';
import AsanaTaskRepeater from './AsanaTaskRepeater';

interface PropsShape {
  fadeSettings: any
}

export default (props: PropsShape) => {

  return (
      <StyledSection
        variants={props.fadeSettings}
        initial='hidden'
        exit='hidden'
        animate='opaque'
      >
        <Switch>
          {/* Routes to sub-views */}
          <Route path={`${useRouteMatch().path}/call-track-voipms`}>
            <CallTrackVoipMs GithubLogo={GithubLogo} />
          </Route>
          <Route path={`${useRouteMatch().path}/foreign-sentence-repeater`}>
            <ForeignSentenceRepeater GithubLogo={GithubLogo} />
          </Route>
          <Route path={`${useRouteMatch().path}/asana-task-repeater`}>
            <AsanaTaskRepeater GithubLogo={GithubLogo} />
          </Route>
          <Route path={`${useRouteMatch().path}/this-site`}>
            <ThisSite GithubLogo={GithubLogo} />
          </Route>
          {/* Nav links on category view */}
          <ItemPreviews 
            previewData={Object.values(navigationData)} 
            portfolioRoute={useRouteMatch().url} 
          />
        </Switch>
      </StyledSection>
  )
}

const StyledSection = styled(motion.section)`
  height: 100%;
`;