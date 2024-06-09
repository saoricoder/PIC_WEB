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
            <form action="" method="post" class="formulario">
                <div class="input">
                    <div class="input_item">
                        <label for="id_docente">ID Docente</label>
                        <input type="text" name="id_docentea" id="id_docente">
                    </div>
                    <div class="input_item">
                        <label for="cedula_docente">Cedula del docente</label>
                        <input type="text" name="cedula_docente" id="cedula_docente">
                    </div>
                    <div class="input_item">
                        <label for="carrera">Carrera</label>
                        <input type="text" name="carrera" id="carrera">
                    </div>
                </div>
                <div class="botones">
                    <input id="agregar" type="submit" value="Agregar o Guardar">
                    <input type="submit" value="Modificar">
                    <input type="submit" value="Eliminar">
                    <input type="submit" value="Listar">
                </div>
            </form>
            <div class="listado">
                <ul class="titulo">
                    <li class="titulo_descripcion __id">ID Docente</li>
                    <li class="titulo_descripcion">Cedula del docente</li>
                    <li class="titulo_descripcion">Nombre de la Carrera</li>
                </ul>
                <ul class="listado_fila">
                    <li class="fila_descripcion __id">1234567898</li>
                    <li class="fila_descripcion">123132156611</li>
                    <li class="fila_descripcion">Una carrera</li>
                </ul>
            </div>
        </section>
        <footer>
            <h2>Desarrollado por Yo mismo</h2>
        </footer>
    </div>

</body>

</html>