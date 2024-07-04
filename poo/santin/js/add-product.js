// add-product.js

document.addEventListener('DOMContentLoaded', function () {
    const tipoProducto = document.getElementById('tipo');
    const extraFields = document.getElementById('extra-fields');

    tipoProducto.addEventListener('change', function () {
        const tipo = tipoProducto.value;

        // Limpiar campos adicionales anteriores
        extraFields.innerHTML = '';

        switch (tipo) {
            case 'electronico':
                extraFields.innerHTML = `
                    <div class="input-group">
                        <label for="marca">Marca:</label>
                        <input type="text" id="marca" name="marca" required>
                    </div>
                    <div class="input-group">
                        <label for="garantia">Garantía:</label>
                        <input type="text" id="garantia" name="garantia" required>
                    </div>
                `;
                break;

            case 'alimenticio':
                extraFields.innerHTML = `
                    <div class="input-group">
                        <label for="fechaCaducidad">Fecha de Caducidad:</label>
                        <input type="date" id="fechaCaducidad" name="fechaCaducidad" required>
                    </div>
                    <div class="input-group">
                        <label for="ingredientes">Ingredientes:</label>
                        <textarea id="ingredientes" name="ingredientes" required></textarea>
                    </div>
                `;
                break;

            case 'ropa':
                extraFields.innerHTML = `
                    <div class="input-group">
                        <label for="talla">Talla:</label>
                        <input type="text" id="talla" name="talla" required>
                    </div>
                    <div class="input-group">
                        <label for="material">Material:</label>
                        <input type="text" id="material" name="material" required>
                    </div>
                `;
                break;

            default:
                extraFields.innerHTML = '';
                break;
        }
    });
});
