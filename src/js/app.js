
/* Imports */
import "../sass/index.scss";
import "../../node_modules/@fortawesome/fontawesome-free/js/brands";
import "../../node_modules/@fortawesome/fontawesome-free/js/solid";
import "../../node_modules/@fortawesome/fontawesome-free/js/fontawesome";
/* Imports funciones */
import { searchMovie } from "./modules/connect-api";

let btnMovie = document.querySelector(".btnMovie");


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Cargado");
    btnMovie.addEventListener("click", () => searchMovie());

})
