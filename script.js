    // Obtener el elemento en el que queremos mostrar la posición del cursor
    var cursorPositionElement = document.getElementById("cursorPosition");

    // Función para actualizar la posición del cursor
    function updateCursorPosition(event) {
      var x = event.clientX; // Posición X del cursor
      var y = event.clientY; // Posición Y del cursor
      var backgroundStyle = "radial-gradient(600px at "+x+"px "+y+"px, rgba(29, 78, 216, 0.15), transparent 80%)";
      var body = document.body;
// Aplica el estilo al fondo del <body>
        body.style.background = backgroundStyle;
      
      // Actualizar el contenido del elemento con la posición del cursor
      cursorPositionElement.innerHTML = "Posición del cursor: (" + x + ", " + y + ")";
    }

    // Agregar un evento de escucha al elemento o a toda la página
    document.addEventListener("mousemove", updateCursorPosition);
    var lineElements = document.querySelectorAll("#static>ul>li");


function agrandar(element){
    element.firstChild.style.border = "1px solid white";
    element.firstChild.style.width = "3rem";
    element.lastChild.style.color = "white";
    element.firstChild.style.color="#7889A7";
}
function achicar(element){
    element.firstChild.style.border = "1px solid #7889A7";
    element.firstChild.style.width = "2rem";
    element.lastChild.style.color = "#7889A7";
    element.lastChild.style.color="#7889A7";
}
// Agrega un evento de clic a cada elemento <li> con la clase "line"
lineElements.forEach(function(element) {
  element.addEventListener("click", function(indexo) {
    lineElements.forEach(function(element2){
        if(element==element2){
            element2.firstChild.classList.add("linea-grande");
            element2.firstChild.classList.remove("linea-chica");
            element2.lastChild.classList.add("letra-grande")
            element2.lastChild.classList.remove("letra-chica")
        }else{
            element2.firstChild.classList.add("linea-chica");
            element2.lastChild.classList.add("letra-chica")
            element2.firstChild.classList.remove("linea-grande");
            element2.lastChild.classList.remove("letra-grande")
            
        }
    })
   
    // Aplica los estilos al hacer clic
    
  });
  

  
 
});
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a[href^="#"]');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(e) {
            e.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth" // Desplazamiento suave
                });
            }
        });
    }
});
