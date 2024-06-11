<?php
include_once './conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $modulo = $_POST['modulo'];
    $name = $_POST['id_carrera'];
    $listar = $_POST['listado'];
    $page = $_POST['page'];
    if ($listar != null) {

        $_SESSION['listar'] = 1;
        $_SESSION['modulo'] = $modulo;
        header('Location: ' . $page);
        exit();
        if ($_SESSION['listar']) {
            echo $_SESSION['listar'];
        }
    }
    /*else {
    header('Location: ../modules/carreras.php');
    exit();
}*/
}
