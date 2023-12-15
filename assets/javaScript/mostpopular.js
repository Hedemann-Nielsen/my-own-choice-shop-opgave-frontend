let mostPopular = document.getElementById("most-popular");

let url = "http://localhost:3500/products";

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		data.forEach((item) => {
			let container = document.createElement("container");
			let image = document.createElement("img");
			let h4 = document.createElement("h4");
			let p = document.createElement("p");
			let h5 = document.createElement("h5");
			let button = document.createElement("button");
			let stock = document.createElement("div");

			image.src = item.image;
			h4.innerText = item.name;
			p.innerText = item.description;
			h5.innerText = item.price;
			button.innerText = item.price;
			stock.innerText = item.stock;

			console.log(item.image);
			container.appendChild(image);
			container.appendChild(h4);
			container.appendChild(p);
			container.appendChild(h5);
			container.appendChild(button);
			container.appendChild(stock);

			mostPopular.appendChild(container);
		});
	});
