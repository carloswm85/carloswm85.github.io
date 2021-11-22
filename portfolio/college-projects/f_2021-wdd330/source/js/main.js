
/**
 * INDEX
 */
const list = document.querySelector('#list');
const links = [
	{
		label: 'Week 01',
		url: 'weeks/week01/'
	},
	{
		label: 'Week 02',
		url: 'weeks/week02/'
	},
	{
		label: 'Week 03',
		url: 'weeks/week03/'
	},
	{
		label: 'Week 04',
		url: 'weeks/week04/'
	},
	{
		label: 'Week 05',
		url: 'weeks/week05/'
	},
	{
		label: 'Week 06',
		url: 'weeks/week06_todo_list/'
	},
	{
		label: 'Week 07',
		url: 'weeks/week07_ajax/'
	},
	{
		label: 'Week 08',
		url: 'weeks/week08_ajax_animations_canvas_dragndrop/'
	},
	{
		label: 'Week 09',
		url: 'weeks/week09_parcel-boilerplate/'
	},
	{
		label: 'Week 10',
		url: 'weeks/week10_formValidation_fetchApi/'
	},
	{
		label: 'Week 11',
		url: 'weeks/week11/'
	},
	{
		label: 'Week 12',
		url: 'weeks/week12/'
	},
	{
		label: 'Week 13',
		url: 'weeks/week13/'
	}
]

links.forEach(element => {
	var listItem = document.createElement('li');
	var linkElement = document.createElement('a');
	var span = document.createElement('span');
	
	linkElement.target = '_blank';
	linkElement.href = element.url;
	linkElement.innerText = element.label;

	// &nearr; &UpperRightArrow; &nearrow; &#x02197; &#8599;
	span.innerHTML = ' &#8663;';

	linkElement.appendChild(span);
	listItem.appendChild(linkElement);
	list.appendChild(listItem);
});
