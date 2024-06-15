document.getElementById('menu-icon').addEventListener("click",()=>{
    let menu = document.getElementById("menu");

    if(menu.style.display==="block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
});


document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("boton-rojo").addEventListener("click",()=>{
        document.getElementById("my-div").style.backgroundColor="#ff4d4d";
    });

    document.getElementById("boton-azul").addEventListener("click",()=>{
        document.getElementById("my-div").style.backgroundColor="#4d4dff";
    });

    document.getElementById("boton-verde").addEventListener("click",()=>{
        document.getElementById("my-div").style.backgroundColor="#4dff4d";
    });

});


document.getElementById("crear-imagen").addEventListener('click',()=>{
    let img = document.createElement('img');
    img.src = "https://srvcas.espe.edu.ec/authenticationendpoint/images/Espe-Angular-Logo.png";
    img.alt = "Logo de la ESPE";
    img.style.width = '100%';

    let contenedor = document.getElementById("contenedor-div");
    
    contenedor.appendChild(img);
});