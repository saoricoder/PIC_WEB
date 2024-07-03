// Definir una lista de ingresos (simulación de base de datos)
let ingresos = [];

// Función para agregar un nuevo ingreso
function agregarIngreso(codigo, descripcion, cantidad) {
    let ingreso = new Ingreso(codigo, descripcion, cantidad);
    ingresos.push(ingreso);
}

// Función para buscar un ingreso por código
function buscarIngresoPorCodigo(codigo) {
    return ingresos.find(ingreso => ingreso.codigo === codigo);
}

// Función para buscar ingresos por descripción
function buscarIngresosPorDescripcion(descripcion) {
    return ingresos.filter(ingreso => ingreso.descripcion.includes(descripcion));
}

// Función para mostrar todos los ingresos
function mostrarTodosLosIngresos() {
    return ingresos;
}

// Función para modificar un ingreso
function modificarIngreso(codigo, nuevaDescripcion, nuevaCantidad) {
    let ingreso = buscarIngresoPorCodigo(codigo);
    if (ingreso) {
        ingreso.descripcion = nuevaDescripcion;
        ingreso.cantidad = nuevaCantidad;
        return true; // Modificación exitosa
    }
    return false; // No se encontró el ingreso con el código dado
}

// Función para eliminar un ingreso
function eliminarIngreso(codigo) {
    let indice = ingresos.findIndex(ingreso => ingreso.codigo === codigo);
    if (indice !== -1) {
        ingresos.splice(indice, 1);
        return true; // Eliminación exitosa
    }
    return false; // No se encontró el ingreso con el código dado
}
