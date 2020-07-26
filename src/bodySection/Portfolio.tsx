import React from 'react';
import ItemPreviewsInterFace from "./portfolioItems/ItemPreviewsInterface";
import ThisSite from "./portfolioItems/thisSite";

interface PropsShape {}

const itemPreviewData: ItemPreviewsInterFace[] = [
  { name: 'This Website', slug: 'this-site', element: <ThisSite /> }
]

function buildAllItemPreviews(previewData: ItemPreviewsInterFace[]) {
  return previewData.map(singlePreview => (
    <div>
      {singlePreview.element}
    </div>
  ));
}

export default (props: PropsShape) => {

  return (
    <div>
      <p>Portfolio Here</p>
      {() => buildAllItemPreviews(itemPreviewData)}
    </div>
  )
}

