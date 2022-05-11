import faker from 'faker';

let cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

// console.log(products);
document.querySelector('.dev-cart').innerHTML = cartText;