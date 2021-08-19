import React from "react";
// eslint-disable-next-line no-unused-vars
import { BlackBeltPage } from "./components/page";

export class AboutPreview extends React.Component {
  render() {
    const { entry } = this.props;

    const image = entry.getIn(["data", "image"]);
    const title = entry.getIn(["data", "title"]);
    const pageName = entry.getIn(["data", "name"]);
    const hideTitle = entry.getIn(["data", "hideTitle"]);
    const blurb = entry.getIn(["data", "blurb"]);

    return (
      <BlackBeltPage title={title} pageName={pageName} hideTitle={hideTitle}>
        <img
          className="half-column padding-left pull-right"
          src={`/${image}`}
          alt=""
        />
        <div className="indent">
          {blurb.split("\n").map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </BlackBeltPage>
    );
  }
}
