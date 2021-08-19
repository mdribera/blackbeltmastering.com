import React from "react";
// eslint-disable-next-line no-unused-vars
import { BlackBeltPage } from "./components/page";
// eslint-disable-next-line no-unused-vars
import { FAQItem } from "./components/faq-item";

export class FAQPreview extends React.Component {
  render() {
    const { entry } = this.props;

    const title = entry.getIn(["data", "title"]);
    const pageName = entry.getIn(["data", "name"]);
    const hideTitle = entry.getIn(["data", "hideTitle"]);
    const colOneTitle = entry.getIn(["data", "colOne", "title"]);
    const colTwoTitle = entry.getIn(["data", "colTwo", "title"]);
    const colOneFAQs = entry.getIn(["data", "colOne", "faq"]);
    const colTwoFAQs = entry.getIn(["data", "colTwo", "faq"]);

    return (
      <BlackBeltPage title={title} pageName={pageName} hideTitle={hideTitle}>
        <div className="row">
          <div
            className="panel-group col-xs-12 col-sm-6"
            id="frequently-asked-general-questions"
            role="tablist"
            aria-multiselectable="true"
          >
            <h3>{colOneTitle}</h3>
            {colOneFAQs.map((faq, i) => (
              <FAQItem
                section={"general"}
                question={faq.getIn(["question"])}
                answer={faq.getIn(["answer"])}
                i={i}
              />
            ))}
          </div>
          <div
            className="panel-group col-xs-12 col-sm-6"
            id="frequently-asked-vinyl-questions"
            role="tablist"
            aria-multiselectable="true"
          >
            <h3>{colTwoTitle}</h3>
            {colTwoFAQs.map((faq, i) => (
              <FAQItem
                section={"vinyl"}
                question={faq.getIn(["question"])}
                answer={faq.getIn(["answer"])}
                i={i}
              />
            ))}
          </div>
        </div>
      </BlackBeltPage>
    );
  }
}
