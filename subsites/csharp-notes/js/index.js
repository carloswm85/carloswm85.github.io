import { Search } from "./utils.js";

addEventListener("onkeyup", Search);

var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="collapse"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
