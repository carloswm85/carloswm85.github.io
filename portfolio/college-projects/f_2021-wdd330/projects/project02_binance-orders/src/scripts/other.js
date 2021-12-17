// Last Edit
// const lastEdit = document.querySelector(".last-edit");
// const theDate = new Date(document.lastModified).toLocaleDateString();
// lastEdit.innerText = theDate;

// Display JSON
async function displayText() {
	const json = await getJson(url1);
	const text = getText(json);

	const disp = document.getElementById('display');
	disp.innerText = text;
}