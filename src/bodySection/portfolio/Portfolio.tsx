import React from 'react';
import { BrowserRouter, Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import navigationJsonData from "../../data/navigation.json";
import ComponentData from '../ComponentDataInterface';
import ItemPreviews from './ItemPreviews';

import { createComponentNameFromString } from "../../utilities";


import ThisSite from "./thisSite";

interface PropsShape {}

const typeCheckedData: Array<ComponentData> = Object.values(navigationJsonData);


function buildAllRoutes(previewData: ComponentData[]) {
  return previewData.map(singlePreview => (
  <Route path={`${useRouteMatch().path}${singlePreview.slug}`}>
    { React.createElement(createComponentNameFromString(singlePreview.name)) }
  </Route>
  ))
}

export default (props: PropsShape) => {

  return (
    <BrowserRouter>
      <section>
        <Switch>
          {/* {buildAllRoutes(itemPreviewData)} */}
          <ItemPreviews previewData={typeCheckedData} />
        </Switch>
      </section>
    </BrowserRouter>
  )
}

