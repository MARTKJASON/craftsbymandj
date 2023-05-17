

function home() {
  document.getElementById("home").style.display = "block";
    document.getElementById("crochet").style.display = "block";
    document.getElementById("rings").style.display = "block";
    document.getElementById("taslan").style.display = "block";
    document.getElementById("Promos").style.display = "none";
  
  }
function crochet() {
  document.getElementById("crochet").style.display = "block";
  document.getElementById("rings").style.display = "none";
  document.getElementById("taslan").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("Promos").style.display = "none";

}
function rings() {
  document.getElementById("crochet").style.display = "none";
  document.getElementById("rings").style.display = "block";
  document.getElementById("taslan").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("Promos").style.display = "none";

}
function taslan() {
  document.getElementById("home").style.display = "none";
  document.getElementById("crochet").style.display = "none";
  document.getElementById("rings").style.display = "none";
  document.getElementById("taslan").style.display = "block";
  document.getElementById("Promos").style.display = "none";

}

function promos(){
   document.getElementById("home").style.display = "none";
    document.getElementById("crochet").style.display = "none";
    document.getElementById("rings").style.display = "none";
    document.getElementById("taslan").style.display = "none";
    document.getElementById("Promos").style.display = "block";

}



let counter = document.getElementById("markNum");



function addToCart(itemName, itemPrice) {

  const item = {
    id: Date.now(),
    name: itemName,
    price: itemPrice,
  };

  const jsonData = localStorage.getItem("localItems");
  let localItems = [];
  if (jsonData) {
    localItems = JSON.parse(jsonData);
  }
  localItems.push(item);
 

  const newJsonData = JSON.stringify(localItems);
  localStorage.setItem("localItems", newJsonData);
  
  Swal.fire(itemName + ' has been added to your cart.');
  

  const counter = JSON.parse(localStorage.getItem("localItems"));

  let itemCount = counter.length;


  
  console.log(`There are ${itemCount} items in the cart array.`);
  counter.innerHTML=`${itemCount}`;





}

displayCart();


// define the function to display the contents of the cart

function removeData(index) {
  // Find the index of the item with the matching ID in the cart array
  const jsonData = localStorage.getItem("localItems");
  let localItems = [];
  if (jsonData) {
    localItems = JSON.parse(jsonData);
  }


  localItems.splice(index, 1);


  const newJsonData = JSON.stringify(localItems);

  localStorage.setItem("localItems", newJsonData);

  window.location.reload()

       counter = JSON.parse(localStorage.getItem("localItems"));

      const itemCount = counter.length;
      
      console.log(`There are ${itemCount} items in the cart array.`);
  
     
  displayCart();

}

function displayCart() {
  const jsonData = localStorage.getItem("localItems");
  if (!jsonData) {
    return;
  }

  const localItems = JSON.parse(jsonData);

  let html = "";
  for (let i = 0; i < localItems.length; i++) {
    html += `
          <li> ${localItems[i].name}  => ₱ ${localItems[i].price} 
          <button onclick="removeData(${i})"  class="removeData">Remove</button> <br>   </li> 
        `;
    let cartItems = JSON.parse(localStorage.getItem("localItems"));
    let totalPrice = 0;

    cartItems.forEach(function (item) {
      document.getElementById("cart-price").innerHTML = `${totalPrice += item.price}`;
      // totalPrice += item.price;
    });

  
  }
  document.getElementById("cart-items").innerHTML = html;


}

displayCart();



