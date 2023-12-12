const bgMenu = document.getElementById("bg-wrapper");
const bg1 = document.getElementById("line1");
const bg2 = document.getElementById("line2");
const bg3 = document.getElementById("line3");

bgMenu.addEventListener("click", () => {
	bg1.classList.toggle("bg1-active");
	bg2.classList.toggle("bg2-active");
	bg3.classList.toggle("bg3-active");
});

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
