<?php
function conectar() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "supermarket";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }
    return $conn;
}

function guardarSucursales($nombreSucursal, $direccionSucursal) {
    $conn = conectar();
    $sql = "INSERT INTO sucursal (nombreSucursal, direccionSucursal) VALUES ('$nombreSucursal', '$direccionSucursal')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Nueva sucursal guardada exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}

function actualizarSucursales($codigoSucursal, $nombreSucursal, $direccionSucursal) {
    $conn = conectar();
    $sql = "UPDATE sucursal SET nombreSucursal='$nombreSucursal', direccionSucursal='$direccionSucursal' WHERE codigoSucursal='$codigoSucursal'";
    
    if ($conn->query($sql) === TRUE) {
        echo "Sucursal actualizada exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}

function listarSucursales() {
    $conn = conectar();
    $sql = "SELECT * FROM sucursal";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "ID: " . $row["codigoSucursal"]. " - Nombre: " . $row["nombreSucursal"]. " - Dirección: " . $row["direccionSucursal"]. "<br>";
        }
    } else {
        echo "0 resultados";
    }
    
    $conn->close();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_REQUEST['txtSucursal'])){
        $nombreSucursal = $_REQUEST['txtSucursal'];
    }
    if (isset($_REQUEST['txtSucursal'])){
        $direccionSucursal = $_REQUEST['txtDireccion'];
    }
    
    ?>

    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Editar Sucursal</title>
    </head>
    <body>
        <form id="formRecibe" name="formRecibe" action="sucursal2.php" method="post">
            <label for="txtRecibeSucursal">Nombre de la Sucursal:</label>
            <input type="text" id="txtRecibeSucursal" name="txtRecibeSucursal" value="<?php echo $nombreSucursal; ?>" required><br>
            
            <label for="txtRecibeDireccion">Dirección:</label>
            <input type="text" id="txtRecibeDireccion" name="txtRecibeDireccion" value="<?php echo $direccionSucursal; ?>" required><br>

            <input type="hidden" id="codigoSucursal" name="codigoSucursal" value="<?php echo isset($_POST['codigoSucursal']) ? $_POST['codigoSucursal'] : ''; ?>">
            
            <button type="submit" name="accion" value="guardar">Guardar</button>
            <button type="submit" name="accion" value="actualizar">Actualizar</button>
            <button type="submit" name="accion" value="listar">Listar</button>
        </form>
    </body>
    </html>

    <?php
} elseif (isset($_POST['accion'])) {
    $accion = $_POST['accion'];
    
    if ($accion == "guardar") {
        $nombreSucursal = $_POST['txtRecibeSucursal'];
        $direccionSucursal = $_POST['txtRecibeDireccion'];
        guardarSucursales($nombreSucursal, $direccionSucursal);
    } elseif ($accion == "actualizar") {
        $codigoSucursal = $_POST['codigoSucursal'];
        $nombreSucursal = $_POST['txtRecibeSucursal'];
        $direccionSucursal = $_POST['txtRecibeDireccion'];
        actualizarSucursales($codigoSucursal, $nombreSucursal, $direccionSucursal);
    } elseif ($accion == "listar") {
        listarSucursales();
    }
}
?>
