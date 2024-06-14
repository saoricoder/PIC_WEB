<?php
include_once './action/conexion.php';

$page = $_POST['page'];
$modulo = $_POST['modulo'];


$sql_check_id = "SELECT * FROM $modulo WHERE id_$modulo = '" . $_POST['id_' . $modulo . ''] . "' ";
$result_check_id = $conn->query($sql_check_id);
if (mysqli_num_rows($result_check_id) > 0) {

    $sql_delete = "DELETE FROM $modulo WHERE id_$modulo = '" . $_POST['id_' . $modulo . ''] . "'";

    if ($conn->query($sql_delete) === TRUE) {
        $_SESSION['mensaje'] = "Datos eliminados con exito";
        header('Location: ' . $page);
        exit();
    } else {
        $_SESSION['mensaje'] = "Error al eliminar" . $conn->error;
        header('Location: ' . $page);
        exit();
    }
} else {
    $_SESSION['mensaje'] = "ID no registrado, verifique el ID";
    header('Location: ' . $page);
    exit();
}
