# CINETLIX

Proyecto donde se ingresa el nombre de una película y la busca en la API *REST OMDB API*.

### Tecnologías usadas

- ECMAScript 6
- Webpack 
- Babel
- Sass


### Distribuciones de carpetas
La carpeta **src** contiene los archivos en modo *desarrollo* y la carpeta **public** en modo *producción*. 

### Probar el proyecto en modo **Producción**
Descargue la carpeta **public** y abra *index.html* en el navegador. 

### Probar el proyecto en modo **Desarrollo**
Descargue el proyecto completo e inicielo en node
>npm install

Se instalaran todas las dependencias registradas en *package.json*.

Ahora para correr el proyecto por consola se corre el script *dev*
>npm run dev

Correra por *localhost:9001*, para cambiar el puerto se hará desde el archivo *webpack.config.js* en **devServer**.