import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import navigationData from "../../data/navigation";
import ComponentData from '../ComponentDataInterface';
import ItemPreviews from './ItemPreviews';

import { addPropsAndChildrenToJsxComponent } from '../../utilities';

import GithubLogo from '../../images/GitHub-WordLogo.svg';

const typeCheckedNavigationData: Array<ComponentData> = Object.values(navigationData);

interface PropsShape {}

export default (props: PropsShape) => {

  return (
    <BrowserRouter>
      <section>
        <Switch>
          {/* Routes to sub-views */}
          { typeCheckedNavigationData.map((componentData: ComponentData) => {
            return (
            <Route path={`${useRouteMatch().path}${componentData.slug}`}>
              {addPropsAndChildrenToJsxComponent(
                componentData.component,
                { GithubLogo }
              )}
            </Route>
          )}) 
          }

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

