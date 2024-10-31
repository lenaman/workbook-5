
let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

//  a.Write code that searches the courses array using the map()function to return only the item name and then use forEach() to display the list of items.
let itemNames = cart.map(product => product.item);
itemNames.forEach(item => console.log(item));


// another way of doing this:

// let itemNames = cart.map(function (item) {
//     return item.item;
//   });
  
//   console.log(itemNames);
  
//   //and then use forEach() to display the list of items.
//   itemNames.forEach(function (itemName) {
//     console.log(itemName);
//   });