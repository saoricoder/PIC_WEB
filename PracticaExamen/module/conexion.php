<?php
function conectar($dbname)
{

    // Conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "angel2857";
    $dbname = $dbname;

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    return $conn;
}
