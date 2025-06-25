// Selecciona el botón de hamburguesa
const menuToggle = document.querySelector('.menu-toggle');

// Selecciona el menú móvil
const mobileMenu = document.querySelector('.mobile-menu');

// Evento para abrir/cerrar el menú móvil
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Evento para cerrar el menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    mobileMenu.classList.remove('active');
  }
});
