
console.log("utils.js");

function Search() {
	var	buttons,
			tr,
			content = [];

	buttons = document.getElementsByTagName("button");
	console.log(buttons);
	console.log("search()");
	

	// for (var i = 1; i < buttons.length; i++) {
	//   content.push(buttons[i].innerText); // checkbookCodeNumber
	// 	console.log(buttons[i]);
	//     // Validate(content, tr, i);
	//     // while (content.length > 0) {
	//     //     content.pop();
	//     // }
	// }
}

/**
 * If the character is found in the string,
 * the function returns.
 * @param {any} content every string from the entire cell
 * @param {any} tr single row of the table
 * @param {any} i outter loop
 */
function Validate(content, tr, i) {
	// var input, filter;

	// input = document.getElementById("searchCheckbook");
	// filter = input.value.toUpperCase();

	// for (var j = 0; j < content.length; j++) {
	// 	if (content[j]) {
	// 		if (content[j].toUpperCase().indexOf(filter) > -1) {
	// 			tr[i].style.display = "";
	// 			return;
	// 		} else {
	// 			tr[i].style.display = "none";
	// 		}
	// 	}
	// }
}

export { Search };