let mostPopular = document.getElementById("most-popular");
let baseURL = "http://localhost:3500";
let productsEndpoint = "/products";
let oneProductEndpoint = "/product/";

fetch(baseURL + productsEndpoint)
	.then((response) => response.json())
	.then((data) => {
		data.forEach((item) => {
			let container = document.createElement("div");
			let productLink = document.createElement("a");

			// Opret en URL med produktets ID som parameter
			let productURL = `${baseURL}${oneProductEndpoint}${item.id}`;
			productLink.href = productURL;

			let image = document.createElement("img");
			let h4 = document.createElement("h4");
			let p = document.createElement("p");
			let h5 = document.createElement("h5");

			image.src = item.image;
			h4.innerText = item.name;
			p.innerText = item.description;
			h5.innerText = `Kr. ${parseFloat(item.price).toLocaleString("da-DK", {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})}`;

			productLink.appendChild(image);
			productLink.appendChild(h4);
			productLink.appendChild(p);
			productLink.appendChild(h5);

			container.appendChild(productLink);

			// Tilføj en klikbegivenhed for at håndtere produktklik
			productLink.addEventListener("click", function (event) {
				event.preventDefault();
				handleProductClick(item.id);
			});

			mostPopular.appendChild(container);
		});
	});

// Funktion til at håndtere produktklik
function handleProductClick(productId) {
	//her skal der laves en sti til en produkt side
	console.log("Klikket på produkt med ID:", productId);
}
