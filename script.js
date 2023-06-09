// Funcion que me aplica el estilo a la opción seleccionada
// en el menú y quitala previamente seleccionada
function seleccionar(link){
    let opciones = document.querySelectorAll('.links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción
    // en el modo responsive

    let x = document.getElementById('nav');
    x.className = "";
}

// Funcion que muestra el menu rsponsive
function responsiveMenu(){
    let x = document.getElementById("nav");

    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// Detecto el Scrolling  para aplicar la asignación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// funcion de efecto habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight-skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}