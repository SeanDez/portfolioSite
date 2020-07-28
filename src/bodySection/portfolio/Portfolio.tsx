import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import navigationData from "../../data/navigation";
import ComponentData from '../ComponentDataInterface';
import ItemPreviews from './ItemPreviews';


const typeCheckedNavigationData: Array<ComponentData> = Object.values(navigationData);

interface PropsShape {}

export default (props: PropsShape) => {

  return (
    <BrowserRouter>
      <section>
        <Switch>
          {/* Routes to sub-views */}
          { typeCheckedNavigationData.map((componentData: ComponentData) => (
            <Route path={`${useRouteMatch().path}${componentData.slug}`}>
              {componentData.component}
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

