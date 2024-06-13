<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docentes</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <div class="container">
        <section class="head">
            <h1>Docentes</h1>
            <a class="home" href="../index.php">Home</a>
        </section>
        <section class="body">
            <div class="mensaje">
                <h1 class="mensaje_text"><?php echo $_SESSION["mensaje"]; ?></h1>
            </div>
            <form action="./modulos.php" method="post" class="formulario" name="form_academico" id="form_academico">
                <div class="input">
                    <div class="input_item">
                        <label for="id_docentes">ID Docente</label>
                        <input type="text" name="id_docentes" id="id_docentes">
                    </div>
                    <div class="input_item">
                        <label for="cedula_docente">Cedula del docente</label>
                        <input type="text" name="cedula_docente" id="cedula_docente">
                    </div>
                    <div class="input_item">
                        <label for="carrera">Carrera</label>
                        <?php
                        include_once './action/load_data.php';
                        ?>
                    </div>
                </div>
                <div class="botones">
                    <input id="agregar" type="submit" value="Agregar o Guardar" name="agregar">
                    <input id="modificar" type="submit" value="Modificar" name="modificar">
                    <input id="eliminar" type="submit" value="Eliminar" name="eliminar">
                    <input id="listar" type="submit" value="listar" name="listado">
                    <input type="hidden" value='<?php echo $_SERVER['PHP_SELF']; ?>' name="page">
                    <input type="hidden" name="modulo" value="docentes">
                </div>
            </form>
            <div class="listado">
                <ul class="titulo">
                    <li class="titulo_descripcion __id">ID Docente</li>
                    <li class="titulo_descripcion">Cedula del docente</li>
                    <li class="titulo_descripcion">Nombre de la Carrera</li>
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