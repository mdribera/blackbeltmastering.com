import React from "react";
import marked from "marked";
import css from "classnames";

export class FAQItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  toggleCollapsed() {
    const { collapsed: prevCollapsed } = this.state;
    this.setState({ collapsed: !prevCollapsed });
  }

  render() {
    const { collapsed } = this.state;
    const { section, question, answer, i } = this.props;
    const answerId = `${section}-answer-${i}`;

    return (
      <div className="panel">
        <div className="panel-heading frequent-question">
          <h4 className="panel-title">
            <a
              className={css("question", { collapsed })}
              onClick={() => this.toggleCollapsed()}
              aria-expanded="false"
              aria-controls={answerId}
            >
              <span className="glyphicon glyphicon-chevron-down"></span>
              {question}
            </a>
          </h4>
        </div>
        <div
          className={css("panel-collapse", "collapse", "answer", { in: !collapsed })}
          role="tabpanel"
          id={answerId}
        >
          <p dangerouslySetInnerHTML={{ __html: marked(answer) }}></p>
        </div>
      </div>
    );
  }
}
