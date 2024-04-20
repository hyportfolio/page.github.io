// Selecciona todas las imágenes de la galería
const images = document.querySelectorAll('.gallery img');

// Selecciona el modal y el elemento para cerrar el modal
const modal = document.getElementById("myModal");
const closeModal = modal.querySelector(".close");

// Recorre cada imagen y agrega un event listener para abrir el modal
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = "block";
    const modalImg = modal.querySelector("#modalImage");
    modalImg.src = image.src;
    const captionText = modal.querySelector("#caption");
    captionText.innerHTML = image.alt;
  });
});

// Agrega un event listener para cerrar el modal al hacer clic en el botón de cerrar
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cierra el modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
