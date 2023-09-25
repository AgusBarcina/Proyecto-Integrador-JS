const cart = document.getElementById("cart");

function addItem() {
  const itemName = prompt("ingrese el nombre de la prenda a agregar al carrito!:");

  const item = document.createElement("li");


  item.textContent = itemName;

  cart.appendChild(item);
}

function removeItem() {
  const index = prompt("Ingrese la prenda a retirar del carrito:");

  cart.removeChild(cart.children[index]);
}

function checkout() {
  const totalPrice = 0;
  for (const item of cart.children) {
    totalPrice += item.textContent;
  }
  alert(`el precio total es de: $${totalPrice}.`);
}
const featuredProducts = document.querySelector('.featured-products');

const products = [
  {
    name: 'Buzo',
    price: '$69.99',
    image: 'product-image.jpg'
  },
  {
    name: 'Short',
    price: '$39.99',
    image: 'product-image.jpg'
  },
  {
    name: 'Remera',
    price: '$49.99',
    image: 'product-image.jpg'
  }
];
var iconoMenu = document.querySelector(".icono_menu_desplegable");

function desplegarMenu(){
    var menuDesplegable = document.querySelector(".contenedor_paginas");
    menuDesplegable.classList.toggle("desplegar_menu");

}

iconoMenu.addEventListener("click", desplegarMenu);
