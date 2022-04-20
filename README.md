# Dark/Light Theme

## ¿Cómo lo hacemos?
- Usamos "use-local-store", este hook usa Local Storage lo que nos va a permitir almacenar nuestra elección de tema. Lo podemos hacer con un useState pero al recargar la web va a volver a su valor por defecto.
- Creamos una funcion la cual va a manejar el cambio de tema. Si el tema es "light" lo cambia a "dark" y viceversa.
- Creamos un contenedor y colocamos un boton. El boton debe tener un onClick el en donde colocamos la funcion que creamos anteriormente.
- Es importante que el contenedor tenga "data-theme={theme}", donde el valor de theme va a cambiar entre "light" y "dark".
- En el css 
    - Creamos variables con :root
    - Creamos un [data-theme='dark'] con las mismas variables pero con valores distintos.
    - Asignamos estilos utilizando las variables creadas.

## Explicación del funcionamiento
- Al abrir por primera vez el sitio, el valor por defecto de `theme` va a ser "light". El hook nos va a permitir almacenar esta key "theme" con ese valor. No es necesario que se llame "theme" nuestra key, pero es recomendable que asi sea asi sabemos que hacer referencia al mismo.
- Cuando se renderiza nuestro codigo en pantalla, vamos a ver que nuestro tema es light, pero no es por el valor con el que inicializamos la variable, y aca es donde entra en juego el contenedor con "data-theme={theme}".
- El primer valor va a ser light, el cual no va a coincidir con nuestro data-theme que creamos en el css, entonces va a tomar por defecto los valores que tenga :root. Es por esto que si dejo un string vacio o pongo cualquier otro string me va a seguir tomando light.
- Al hacer click en el boton, ahi si se va a tomar el data-theme que creamos en el css, y nuestros estilos van a cambiar.
- Saber esto nos permite entender como funciona y crear más temas de colores por ejemplo.
- El tema que el valor inicial sea "light" tiene que ver con la funcion que creamos para cambiar nuestro tema. Si le dejamos un string vacio por defecto, al el primer click de cambiar de tema se va a poner con valor "light" y recien al segundo click va a cambiar a "light". Esto no representa una buena UX porque el usuario puede llegar a pensar que el boton no funciona por lo que recomiendo dejarlo como esta.

# Librerías

- [use-local-storage](https://www.npmjs.com/package/use-local-storage)
    - `npm i use-local-storage`
    - "use-local-storage": "^2.2.4"

    ## Notas 📢

- [Axel Mullins](https://github.com/AxelMullins) 💻
- Encontrame en [LinkedIn](https://www.linkedin.com/in/axel-mullins/)