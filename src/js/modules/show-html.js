import { containerMovie } from "./connect-api";
import {
  spanSub,
  configElementHTML,
  createElement,
  createSpan,
  addClass,
} from "./functions";

export function mostrarHTML(infoMovie) {
  clearHtml();
  let containerImg = createElement("div");
  addClass(containerImg, "containerImg");
  let img = createElement("img");
  addClass(img, "imgMovie");
  img.src = infoMovie.Poster;
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
  /* let icoAwards = '<i class="fas fa-trophy icoAwards"></i>';
  containerAwards.innerHTML = icoAwards; */
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
