
/**
 * INDEX
 */
const list = document.querySelector('#list');
const links = [
	{
		label: 'Week 01',
		url: 'week01/index.html'
	},
	{
		label: 'Week 02',
		url: 'week02/index.html'
	},
	{
		label: 'Week 03 (try me)',
		url: 'week03/index.html'
	},
	// {
	// 	label: 'Week 0',
	// 	url: 'week0/index.html'
	// },
]

links.forEach(element => {
	var listItem = document.createElement('li');
	var linkElement = document.createElement('a');
	var span = document.createElement('span');
	
	linkElement.href = element.url;
	linkElement.innerText = element.label;

	// &nearr; &UpperRightArrow; &nearrow; &#x02197; &#8599;
	span.innerHTML = ' &#8667;';

	linkElement.appendChild(span);
	listItem.appendChild(linkElement);
	list.appendChild(listItem);
});


/**
 * LAST EDIT
 */
const lastEdit = document.querySelector(".last-edit");
const theDate = new Date(document.lastModified).toLocaleDateString();
lastEdit.innerText = theDate;