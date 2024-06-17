<?php
include_once './session.php';
include_once './action/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $modulo = $_POST['modulo'];
    $listar = empty($_POST['listado']) ? "vacio" : $_POST['listado'];
    $save = empty($_POST['agregar']) ? "vacio" : $_POST['agregar'];
    $modificar = empty($_POST['modificar']) ? "vacio" : $_POST['modificar'];
    $eliminar = empty($_POST['eliminar']) ? "vacio" : $_POST['eliminar'];
    $page = empty($_POST['page']) ? "vacio" : $_POST['page'];
    //manejo de datos segun el modulo perteneciente
    if ($listar != "vacio" && $modulo != "prueba") {
        $_SESSION['listar'] = 1;
        $_SESSION['modulo'] = $modulo;
        echo "Cargado con exito";
        exit();
    } else if ($save != "vacio" && $modulo != "prueba") {
        include_once './action/save.php';
        header('Location: ../modules/' . $modulo . '.php');
        exit();
    } else if ($modificar != "vacio" && $modulo != "prueba") {
        include_once './action/modificar.php';
    } else if ($eliminar != "vacio" && $modulo != "prueba") {
        include_once './action/eliminar.php';
    } else if ($modulo == "prueba") {
        $_SESSION['listar'] = 1;
        $_SESSION['modulo'] = "carreras";

        echo "Prueba con exito";
        exit();
    }
}
