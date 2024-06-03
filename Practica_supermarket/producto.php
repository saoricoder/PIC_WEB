<?php
function conectar(){

            // Conexión a la base de datos
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "supermarket";
            
            $conn = new mysqli($servername, $username, $password, $dbname);
            
            if ($conn->connect_error) {
                die("Conexión fallida: " . $conn->connect_error);
            }
            
            $sql = "SELECT codigoProveedor, nombreProveedor FROM proveedores";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo '<option value="' . $row["codigoProveedor"] . '">' . $row["nombreProveedor"] . '</option>';
                }
            }
            
            $conn->close();
        }

        ?>

    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <title>Producto</title>
    </head>

    <body>
        <form id="formProducto" action="recibeProducto.php" method="post">
            <label for="codigoProducto">Código del Producto:</label>
            <input type="text" id="codigoProducto" name="codigoProducto" required><br>

            <label for="nombreProducto">Nombre del Producto:</label>
            <input type="text" id="nombreProducto" name="nombreProducto" required><br>

            <label for="precioProducto">Precio del Producto:</label>
            <input type="number" id="precioProducto" name="precioProducto" step="0.01" required><br>

            <label for="proveedor">Proveedor:</label>
            <select id="proveedor" name="proveedor" required>
            <option value="">Seleccione un proveedor</option>
            <?php
                conectar();

            ?>
        </select><br>

            <button type="submit">Enviar</button>
        </form>
    </body>

    </html>