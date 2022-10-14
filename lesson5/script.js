const userInput = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
	const chapter = userInput.value;
	userInput.value = "";

	const listItem = document.createElement("li");
	const Span = document.createElement("span");
	const listButton = document.createElement("button");

	listItem.appendChild(Span);
	Span.textContent = chapter;
	listItem.appendChild(listButton);
	listButton.textContent = "❌";
	list.appendChild(listItem);

	listButton.addEventListener("click", () => {
		list.removeChild(listItem);
	});

	userInput.focus();
});
