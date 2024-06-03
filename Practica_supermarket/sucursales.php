<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supermarket";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $accion = $_POST['accion'];

    if ($accion == "guardar") {
        $nombreSucursal = $_POST['txtSucursal'];
        $direccionSucursal = $_POST['txtDireccion'];

        $sql = "INSERT INTO sucursal (nombreSucursal, direccionSucursal) VALUES ('$nombreSucursal', '$direccionSucursal')";

        if ($conn->query($sql) === TRUE) {
            echo "Nueva sucursal guardada exitosamente";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } elseif ($accion == "actualizar") {
        $nombreSucursal = $_POST['txtSucursal'];
        $direccionSucursal = $_POST['txtDireccion'];

        // Ejemplo para actualizar basado en un supuesto campo de ID de la sucursal
        $idSucursal = $_POST['idSucursal'];
        $sql = "UPDATE sucursal SET nombreSucursal='$nombreSucursal', direccionSucursal='$direccionSucursal' WHERE codigoSucursal='$idSucursal'";

        if ($conn->query($sql) === TRUE) {
            echo "Sucursal actualizada exitosamente";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } elseif ($accion == "listar") {
        $sql = "SELECT * FROM sucursal";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "ID: " . $row["codigoSucursal"]. " - Nombre: " . $row["nombreSucursal"]. " - Dirección: " . $row["direccionSucursal"]. "<br>";
            }
        } else {
            echo "0 resultados";
        }
    }
}

$conn->close();
?>
