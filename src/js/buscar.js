// Mostrar u ocultar el botón según el scroll
window.addEventListener("scroll", () => {
    const backToStartBtn = document.querySelector(".back-to-start");

    if (window.scrollY > 200) {
        backToStartBtn.style.display = "block";
    } else {
        backToStartBtn.style.display = "none";
    }
});

// Scroll suave al inicio
document.querySelector(".back-to-start").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Data quemada de guarderías
const guarderias = [
  { id: 1, nombre: "Pequeños Genios", direccion: "Cra. 15 #23-45, Bogotá", telefono: "3101234567" },
  { id: 2, nombre: "Mi Primer Hogar", direccion: "Calle 45 #10-12, Medellín", telefono: "3147654321" },
  { id: 3, nombre: "Sonrisas Infantiles", direccion: "Av. 7 #65-30, Cali", telefono: "3119876543" },
  { id: 4, nombre: "Pasitos Felices", direccion: "Cl. 80 #12-50, Barranquilla", telefono: "3001112233" },
  { id: 5, nombre: "Estrellitas Brillantes", direccion: "Cra. 9 #20-18, Bucaramanga", telefono: "3025556677" }
];

// Lógica de búsqueda
const inputBuscar = document.getElementById("searchInput");
const resultados = document.getElementById("resultados");

inputBuscar.addEventListener("input", () => {
  const query = inputBuscar.value.toLowerCase();
  resultados.innerHTML = ""; // limpiar resultados

  const filtrados = guarderias.filter(item =>
    item.nombre.toLowerCase().includes(query) ||
    item.direccion.toLowerCase().includes(query) ||
    item.telefono.includes(query)
  );

  filtrados.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("resultado-item");
    div.textContent = `${item.nombre} - ${item.direccion} (Tel: ${item.telefono})`;
    resultados.appendChild(div);
  });

  if (filtrados.length === 0 && query !== "") {
    resultados.innerHTML = "<p>No se encontraron guarderías</p>";
  }
});
