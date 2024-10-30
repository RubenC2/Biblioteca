# Biblioteca

Este proyecto es una aplicación que muestra libros por categorías obtenidos de una API externa. Se pueden ver y navegar tanto las temáticas como los detalles específicos de cada libro y acceder al enlace de compra en Amazon.

![NYT](https://github.com/user-attachments/assets/974297fb-6266-4fae-8f79-e9f92c37ba91)


<u>Tabla de Contenidos</u>

:books: Descripción

:books: Lenguajes y herramientas 

:books: Características

:books: Instalación

:books: Uso

:books: Contribuciones

:books: Licencia

------------------------------------------------------------------------------------------------------------
**Descripción**
---
Esta aplicación funciona mediante peticiones asíncronas a la API de libros de New York Times. Nos muestra 59 listas por temática con sus respectivos libros, de los que podemos leer más detalles e incluso ir de forma directa al enlace de Amazon para comprarlos. La aplicación tiene una interfaz intuitiva y fácil de usar y está pensada para ser ejecutada tanto en móvil como en navegador web ya que es responsive.

![image](https://github.com/user-attachments/assets/a4693847-4350-4051-b459-414014a8ff7e)


**:hammer_and_wrench: Lenguajes y herramientas:**
---
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>

</div>

**Características**
---
- **Listas de libros**: Visualización de las diferentes listas de libros con nombre, algunos detalles y el enlace de acceso.
- **API de Libros**: Los datos se obtienen de dos endpoints de la API de New York Times Books para garantizar contenido actualizado.
- **Detalles de los libros**: Información detallada sobre cada libro, incluyendo semanas que lleva en la lista y un enlace de compra a Amazon.
- **Botón de regreso**: Un botón que permite volver a la ventana principal desde la vista del detalle de los libros.
- **Loader**: Contiene un loader para indicar que el contenido se está cargando.

**Instalación**
---
Clona este repositorio:

*git clone https://github.com/RubenC2/Biblioteca*

Navega al directorio del proyecto:

*cd Biblioteca*

Abre el archivo index.html en tu navegador para ejecutar la aplicación.


**Uso**
---

1. Al abrir la aplicación se mostrarán las lista de libros obtenida de la API.
2. Haz clic en cualquier lista para ver los libros que contiene y sus detalles adicionales.
3. Utiliza el botón "Back to Index" para regresar a la lista principal.
4. Puedes utilizar el botón "Buy at amazon" para ir de forma directa al enlace de compra.

Además, en las siguientes versiones...

<img src="https://github.com/devicons/devicon/blob/master/icons/firebase/firebase-plain-wordmark.svg" title="Firebase" alt="Firebase" width="40" height="40"/>&nbsp;
Gracias a la autenticación en Firebase se podrán guardar los libros en favoritos, entre otras funciones.

**Contribuciones**
---
*Si deseas contribuir a este proyecto, puedes hacerlo de la siguiente manera:*

Haz un fork del repositorio.

Crea una rama nueva (git checkout -b feature-nueva-característica).

Realiza tus cambios y haz commit (git commit -am 'Añadir nueva característica').

Sube tus cambios (git push origin feature-nueva-característica).

Abre un pull request y describe tus cambios.

¡Gracias por tu aportación!

**Licencia**
---
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.
