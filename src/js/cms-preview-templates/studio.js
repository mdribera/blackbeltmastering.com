import marked from "marked";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BlackBeltPage } from "./components/page";

export class StudioPreview extends React.Component {
  render() {
    const { entry } = this.props;

    const title = entry.getIn(["data", "title"]);
    const pageName = entry.getIn(["data", "name"]);
    const hideTitle = entry.getIn(["data", "hideTitle"]);
    const blurb = entry.getIn(["data", "blurb"]);
    const sidebar = entry.getIn(["data", "sidebar"]);
    const images = entry.getIn(["data", "images"]);

    return (
      <BlackBeltPage title={title} pageName={pageName} hideTitle={hideTitle}>
        <div className="row">
          <div className="col-xs-12 text-center" dangerouslySetInnerHTML={{ __html: marked(blurb) }}></div>

          <div className="col-xs-8 row">
            {images.map((image) => <img className="col-xs-6" src={"/" + image.getIn(["image"])} />)}
          </div>

          <div className="col-xs-4" dangerouslySetInnerHTML={{ __html: marked(sidebar) }}></div>
        </div>
      </BlackBeltPage>
    );
  }
}
