document.addEventListener("DOMContentLoaded", () => {
  const filas = document.querySelectorAll("table tbody tr");
  let lider = null;
  let maxPuntos = -1;

  filas.forEach(fila => {
    const puntos = parseInt(fila.children[3].textContent);
    if (puntos > maxPuntos) {
      maxPuntos = puntos;
      lider = fila;
    }
  });
  if (lider) {
    lider.classList.add("lider");

    const nombre = lider.children[1].textContent;
    const equipo = lider.children[2].textContent;
    document.getElementById("mensaje-lider").textContent =
      `🔥 El líder actual es ${nombre} de ${equipo} con ${maxPuntos} puntos.`;
  }
});
document.querySelectorAll("tbody tr").forEach(fila => {
  fila.addEventListener("mouseenter", () => {
    fila.style.backgroundColor = "#ffe0b2";
  });
  fila.addEventListener("mouseleave", () => {
    fila.style.backgroundColor = "";
  });
});
 const tabla = document.querySelector("table");
  const filas = Array.from(tabla.querySelectorAll("tbody tr"));
  const encabezadoPuntos = tabla.querySelectorAll("th")[3];

  let ordenAscendente = false;

  encabezadoPuntos.style.cursor = "pointer";
  encabezadoPuntos.title = "Haz clic para ordenar por puntos";

  encabezadoPuntos.addEventListener("click", () => {
    ordenAscendente = !ordenAscendente;

    filas.sort((a, b) => {
      const puntosA = parseInt(a.children[3].textContent);
      const puntosB = parseInt(b.children[3].textContent);
      return ordenAscendente ? puntosA - puntosB : puntosB - puntosA;
    });

    const cuerpo = tabla.querySelector("tbody");
    cuerpo.innerHTML = "";
    filas.forEach(fila => cuerpo.appendChild(fila));
  });
  document.getElementById("buscador").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  document.querySelectorAll("tbody tr").forEach(fila => {
    const piloto = fila.children[1].textContent.toLowerCase();
    fila.style.display = piloto.includes(texto) ? "" : "none";
  });
});
