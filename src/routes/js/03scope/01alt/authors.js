var authors = ["Charles Dickens", "Jane Austen", "Mark Twain"];

var btn = document.getElementById("showAuthorsBtn");
var list = document.getElementById("authorList");
btn.addEventListener("click", function () {
	list.innerHTML = "";
	for (var i = 0; i < authors.length; i++) {
		var li = document.createElement("li");
		li.innerText = authors[i];
		list.appendChild(li);
	}
});
