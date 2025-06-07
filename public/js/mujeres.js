document.addEventListener('DOMContentLoaded', () =>{
    const mostrarRopas = document.querySelector('.productos-solo-deportes');

    async function mostrarRopasMujeres() {
        try {
            const response = await fetch('/mujeres');
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
    mostrarRopasMujeres(); // Llamada automática al cargar la página
})