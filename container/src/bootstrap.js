import {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';

console.log("container")

productMount(document.querySelector('.products'));
cartMount(document.querySelector('.cart'));