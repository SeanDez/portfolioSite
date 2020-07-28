import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import navigationJsonData from "../../data/navigation.json";
import ComponentData from '../ComponentDataInterface';
import ItemPreviews from './ItemPreviews';

import ThisSite from "./ThisSite";
import ForeignSentenceRepeater from "./TranslatorCli";
import CallTrackVoipMs from "./CallTrackVoipMs";

interface PropsShape {}

const typeCheckedNavigationData: Array<ComponentData> = Object.values(navigationJsonData);


export default (props: PropsShape) => {

  return (
    <BrowserRouter>
      <section>
        <Switch>
          {/* Routes to sub-views */}
          { typeCheckedNavigationData.map((componentData: ComponentData) => (
            <Route path={`${useRouteMatch().path}${componentData.slug}`}>
              <ThisSite />
            </Route>
          )) }

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

