import { lastUpdate } from "./tools/time.js";
import { render } from "./tools/render.js";

var headerContent = ["siteName", "siteAnnouncement", "navbar"];
var footerContent = ["navfoot", "copyright", "lastUpdate"];

window.onload = function () {
	render(headerContent, "header");
	render(footerContent, "footer");
	lastUpdate(); // run after rendering the components
}
