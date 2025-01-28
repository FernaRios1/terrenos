const propiedades_venta = [
  {
      nombre: "SAN ROBERTO",
      descripcion: "Industrial Inofensivo",
      detalle: "Excelente Conectividad",
      ubicacion: " 1,5 kilómetros Ruta 5 Norte Lo Pinto- Lampa ",
      mt2: 5000,
      lotes: 24,
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SxF1aIkI3fA?si=vCMNCbdbl6sG8iS9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
      nombre: "CONDOMINIO KILOMETRO 12",
      descripcion: "Uso Industrial Riesgoso",
      detalle: "Condominio Industrial Urbano",
      ubicacion: "Km 12 ruta Antofagasta-Calama Excelente Conectividad con todas las Empresas Mineras",
      mt2: 2500,
      lotes: 20,
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mxtF3UmJIQk?si=jrVO7iRDsQPEnKud" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },

];

function renderizarPropiedades(arreglo, contenedor) {
  const div = document.getElementById(contenedor);
  div.innerHTML = arreglo.map((propiedad) => {
      return `
          <div class="col-md-6 col-lg-4 mb-4">
              <div class="card">
                  <div class="video-container">
                      ${propiedad.video}
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">${propiedad.nombre}</h5>
                      <p class="card-text"><strong>${propiedad.descripcion}</strong></p>
                      <p class="card-text">${propiedad.detalle}</p>
                      <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                      <p><i class="fas fa-expand-arrows-alt"></i> ${propiedad.mt2} mt²</p>
                      <p><i class="fas fa-layer-group"></i> Lotes: ${propiedad.lotes}</p>
                  </div>
              </div>
          </div>`;
  }).join("");
}

// Renderizar propiedades en index.html
renderizarPropiedades(propiedades_venta, "contenedor-venta");
