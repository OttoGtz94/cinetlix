import { containerMovie } from "./connect-api";
import {
  spanSub,
  configElementHTML,
  createElement,
  createSpan,
  addClass,
  intervalTime
} from "./functions";
import image404 from "../../img/notFound404.jpg";

export function mostrarHTML(infoMovie) {
  clearHtml();
  /* Spinner()
  let spinnerLoad = document.querySelector(".spinner");
  intervalTime(spinnerLoad); */
 /*  Spinner();
  let spinnerLoad = document.querySelector(".spinner");
  setTimeout(() => {
    spinnerLoad.remove()
  }, 3000); */
  let containerImg = createElement("div");
  addClass(containerImg, "containerImg");
  let img = createElement("img");
  addClass(img, "imgMovie");
  infoMovie.Poster === "N/A"
    ? (img.src = image404)
    : (img.src = infoMovie.Poster);

  addClass(img, "imgMovie");
  containerImg.appendChild(img);
  containerMovie.appendChild(containerImg);

  let containerInfoMovie = createElement("div");
  addClass(containerInfoMovie, "containerInfoMovie");

  let titleMovie = createElement("h3");
  let icoTitle = createElement("i");
  addClass(titleMovie, "titleMovie");
  addClass(icoTitle, "fas", "fa-film");
  titleMovie.innerHTML = `<i class="fas fa-film"></i> ${infoMovie.Title}`;
  containerInfoMovie.appendChild(titleMovie);
  containerMovie.appendChild(containerInfoMovie);

  let subcontainerInfoMovie = createElement("div");
  addClass(subcontainerInfoMovie, "subcontainerInfoMovie");
  containerInfoMovie.appendChild(subcontainerInfoMovie);
  spanSub(
    subcontainerInfoMovie,
    infoMovie
  ); /* Agregamos los span de la funcion spanSub con parametros de su padre y del contenido */

  /* Creamos el parrafo de la sinopsis */
  let plotMovie = createElement("p");
  configElementHTML(plotMovie, "plotMovie", containerInfoMovie, infoMovie.Plot);

  /* Creamos contenedor para reconocimientos */
  let containerAwards = createElement("div");
  containerInfoMovie.appendChild(containerAwards);

  /* Creamos icono de recocimientos */
  let icoAwards = createElement("i");
  icoAwards.classList.add("fas", "fa-trophy", "icoAwards");
  containerAwards.appendChild(icoAwards);

  let awardsMovie = createSpan();
  configElementHTML(
    awardsMovie,
    "awardsMovie",
    containerAwards,
    `${infoMovie.Awards} `
  );

  let actorsMovie = createSpan();
  configElementHTML(
    actorsMovie,
    "actorsMovie",
    containerInfoMovie,
    infoMovie.Actors
  );

  let ticketMovie = createSpan();
  ticketMovie.innerHTML = `<br><i class="fas fa-ticket-alt"></i> ${infoMovie.BoxOffice}`;
  addClass(ticketMovie, "ticketMovie");
  containerInfoMovie.appendChild(ticketMovie);
}

export function errorDiv(mensaje) {
  clearHtml();
  let containerError = createElement("div");
  configElementHTML(containerError, "containerError", containerMovie, mensaje);
}

function clearHtml() {
  while (containerMovie.children.length > 0) {
    containerMovie.firstElementChild.remove();
  }
}

export function Spinner() {
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("spinner");
  divSpinner.innerHTML = `
    <div class="dot1"></div>
    <div class="dot2"></div>
  `;
  containerMovie.appendChild(divSpinner)
}
