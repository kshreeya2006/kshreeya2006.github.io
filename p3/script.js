const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const showProducts = () => {
    const root= document.getElementById("root");
    

    products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    root.appendChild(card);
  });
};

function addToCart(id) {
  const product = products.find(p => p.id === id);
  alert(`${product.name} added to cart!`);
}