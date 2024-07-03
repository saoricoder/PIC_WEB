document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('customizeForm');
    const card = document.getElementById('card');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const backgroundColor = form.backgroundColor.value;
        const text = form.text.value;
        const textColor = form.textColor.value;

        if (backgroundColor) {
            card.setAttribute('background', backgroundColor);
        }
        if (text) {
            card.setAttribute('text', text);
        }
        if (textColor) {
            card.setAttribute('text-color', textColor);
        }
    });
});
