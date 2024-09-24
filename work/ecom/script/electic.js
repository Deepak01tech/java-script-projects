let navbar = document.getElementById("navbar");
import nav from "../script/navbar.js";
nav(); // Call the navigation function
navbar.innerHTML = nav();

let api = "https://fakestoreapi.com/products/category/electronics";
import { getData, display } from "../script/fetch.js";

let a = await getData(api);
//  console.log(a)

display(a);
