document.addEventListener("DOMContentLoaded", function(event) {

  const cuadrados = document.querySelectorAll('.cuadrado');

  const body = document.querySelector('body');



  function cambiarColor(e) {

	var color = document.defaultView.getComputedStyle(e.target).getPropertyValue('background-color')

    body.style.setProperty('background-color', color);

  }



  for (let i = 0; i < cuadrados.length; i++) {

    cuadrados[i].addEventListener('click', cambiarColor);

  }

});