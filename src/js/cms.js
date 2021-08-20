import CMS from "netlify-cms-app";

import { AboutPreview } from "./cms-preview-templates/about";
import { FAQPreview } from "./cms-preview-templates/faq";
import { ClientsPreview } from "./cms-preview-templates/clients";
import { StudioPreview } from "./cms-preview-templates/studio";

CMS.registerPreviewStyle(
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
);
CMS.registerPreviewStyle("/main.css");

CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("faq", FAQPreview);
CMS.registerPreviewTemplate("clients", ClientsPreview);
CMS.registerPreviewTemplate("studio", StudioPreview);

CMS.init();
