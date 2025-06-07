//const { listarRopasHombres } = require("../../controller/userController");

/*
document.addEventListener('DOMContentLoaded', () =>
{
    const mostrarRopas = document.getElementsByClassName('productos-solo-deportes');
    // mostrar todas las ropas
    mostrarRopas.addEventListener('DOMContentLoaded', mostrarRopasHombres);

    async function mostrarRopasHombres() {
        const response = await fetch('/hombres');
        const ropas = await response.json();

        //mostrarRopas.innerHTML = '';

        ropas.forEach(ropa => {
            const div = document.createElement('div');

            div.innerHTML = `
                <div class="producto">  
                <img src="public/img/${ropa.imgUrl}" alt="${ropa.nombre}" />
                <p class="precio">${ropa.precio}</p>
                <p class="precio">${ropa.nombre}</p>
                </div>
            `;

            mostrarRopas.appendChild(div);
        });
    }
})


*/

document.addEventListener('DOMContentLoaded', async () => {
    const listaProductos = document.getElementByClassName('producto');
    await listarComidas(); // Llamar a listarComidas al cargar la página



    async function listarProductos() {
        try {
            const response = await fetch('/hombres');
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }
            const productos = await response.json();
            listaProductos.innerHTML = ''; // Limpio la lista de productos

            productos.forEach(producto => {
                 const div = document.createElement('div');

                 div.innerHTML = `
                           <img src="public/img/${productos.imgUrl}" alt="${productos.nombre}" />
                           <p class="precio">${productos.precio}</p>
                           <p class="precio">${productos.nombre}</p>
                `;
                listaProductos.appendChild(div);
            });
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            listaProductos.innerHTML = '<p>Error al cargar productos.</p>';
        }
    }

    //listarProductos(); // Llamada automática al cargar la página
});