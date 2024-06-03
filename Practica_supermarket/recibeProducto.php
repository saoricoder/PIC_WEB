<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $codigoProducto = $_POST['codigoProducto'];
    $nombreProducto = $_POST['nombreProducto'];
    $precioProducto = $_POST['precioProducto'];
    $codigoProveedor = $_POST['proveedor'];

    // Conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "supermarket";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Guardar la información del producto en la base de datos
    $sql = "INSERT INTO producto (codigoProducto, nombreProducto, precioProducto, codigoProveedor) 
            VALUES ('$codigoProducto', '$nombreProducto', '$precioProducto', '$codigoProveedor')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Nuevo producto guardado exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}
?>
