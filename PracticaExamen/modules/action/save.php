<?php
include_once './action/conexion.php';

$modulo = $_POST['modulo'];

$sql_check_id = "SELECT * FROM $modulo WHERE id_$modulo = '" . $_POST['id_' . $modulo . ''] . "' ";
$result_check_id = $conn->query($sql_check_id);
if (mysqli_num_rows($result_check_id) > 0) {
    echo "ID registrado, verifique el ID";
    exit();
} else if ($modulo == "carreras") {
    $id_carrera = trim($_POST['id_carreras']);
    $nombre_carrera =  trim($_POST['nombre_carrera']);
    $director_carrera = trim($_POST['director_carrera']);

    $sql_insert = mysqli_prepare($conn, "INSERT INTO carreras(id_carreras, nombre_carrera, director_carrera) VALUES(?,?,?)");
    mysqli_stmt_bind_param($sql_insert, 'sss', $id_carrera, $nombre_carrera, $director_carrera);
    if (mysqli_stmt_execute($sql_insert)) {
        echo "Guardado con exito";
    } else {
        echo "Error al guardar";
    }
} else {
    $modul = substr($modulo, 0, -1);

    $sql_check_user = "SELECT * FROM $modulo WHERE cedula_$modul = '" . $_POST['cedula_' . $modul . ''] . "'";
    $result_check_user = $conn->query($sql_check_user);
    if (mysqli_num_rows($result_check_user) > 0) {
        echo "Cedula registrada, verifique la cedula";
    } else {

        $id = trim($_POST['id_' . $modulo . '']);
        $cedula = trim($_POST['cedula_' . $modul . '']);
        $carrera = trim($_POST['carrera']);

        $sql_insert_user = mysqli_prepare($conn, "INSERT INTO $modulo(id_$modulo, cedula_$modul, id_carrera) VALUES(?,?,?)");
        mysqli_stmt_bind_param($sql_insert_user, 'sss', $id, $cedula, $carrera);
        if (mysqli_stmt_execute($sql_insert_user)) {
            echo "Guardado con exito";
        } else {
            echo "Error al guardar";
        }
    }
}
