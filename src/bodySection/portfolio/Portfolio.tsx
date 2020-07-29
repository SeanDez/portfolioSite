import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import navigationData from "../../data/navigation";
import ComponentData from '../ComponentDataInterface';
import ItemPreviews from './ItemPreviews';

import { addPropsAndChildrenToJsxComponent } from '../../utilities';

import GithubLogo from '../../images/GitHub-WordLogo.svg';
import CallTrackVoipMs from './CallTrackVoipMs';
import ForeignSentenceRepeater from './TranslatorCli';
import ThisSite from './ThisSite';
import AsanaTaskRepeater from './AsanaTaskRepeater';

const typeCheckedNavigationData: Array<Omit<ComponentData, "component">> = Object.values(navigationData);

interface PropsShape {}

export default (props: PropsShape) => {

  return (
    <BrowserRouter>
      <section>
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
            previewData={typeCheckedNavigationData} 
            portfolioRoute={useRouteMatch().url} 
          />
        </Switch>
      </section>
    </BrowserRouter>
  )
}

