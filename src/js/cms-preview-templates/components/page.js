import React from "react";

export class BlackBeltPage extends React.Component {
  render() {
    const { pageName, hideTitle, title, children } = this.props;

    return (
      <div id="section-container" className="content">
        <article className="tab-container">
          <section
            className="active content-container"
            id={`${pageName}-container`}
            role="tabpanel"
          >
            <div className="anchor" id={`${pageName}-container`}></div>

            {!hideTitle ? (
              <>
                <h2 className="text-center">{title}</h2>
                <hr />
              </>
            ) : null}

            <div id={`${pageName}Content`} className="sectionContent container-fluid">
              {children}
            </div>
          </section>
        </article>
      </div>
    );
  }
}
