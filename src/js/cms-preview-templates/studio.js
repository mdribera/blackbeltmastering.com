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
    // const equipment = entry.getIn(["data", "equipment"]);
    const sidebar = entry.getIn(["data", "sidebar"]);
    const image = entry.getIn(["data", "image"]);
    console.log(`STUDIO!\n\n\t${JSON.stringify(entry.getIn(["data", "equipment"]), null, 2)}`);

    return (
      <BlackBeltPage title={title} pageName={pageName} hideTitle={hideTitle}>
        <div className="row">
          <div className="col-xs-12 text-center" dangerouslySetInnerHTML={{ __html: marked(blurb) }}></div>

          <div className="col-xs-8">
            <img src={"/" + image} />
          </div>

          <div className="col-xs-4" dangerouslySetInnerHTML={{ __html: marked(sidebar) }}>
            {/* {equipment.map((eq) => {
              const bullets = eq.getIn("bullets");
              return (
                <div className="equipment">
                  <h3>{eq.getIn("heading")}:</h3>
                  <ul>
                    {bullets.map((bullet) => (
                      <li>{bullet}</li>
                    ))}
                  </ul>
                </div>
              );
            })} */}
          </div>
        </div>
      </BlackBeltPage>
    );
  }
}
