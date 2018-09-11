const button = document.getElementById("btn1");
const input = document.getElementById("ipt1");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");


const removeParent = (event) => {
	event.target.removeEventListener("click", removeParent);
	event.target.parentNode.remove();
}

const addDeleteButton = (item) => {
	const btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.onclick = removeParent;
	item.appendChild(btn);
}

const createListElement = () => {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDeleteButton(li)
	ul.appendChild(li);
	input.value = "";
}

const addItemOnClick = () => {
	if (input.value.length > 0) {
		createListElement();
	}
}

const addItemOnKeypress = (event) => {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

const toggleCheck = (event) => {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}


li.forEach(addDeleteButton);
ul.addEventListener("click", toggleCheck);
button.addEventListener("click", addItemOnClick);
input.addEventListener("keypress", addItemOnKeypress);