document.addEventListener('DOMContentLoaded', function () {
    var imagen = document.querySelector('#profile-picture img');
  
    function mostrarMensaje() {
      alert('Hola! 👋, este es un mensaje secreto');
    }
  
    imagen.addEventListener('click', mostrarMensaje); // Un Click
    //imagen.addEventListener('dblclick', mostrarMensaje); // Dos Click
});