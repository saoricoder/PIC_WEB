<?php
include_once './session.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $modulo = $_POST['modulo'];
    $listar = empty($_POST['listado']) ? "vacio" : $_POST['listado'];
    $save = empty($_POST['agregar']) ? "vacio" : $_POST['agregar'];
    $modificar = empty($_POST['modificar']) ? "vacio" : $_POST['modificar'];
    $eliminar = empty($_POST['eliminar']) ? "vacio" : $_POST['eliminar'];
    $page = $_POST['page'];
    if ($listar != "vacio") {

        $_SESSION['listar'] = 1;
        $_SESSION['modulo'] = $modulo;
        header('Location: ' . $page);
        exit();
    } else if ($save != "vacio") {
        include_once './action/save.php';
    } else if ($modificar != "vacio") {
    } else if ($eliminar != "vacio") {
    }
    /*else {
    header('Location: ../modules/carreras.php');
    exit();
}*/
}
