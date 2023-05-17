function home() {
  document.getElementById("home").style.display = "block";
    document.getElementById("crochet").style.display = "block";
    document.getElementById("rings").style.display = "block";
    document.getElementById("taslan").style.display = "block";
    document.getElementById("cart").style.display = "none";
    document.getElementById("payment").style.display = "none";
  
  }
function crochet() {
  document.getElementById("crochet").style.display = "block";
  document.getElementById("payment").style.display = "none";
  document.getElementById("rings").style.display = "none";
  document.getElementById("taslan").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("home").style.display = "none";

}
function rings() {
  document.getElementById("crochet").style.display = "none";
  document.getElementById("rings").style.display = "block";
  document.getElementById("taslan").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("home").style.display = "none";

}
function taslan() {
  document.getElementById("home").style.display = "none";
  document.getElementById("crochet").style.display = "none";
  document.getElementById("rings").style.display = "none";
  document.getElementById("taslan").style.display = "block";
  document.getElementById("cart").style.display = "none";
  document.getElementById("payment").style.display = "none";

}

function isCart(){
  document.getElementById("cart").style.display = "block";
    document.getElementById("crochet").style.display = "none";
    document.getElementById("rings").style.display = "none";
    document.getElementById("taslan").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("payment").style.display = "none";

}
function order(){
  document.getElementById("cart").style.display = "block";
    document.getElementById("crochet").style.display = "none";
    document.getElementById("rings").style.display = "none";
    document.getElementById("taslan").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("payment").style.display = "none";

}

// function checkOut(){  
//    document.getElementById("payment").style.display = "block";
//     document.getElementById("cart").style.display = "block";
//     document.getElementById("crochet").style.display = "none";
//     document.getElementById("rings").style.display = "none";
//     document.getElementById("taslan").style.display = "none";
//     document.getElementById("home").style.display = "none";

// }


let cart = [];

// define the function to add an item to the cart
function addToCart(itemName, itemPrice) {
  const item = {
    id: Date.now(),
    name: itemName,
    price: itemPrice,
  };
 


  
  cart.push(item);
  

  displayCart();
  alert(itemName + " has been added to your cart.");
}

// define the function to display the contents of the cart
function displayCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const cartPriceElement = document.getElementById('cart-price');


let total = 0;
let shipFee = 39;
let totalPrice = 0;



    cartItemsElement.innerHTML = "";
    cart.forEach((item) => {
      const itemtoJSON = JSON.stringify(item);
      const itemElement = document.createElement("li");
      localStorage.setItem("item", itemtoJSON);
  
      itemElement.innerHTML = ` 
      <span>${item.name} = > ₱ ${item.price.toFixed(2)}</span> 
       <button onclick="removeFromCart(${item.id})" class="remove">Remove</button> 
       `;
  
      cartItemsElement.appendChild(itemElement);
    

  
      total += item.price;
      totalPrice = shipFee + total;

      cartTotalElement.textContent = totalPrice;
     
     
    });

    cartPriceElement.textContent = `${totalPrice.toFixed(2)}`;


    cartTotalElement.innerText = cart.length;
    
  }

  function removeFromCart(id) {
    // Find the index of the item with the matching ID in the cart array
    const itemIndex = cart.findIndex(item => item.id === id);
    
    // If the item is found, remove it from the cart array
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
    }
    
    // Call the updateCart function to remove the item from the cart display
    displayCart();
  }

 



