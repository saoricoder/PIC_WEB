document.addEventListener("DOMContentLoaded", function() {
    const customCard = document.getElementById("customCard");
    const bgColorInput = document.getElementById("bgColor");
    const imgSizeInput = document.getElementById("imgSize");
    const textAlignSelect = document.getElementById("textAlign");
    const cardImage = document.getElementById("cardImage");
    const imgUploadInput = document.getElementById("imgUpload");
    const cardTitleInput = document.getElementById("cardTitle");
    const cardContentInput = document.getElementById("cardContent");
    const cardTitleDisplay = document.getElementById("cardTitleDisplay");
    const cardContentDisplay = document.getElementById("cardContentDisplay");

    bgColorInput.addEventListener("input", function() {
        customCard.style.backgroundColor = bgColorInput.value;
    });

    imgSizeInput.addEventListener("input", function() {
        cardImage.style.width = imgSizeInput.value + "px";
    });

    textAlignSelect.addEventListener("change", function() {
        customCard.style.textAlign = textAlignSelect.value;
    });

    imgUploadInput.addEventListener("change", function() {
        const file = imgUploadInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                cardImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    cardTitleInput.addEventListener("input", function() {
        cardTitleDisplay.textContent = cardTitleInput.value;
    });

    cardContentInput.addEventListener("input", function() {
        cardContentDisplay.textContent = cardContentInput.value;
    });
});
