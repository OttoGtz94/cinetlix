
export function spanSub(contenedor, infoMovie) {
  let yearMovie = createSpan();
  configElementHTML(yearMovie, "yearMovie", contenedor, infoMovie.Year);

  let ratedMovie = createSpan();
  configElementHTML(ratedMovie, "ratedMovie", contenedor, infoMovie.Rated);

  let genereMovie = createSpan();
  configElementHTML(genereMovie, "genereMovie", contenedor, infoMovie.Genre);

  let runtimeMovie = createSpan();
  configElementHTML(
    runtimeMovie,
    "runtimeMovie",
    contenedor,
    infoMovie.Runtime
  );

  let countryMovie = createSpan();
  configElementHTML(
    countryMovie,
    "countryMovie",
    contenedor,
    infoMovie.Country
  );
}

export function configElementHTML(nombre, clase, padre, contenido) {
  addClass(nombre, clase);
  nombre.textContent = contenido;
  padre.appendChild(nombre);
}

export function createElement(etiqueta) {
  return document.createElement(etiqueta);
}
export function createSpan() {
  return document.createElement("span");
}
export function addClass(elemento, clase, clase2) {
  return elemento.classList.add(clase, clase2);
}

export function concatURL(str1, str2, str3){
  return `${str1}${str2}${str3}`;
}

export function intervalTime(elemento) {
  return setTimeout(() => {
    elemento.remove();
  }, 1500);
}
