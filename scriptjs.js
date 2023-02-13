document.addEventListener("DOMContentLoaded", function(event) {
  const cuadrados = document.querySelectorAll('.cuadrado');
  const body = document.querySelector('body');

  function cambiarColor() {
    body.style.backgroundColor = this.style.backgroundColor;
  }

  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].addEventListener('click', cambiarColor);
  }
});
