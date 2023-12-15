const menu = document.getElementById("menu");
const openMenu = document.getElementById("openMenu");

openMenu.addEventListener("click", function () {
	menu.classList.toggle("show");
	menu.classList.toggle("hide");
});

window.addEventListener("click", (Event) => {
	if (Event.target.id === "menu") {
		menu.classList.replace("show", "hide");
	}
});
