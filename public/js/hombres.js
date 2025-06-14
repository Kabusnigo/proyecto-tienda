//const { listarRopasHombres } = require("../../controller/userController");


document.addEventListener('DOMContentLoaded', () =>{
    const mostrarRopas = document.querySelector('.productos-solo-deportes');

    async function mostrarRopasHombres() {
        try {
            const response = await fetch('/hombres');
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }
            const ropas = await response.json();

            mostrarRopas.innerHTML = ''; // Limpio la lista antes de agregar nuevos elementos

            ropas.forEach(ropa => {
                const div = document.createElement('div');
                div.classList.add('producto');

                div.innerHTML = `
                    <img src="/img/${ropa.imgUrl}" alt="${ropa.nombre}" />
                    <p class="precio">${ropa.precio}</p>
                    <p class="nombre">${ropa.nombre}</p>
                `;

                mostrarRopas.appendChild(div);
            });
        } catch (error) {
            console.error('Error al obtener ropas:', error);
            mostrarRopas.innerHTML = '<p>Error al cargar ropas.</p>';
        }
    }
    mostrarRopasHombres(); // Llamada automática al cargar la página
})


/*
<img src="/img/${ropa.imgUrl}" alt="${ropa.nombre}" />
"/img/${ropa.imgUrl}" asume que el servidor está sirviendo la carpeta public como raíz y que public/img/ está accesible desde la URL /img/.

Si Express está configurado para servir archivos estáticos con app.use(express.static('public')), entonces el navegador puede acceder a cualquier recurso dentro de public/ usando rutas como /img/nombreImagen.jpg.

*/