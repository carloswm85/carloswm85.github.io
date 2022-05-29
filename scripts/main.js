// Last time page code was updated/changed
const options = {
	year: "numeric",
	month: "long",
	weekday: "long",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	hour12: true
};

let last = document.lastModified;
let date = new Date(last);
let local = date.toLocaleDateString("en-US", options);
let fullDate = `${local}`;screen
document.getElementById("updated").textContent = fullDate;
