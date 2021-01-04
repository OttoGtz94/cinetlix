export const containerMovie = document.querySelector(".containerMovie");

import { mostrarHTML, errorDiv } from "./show-html";
import { concatURL, intervalTime } from "./functions";
import { btnMovie } from "../app";

const url1 = "http://www.omdbapi.com/?t=";
const keyApi = "&apikey=75fa5ac5";
let txtMovie = document.querySelector("#txtMovie");

export function searchMovie() {
  if (txtMovie.value === "") {
    errorDiv("Campo Vacio");
    let containerError = document.querySelector(".containerError");
    intervalTime(containerError);
    return;
  } else {
    let movie = txtMovie.value;
    let api = concatURL(url1, movie, keyApi);
    infoAPI(api);
    txtMovie.value = "";
  }
}

function infoAPI(url) {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      if (resultado.Error === "Movie not found!") {
        errorDiv("Película no encontrada");
        let containerError = document.querySelector(".containerError");
        intervalTime(containerError);
        return;
      } else return mostrarHTML(resultado);
      
    })
    .catch((error) => console.log(error));
}
