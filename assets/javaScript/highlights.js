let highlights = document.getElementById("highlightsGallery");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

url = "http://localhost:3500/products";

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		let currentIndex = 0;

		function showProduct(index) {
			highlights.innerHTML = "";

			let item = data[index];

			let container = document.createElement("div");
			let image = document.createElement("img");
			image.src = item.image;

			console.log("Current Index:", currentIndex);
			console.log("Image URL:", item.image);

			container.appendChild(image);

			highlights.appendChild(container);
		}

		function showNextProduct() {
			currentIndex = (currentIndex + 1) % data.length;
			showProduct(currentIndex);
		}

		function showPrevProduct() {
			currentIndex = (currentIndex - 1 + data.length) % data.length;
			showProduct(currentIndex);
		}

		// Initial visning af det første produkt
		showProduct(currentIndex);

		// Tilføj event listeners til pilene
		nextBtn.addEventListener("click", showNextProduct);
		prevBtn.addEventListener("click", showPrevProduct);
	});
