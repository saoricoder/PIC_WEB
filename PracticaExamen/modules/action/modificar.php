<?php

include_once './action/conexion.php';

$page = $_POST['page'];
$modulo = $_POST['modulo'];


$sql_check_id = "SELECT * FROM $modulo WHERE id_$modulo = '" . $_POST['id_' . $modulo . ''] . "' ";
$result_check_id = $conn->query($sql_check_id);
if (mysqli_num_rows($result_check_id) > 0) {
    if ($modulo == "carreras") {
        $id_carrera = trim($_POST['id_carreras']);
        $nombre_carrera =  trim($_POST['nombre_carrera']);
        $director_carrera = trim($_POST['director_carrera']);

        $sql_update = "UPDATE carreras SET  nombre_carrera=$nombre_carrera , director_carrera=$director_carrera WHERE id_carreras=$id_carrera ";

        if ($conn->query($sql_update) === TRUE) {
            $_SESSION['mensaje'] = "Datos actualizados con exito";
            header('Location: ' . $page);
            exit();
        } else {
            $_SESSION['mensaje'] = "Error al actualizar" . $conn->error;
            header('Location: ' . $page);
            exit();
        }
    } else {
        $modul = substr($modulo, 0, -1);

        $id = trim($_POST['id_' . $modulo . '']);
        $cedula = trim($_POST['cedula_' . $modul . '']);
        $carrera = trim($_POST['carrera']);

        $sql_update = "UPDATE $modulo SET  cedula_$modul=$cedula, id_carrera=$carrera WHERE id_$modulo = $id ";

        if ($conn->query($sql_update) === TRUE) {
            $_SESSION['mensaje'] = "Datos actualizados con exito";
            header('Location: ' . $page);
            exit();
        } else {
            $_SESSION['mensaje'] = "Error al actualizar" . $conn->error;
            header('Location: ' . $page);
            exit();
        }
    }
} else {
    $_SESSION['mensaje'] = "ID no registrado, verifique el ID";
    header('Location: ' . $page);
    exit();
}
