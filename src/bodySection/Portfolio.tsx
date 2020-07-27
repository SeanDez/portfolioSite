import React from 'react';
import { BrowserRouter, Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import ItemPreviewsInterFace from "./portfolioItems/ItemPreviewsInterface";

import ThisSite from "./portfolioItems/thisSite";

interface PropsShape {}

const itemPreviewData: ItemPreviewsInterFace[] = [
  { name: 'This Website', slug: '/this-site', element: <ThisSite /> }
]

function buildAllItemPreviews(previewData: ItemPreviewsInterFace[]) {
  return previewData.map(singlePreview => (
    <div>
      <Link to={`${useRouteMatch().url}${singlePreview.slug}`}>
        {singlePreview.name}
      </Link>
    </div>
  ));
}

function buildAllRoutes(previewData: ItemPreviewsInterFace[]) {
  return previewData.map(singlePreview => (
  <Route path={`${useRouteMatch().path}${singlePreview.slug}`}>
    {singlePreview.element}
  </Route>
  ))
}

export default (props: PropsShape) => {

  return (
    <BrowserRouter>
      <section>
        <Switch>
          {buildAllRoutes(itemPreviewData)}
          {buildAllItemPreviews(itemPreviewData)}
        </Switch>
      </section>
    </BrowserRouter>
  )
}

