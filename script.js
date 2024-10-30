let apiKey = "ed123cIAvxUeGGS4wFQzqYJiUKzYupNG";


async function getDataList() {
    try {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=ed123cIAvxUeGGS4wFQzqYJiUKzYupNG');
        const data = await response.json();
        const results = data.results.map(item => ({
            name: item.list_name,
            dateOld: item.oldest_published_date,
            dateLast: item.newest_published_date,
            dateUpdate: item.updated,
            link: item.list_name_encoded
        }));

        // Llama a "pintarListas" y pásale los resultados procesados
        pintarListas(results);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}


// Función para crear y pintar tarjetas en el DOM
function pintarListas(listaData) {
    const container = document.getElementById("tarjetas-container");

    // Limpia el contenedor para evitar duplicados en cada llamada
    container.innerHTML = '';

    listaData.forEach(lista => {
        // Crear el div de la tarjeta
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // Crear y añadir el nombre de la lista
        const name = document.createElement("h3");
        name.textContent = lista.name;
        tarjeta.appendChild(name);

        // Crear y añadir fecha de publicación más antigua
        const dateOld = document.createElement("p");
        dateOld.textContent = `Oldest: ${lista.dateOld}`;
        tarjeta.appendChild(dateOld);

        // Crear y añadir fecha de publicación reciente
        const dateLast = document.createElement("p");
        dateLast.textContent = `Newest: ${lista.dateLast}`;
        tarjeta.appendChild(dateLast);

        // Crear y añadir frecuencia de actualización
        const dateUpdate = document.createElement("p");
        dateUpdate.textContent = `Updated: ${lista.dateUpdate}`;
        tarjeta.appendChild(dateUpdate);

        // Crear y añadir el link para hacer fetch al hacer click
        const link = document.createElement("a");
        link.href = "#"; // Evitar comportamiento por defecto del link
        link.textContent = "Ver lista";
        // Contenedor para detalles de libros
        const bookDetailsContainer = document.createElement("div");
        bookDetailsContainer.classList.add("book-details");
        bookDetailsContainer.style.display = "none"; // Oculto inicialmente

        // const tituloLista = document.createElement('h1');
        // tituloLista.className = 'listTitle';
        // tituloLista.innerHTML = lista.name; 

        tarjeta.appendChild(bookDetailsContainer);
        //bookDetailsContainer.appendChild(tituloLista);

        link.addEventListener("click", async (event) => {
            event.preventDefault(); // Evita que el link recargue la página
            container.innerHTML = '';

            try {
                const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${lista.link}.json?api-key=ed123cIAvxUeGGS4wFQzqYJiUKzYupNG`);
                const data = await response.json();

                // Crea HTML para los detalles de los libros 
                const bookDetailsHTML = data.results.books.map(book => `
                    <div class="book-detail">
                        <img class="img_width" src="${book.book_image}" alt="${book.title}">
                        <h4>${book.title}</h4>
                        <p>Semanas en la lista: ${book.weeks_on_list}</p>
                        <p>Descripción: ${book.description}</p>
                        <p>Posición: ${book.rank}</p>
                        <a href="${book.amazon_product_url}" target="_blank">Comprar en Amazon</a>
                    </div>
                `).join('');
                container.innerHTML = bookDetailsHTML; // Agrega el HTML de los libros al contenedor


            } catch (error) {
                console.error("Error al obtener los detalles de la lista:", error);
            }
        });

        tarjeta.appendChild(link);
        container.appendChild(tarjeta);
    });
}

// Llamar a la función para obtener y pintar las tarjetas
getDataList();


