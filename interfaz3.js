const detalles = document.getElementById('infoParqueadero');
const resumen = document.getElementById('resumen');

detalles.addEventListener('toggle', () => {
  if (detalles.open) {
    resumen.style.display = 'none';
  } else {
    resumen.style.display = 'block';
  }
});
