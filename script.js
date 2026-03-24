// Cart System
let cartCount = 0;
let total = 0;

function addToCart(product, price) {

  alert(product + " added to cart 🛒");

  // increase cart count
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;

  // add item to cart list
  let cartItems = document.getElementById("cart-items");

  let li = document.createElement("li");
  li.textContent = product + " - ₹" + price;

  cartItems.appendChild(li);

  // update total price
  total += price;
  document.getElementById("total").textContent = total;
}

// Contact Form
let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

  e.preventDefault(); // stop page reload

  alert("Message sent successfully ✅");

  form.reset(); // clear form

});