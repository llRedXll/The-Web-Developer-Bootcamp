var faker = require('faker');
var divider = "==========================="
var shopBanner = divider + "\n" + "    WELCOME TO MY SHOP" + "\n" + divider;

function shopItems(num){
    for (var i=0; i < num; i++){
        console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
    }
}

console.log(shopBanner);
shopItems(10);
