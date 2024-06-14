<?php
include_once './action/conexion.php';

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
