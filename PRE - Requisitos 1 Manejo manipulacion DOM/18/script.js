document.addEventListener("DOMContentLoaded",function () {
    const myImage = document.getElementById('myImage');
    const myLink = document.getElementById('myLink');
    const changeAttributesButton = document.getElementById('changeAttributesButton');
    const changePropertiesButton = document.getElementById('changePropertiesButton');

    changeAttributesButton.addEventListener('click', function () {
        //Cambiar atributos
        myImage.setAttribute('src', 'https://www.w3chools.com/w3images/nature.pjg');
        myImage.setAttribute('alt','Nueva imagne de muestra');
        myLink.setAttribute('href','http:s://www.wikipedia.org');
        myLink.setAttribute('target','_self');
    });

    changePropertiesButton.addEventListener('click',function () {
        //Cambiar propiedades
        myImage.src='https://www.w3schools.com/w3images/fjord.jpg';
        myImage.alt='Otra imagen de muestra';
        myLink.href ='https://servicios-integrados.net/1/online/wc/25Proyecto';
        myLink.target='_blamk';
    });
});