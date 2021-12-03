
// 01
export function setUpTabs(selectedTab = 'trade', setTab = false) {
	const tabs = document.querySelectorAll('.tab');
	const tabs_content = document.querySelectorAll('.tabcontent');

	tabs_content.forEach(content => {
		content.style.display = "none";
	});

	tabs.forEach(tab => {
		tab.addEventListener('click', openTab);
	});

	function openTab(event) {
		const tab = event.target;
		console.log(tab);

		tabs.forEach(otherTab => {
			otherTab.classList.remove("active_tab");
		});

		tabs_content.forEach(content => {
			content.style.display = "none";
		});

		tab.classList.add("active_tab");
		document.getElementById(`${tab.id}_content`).style.display = "flex";
	}
}
