<?php
include_once './session.php';
include_once './action/conexion.php';

function validar($modulo)
{
    // Si todos los campos se han enviado, entonces, «$post» será «true»,
    // de lo contrario será «false»:
    $modul = substr($modulo, 0, -1);
    if ($modulo != "carreras") {
        $post = (isset($_POST['id_' . $modulo . '']) && isset($_POST['cedula_' . $modul . '']) && isset($_POST['carrera']) && !empty($_POST['id_' . $modulo . '']) && !empty($_POST['cedula_' . $modul . '']) && !empty($_POST['carrera']));
    } else {
        $post = (isset($_POST['id_' . $modulo . '']) && isset($_POST['nombre_carrera']) && isset($_POST['director_carrera'])  && !empty($_POST['id_' . $modulo . '']) && !empty($_POST['nombre_carrera']) && !empty($_POST['director_carrera']));
    }
    return $post;
}

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

        // Si $post es true (verdadero), entonces se guardaran los datos:
        if (validar($modulo)) {
            include_once './action/save.php';
        } else {
            // Si en cambio, es false (falso), entonces volverá al formulario desde
            // donde se envió la petición:
            $_SESSION['mensaje'] = "Debe rellenar los campos solicitados";
            header('Location: ' . $page);
            exit();
        }
    } else if ($modificar != "vacio") {
        if (validar($modulo)) {
            include_once './action/modificar.php';
        } else {
            $_SESSION['mensaje'] = "Debe rellenar los campos solicitados";
            header('Location: ' . $page);
            exit();
        }
    } else if ($eliminar != "vacio") {
        if (validar($modulo)) {
            include_once './action/eliminar.php';
        } else {
            $_SESSION['mensaje'] = "Debe rellenar los campos solicitados";
            header('Location: ' . $page);
            exit();
        }
    } else if ($prueba != "vacio") {
        $_SESSION['mensaje'] = "exito";
        $_SESSION["evento"] = 'boton.click();';
        header('Location: ' . $page);
        exit();
    }
    /*else {
    header('Location: ../modules/carreras.php');
    exit();
}*/
}
