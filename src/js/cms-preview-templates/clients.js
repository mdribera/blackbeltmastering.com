import React from "react";
// eslint-disable-next-line no-unused-vars
import { BlackBeltPage } from "./components/page";

export class ClientsPreview extends React.Component {
  render() {
    const { entry } = this.props;

    const title = entry.getIn(["data", "title"]);
    const pageName = entry.getIn(["data", "name"]);
    const hideTitle = entry.getIn(["data", "hideTitle"]);
    const clients = entry.getIn(["data", "clients"]);

    return (
      <BlackBeltPage title={title} pageName={pageName} hideTitle={hideTitle}>
        <div className="row">
          <div class="col-xs-12 flex-rows">
            {clients.map((client) => {
              const image = client.getIn(["image"]);
              const artist = client.getIn(["artist"]);
              const secondLine = client.getIn(["secondLine"]);
              const attribution = client.getIn(["attribution"]);

              // console.log(`CLIENT!\n\n\t${image}\n\t${artist}\n\t${attribution}`);
              return (
                <div className="artwork text-center">
                  <div className="cover">
                    <img src={"/" + image} />
                  </div>
                  <p className="artist">{artist}</p>
                  <p className="small second-line">{secondLine}</p>
                  <p className="small attribution">{attribution}</p>
                </div>
              );
            })}
          </div>
        </div>
      </BlackBeltPage>
    );
  }
}
