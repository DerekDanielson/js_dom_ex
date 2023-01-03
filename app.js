let greeting = 'Hi! ';
let name = 'Bob';
let message = ', please check your order';
let welcome = greeting + name + message;


//Create variables to hold details about the sign
let sign = 'Simpson House';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
var grandTotal = subTotal + shipping;


//Get element that has an id of greeting
let el = document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent = welcome;


//Get element that has an id of userSign
let elSign = document.getElementById('userSign');
elSign.textContent = sign;


//Get element that has an id of tiles
let elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;


//Get element id subTotal
let elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;


//Get element id shipping
let elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;


//Get element id grandTotal
let elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;






















