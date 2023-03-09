var miImagen = document.getElementById("miImagen");


miImagen.addEventListener("mouseover", function() {

  miImagen.style.width = "300px"; // Cambia el tamaño de la imagen a 150px
});

miImagen.addEventListener("mouseout", function() {

  miImagen.style.width = "200px"; // Restaura el tamaño de la imagen a 100px
});