function updateCursorPosition(event) {
  let x = event.clientX; // Posición X del cursor
  let y = event.clientY; // Posición Y del cursor
  let backgroundStyle = "radial-gradient(600px at " + x + "px " + y + "px, rgba(29, 78, 216, 0.15), transparent 90%)";
  document.body.style.background = backgroundStyle; // Cambiar el fondo del body
}

// Agregar un evento de escucha al elemento o a toda la página
document.addEventListener("mousemove", updateCursorPosition);

    


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
var lineElements = document.querySelectorAll("#static>ul>li");
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
var imagenesTecnologias = document.querySelectorAll("#tecnologias>div");
imagenesTecnologias.forEach(function(element){
    element.addEventListener("mouseover",function(){
        let src=element.children[0].getAttribute("src");
        var extension = src.split('.');
        var nuevoSRC=extension[0]+"-hover."+extension[1];
        console.log(nuevoSRC);

        element.children[0].setAttribute("src", nuevoSRC);
    });
})
imagenesTecnologias.forEach(function(element){
    element.addEventListener("mouseout",function(){
        let src=element.children[0].getAttribute("src");
        var extension = src.split('-hover.');
        var nuevoSRC=extension[0]+"."+extension[1];    
        element.children[0].setAttribute("src", nuevoSRC);
    })
})
var proyectos = document.querySelectorAll("#proyectos>.project-wrapper>a");
console.log(proyectos);
proyectos.forEach(function(element){
    element.addEventListener("mouseover",function(){
        proyectos.forEach(function(element2){
            
            console.log();
            if(element==element2){
                element2.classList.add("enfocado")
                element2.children[1].children[0].classList.add("enfoca-titulo");

            }else{
                element2.classList.add("desenfocado")

            }
        })
        
    })
})
proyectos.forEach(function(element){
    element.addEventListener("mouseout",function(){
        proyectos.forEach(function(element2){
                element2.classList.remove("enfocado")
                element2.classList.remove("desenfocado")
                element2.children[1].children[0].classList.remove("enfoca-titulo");
            
        })
        
    })
})




