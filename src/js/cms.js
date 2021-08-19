import CMS from "netlify-cms-app";

import { AboutPreview } from "./cms-preview-templates/about";
import { FAQPreview } from "./cms-preview-templates/faq";
import { ClientsPreview } from "./cms-preview-templates/clients";

CMS.registerPreviewStyle(
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
);
CMS.registerPreviewStyle("/main.css");

CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("faq", FAQPreview);
CMS.registerPreviewTemplate("clients", ClientsPreview);

CMS.init();
