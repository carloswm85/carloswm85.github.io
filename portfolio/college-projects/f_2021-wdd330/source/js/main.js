
/**
 * INDEX
 */
const list = document.querySelector('#list');
const links = [
	{
		label: 'Week 01',
		url: 'week01/'
	},
	{
		label: 'Week 02',
		url: 'week02/'
	},
	{
		label: 'Week 03',
		url: 'week03/'
	},
	{
		label: 'Week 04',
		url: 'week04/'
	},
	{
		label: 'Week 05',
		url: 'week05/'
	},
	{
		label: 'Week 06',
		url: 'week06_todo_list/'
	},
	{
		label: 'Week 07',
		url: 'week07_ajax/'
	},
	{
		label: 'Week 08',
		url: 'week08_ajax_animations_canvas_dragndrop/'
	},
	{
		label: 'Week 09',
		url: 'week09_parcel-boilerplate/'
	},
	{
		label: 'Week 10',
		url: 'week10/'
	},
	{
		label: 'Week 11',
		url: 'week11/'
	},
	{
		label: 'Week 12',
		url: 'week12/'
	},
	{
		label: 'Week 13',
		url: 'week13/'
	}
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
