document.addEventListener('DOMContentLoaded', function () {
    const btnSubmit = document.getElementById('btnSubmit');
    const inputText = document.getElementById('inputText');
    const output = document.getElementById('output');

    btnSubmit.addEventListener('click', function () {
        const text = inputText.value;
        output.textContent = `Has ingresado: ${text}`;
        output.style.display = 'block';
    });
});
