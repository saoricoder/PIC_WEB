const images=[
    'img/bellota.png',
    'img/calsifer.png',
    'img/dragon.png',
    'img/carita.png'
];

const prevBtn=document.getElementById('prevBtn');
const nextBtn=document.getElementById('nextBtn');
const imageContainer=document.getElementById('image-container');

let currentImageIndex=0;

function showImage(index) {
    if (index<0) {
        currentImageIndex=images.length-1;
    } else if (index>=images.length) {
        currentImageIndex=0;
    }else{
        currentImageIndex=index;
    }
    imageContainer.innerHTML=`<img src="${images[currentImageIndex]}" alt=Slide ${currentImageIndex+1}">`;
}

prevBtn.addEventListener('click',()=>{
    showImage(currentImageIndex-1);
});

nextBtn.addEventListener('click',()=>{
    showImage(currentImageIndex+1);
});

//Muestra la primera imagen inicialmente
showImage(0);