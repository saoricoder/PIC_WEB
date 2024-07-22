document.addEventListener("DOMContentLoaded",function () {
    console.log("Documento cargado y listo");

    const learnMoreBtn= document.getElementById('learn-more');
    const contactUsBtn=document.getElementById('contact-us');


    learnMoreBtn.addEventListener('click',function () {
        alert('Gracias por tu inrerés! Aqui tienes más información');
    });
    contactUsBtn.addEventListener('click', function () {
        window.location.href='mailto:contacto@mipaginaweb.com';
    });
    //Funcionalidad adicional para imagenes
    const images=document.querySelectorAll('.responsive-img,.gallery-img');
    images.forEach(img=>{
        img.addEventListener('click', function () {
            alert('Hiciste click en la imagen'+this.alt);
        });
    });

    //Manejo del formulario de contacto
    const contactForm=document.getElementById('contact-form');
    contactForm.addEventListener('submit',function (event) {
       event.preventDefault();
       const name = document.getElementById('name').value;
       const email= document.getElementById('email').value;
        const message= document.getElementById('message').value;


        if (name && email && message) {
            alert(`Gracias por tu mensaje, ${name}! Nos pondremos en contacto contigo pronto`);
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

});