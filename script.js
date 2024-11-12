// Obtener elementos
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.querySelector(".close");
const applyFilters = document.getElementById("applyFilters");

// Abrir el modal
openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

// Cerrar el modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la caja
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Aplicar filtros
applyFilters.onclick = function() {
    const category = document.getElementById("category").value;
    const priceMin = document.getElementById("priceMin").value;
    const priceMax = document.getElementById("priceMax").value;

    console.log("Categoría:", category);
    console.log("Precio Mínimo:", priceMin);
    console.log("Precio Máximo:", priceMax);

    // Aquí puedes agregar tu lógica para filtrar los elementos según los valores seleccionados

    modal.style.display = "none"; // Cerrar modal después de aplicar filtros
}
