<?php
session_start();
function unique_id($l = 10)
{
    return substr(md5(uniqid(mt_rand(), true)), 0, $l);
}

$id_generate = 'acaca-' . unique_id(5);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carreras</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <script defer src="../js/components/jquery-3.7.1.js"></script>
    <script defer type="module" src="../js/poput-component.js"></script>
</head>

<body>
    <div class="container" id="container">
        <section class="head">
            <h1>Carreras</h1>
            <a class="home" href="../index.php">Home</a>
        </section>
        <section class="body">
            <form class="formulario" name="form_academico" id="form_academico">
                <div class="input">
                    <div class="input_item">
                        <label for="id_carreras">ID Carrera</label>
                        <input type="text" name="id_carreras" id="id_carreras" value="<?php echo $id_generate; ?>">
                    </div>
                    <div class="input_item">
                        <label for="nombre_carrera">Nombre de la Carrera</label>
                        <input type="text" name="nombre_carrera" id="nombre_carrera">
                    </div>
                    <div class="input_item">
                        <label for="director_carrera">Director de Carrera</label>
                        <input type="text" name="director_carrera" id="director_carrera">
                    </div>
                    <div>
                        <input type="hidden" value='<?php echo $_SERVER['PHP_SELF']; ?>' name="page">
                        <input type="hidden" name="modulo" value="carreras" id="modulo">
                    </div>
                </div>
                <div class="botones">
                    <input id="agregar" type="submit" value="Agregar o Guardar" name="agregar">
                    <input id="modificar" type="submit" value="Modificar" name="modificar">
                    <input id="eliminar" type="submit" value="Eliminar" name="eliminar">
                    <input id="listar" type="submit" value="listar" name="listado">
                </div>
            </form>
            <div class="listado">
                <ul class="titulo">
                    <li class="titulo_descripcion __id">ID Carrera</li>
                    <li class="titulo_descripcion">Nombre de la Carrera</li>
                    <li class="titulo_descripcion">Director de Carrera</li>
                </ul>
                <?php

                if ($_SESSION['listar'] == 1) {
                    include_once './action/listar.php';
                } else {
                    echo '<ul class="listado_fila">
                            <li style="justify-content: center;" class="fila_descripcion __id"> Presione Listar para ver</li>
                        </ul>';
                }
                ?>
            </div>
        </section>
        <footer>
            <h2>Desarrollado por Yo mismo</h2>
        </footer>
    </div>
</body>

</html>