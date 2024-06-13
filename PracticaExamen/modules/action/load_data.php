<?php
$servername = "localhost";
$username = "root";
$password = "angel2857";
$dbname = "academica";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM carreras";
if ($result = $conn->query($sql)) {
    echo '
        <select class="select" form="form_academico" name="carrera" id="carrera">
                            <option value="vacio" selected></option>';

    while ($row = mysqli_fetch_array($result)) {
        echo '<option value="' . $row["id_carreras"] . '">' . $row["nombre_carrera"] . '</option>';
    }
    echo '</select>';
}
