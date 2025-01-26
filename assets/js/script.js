const propiedades_venta = [
  {
    nombre: "SAN ROBERTO-LAMPA",
    video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/i0N8kwJC6AE' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "LO PINTO",
    habitaciones: 4,
    banios: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "KM 12 - ANTOFAGASTA",
    video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/mxtF3UmJIQk?si=Xs8GUyFJ8jajfaGL' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "ANTOFAGASTA",
    habitaciones: 2,
    banios: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
];

function renderizarPropiedades(arreglo, contenedor) {
  const div = document.getElementById(contenedor);
  div.innerHTML = arreglo
    .map((propiedad) => {
      return `
        <div class="col-md-4 mb-4">
          <div class="card">
            <!-- Contenedor para el video -->
            <div class="video-container">${propiedad.video || ""}</div>
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedad.banios} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                <i class="${propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i>
                ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
              </p>
              <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"}"></i>
                ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
            </div>
          </div>
        </div>`;
    })
    .join("");
}

// Renderizar propiedades en index.html
renderizarPropiedades(propiedades_venta.slice(0, 3), "contenedor-venta");
