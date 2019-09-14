// // show cart 
// const cart = document.getElementById("cart");

// function showCart() {
//   const cartInfo = document.getElementById("cart-info");
//   cartInfo.addEventListener("click", function (e) {
//     cart.classList.toggle("show-cart");
//   });
// };

// showCart();

// function addItemToCart() {
//   const cartBtn = document.querySelectorAll(".store-item-icon");
//   cartBtn.forEach(function (btn) {
//     btn.addEventListener("click", function (event) {

//       //   console.log(event.target);
//       if (event.target.parentElement.classList.contains("store-item-icon")) {
//         let fullPath = event.target.parentElement.previousElementSibling.src;
//         let pos = fullPath.indexOf("img") + 3;
//         let pathPath = fullPath.slice(pos);

//         //object item 

//         const item = {};
//         item.img = `img-cart` + pathPath;

//         let properties = event.target.parentElement.parentElement.nextElementSibling;
//         item.name = properties.children[0].children[0].textContent;
//         item.price = properties.children[0].children[1].children[0].textContent;


//         // tạo 1 div item cart 

//         const cartItem = document.createElement('div');

//         cartItem.classList.add(
//           "cart-item",
//           "d-flex",
//           "justify-content-between",
//           "text-capitalize",
//           "my-3"
//         );

//         cartItem.innerHTML = `
//           <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
//             <div class="item-text">
//               <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
//               <span>$</span>
//               <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
//             </div>
//             <a href="#" id='cart-item-remove' class="cart-item-remove">
//               <i class="fas fa-trash"></i>console.log('hehehe');
//             </a>
//           </div>
//         `;

//         const total = document.querySelector(".cart-total-container");

//         cart.insertBefore(cartItem, total);

//         showTotals();

//       }
//     });
//   });

//   // show price 

//   function showTotals() {
//     const total = [];
//     const items = document.querySelectorAll('.cart-item-price');

//     items.forEach(function (item) {
//       total.push(parseFloat(item.textContent));
//     });

//     const totalMoney = total.reduce(function (item, price) {
//       money = item + price;
//       return money;
//     })
//     document.getElementById('cart-total').textContent = totalMoney;
//     document.getElementById('item-count').textContent = total.length;
//     document.querySelector('.item-total').textContent = totalMoney;//????



//   }

// };

// addItemToCart();