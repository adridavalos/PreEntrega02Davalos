// FUNCIONES
let solicitarAlUsuarioCantidad = () => {
  return parseInt(prompt("Ingrese la cantidad de alumnos 1-30: "));
};
let obtenerCantidadAlumno = () => {
  cantidad = -1;
  while (cantidad < 1 || cantidad > 30 || isNaN(cantidad)) {
    cantidad = solicitarAlUsuarioCantidad();
  }
  return cantidad;
};

let solicitarAlUsuarioCalificacion = () => {
  return parseInt(prompt("Ingrese calificacion(1-10) del alumno: "));
};
let obtenerCalificacion = () => {
  calificacion = -1;
  while (calificacion < 1 || calificacion > 10 || isNaN(calificacion)) {
    calificacion = solicitarAlUsuarioCalificacion();
  }
  return calificacion;
};

let solicitarAlUsuarioNombre = () => {
  return prompt("Insegrese nombre del alumno: ");
};
const calculoPromedio = (cantidad, total) => total / cantidad;

function ingresarInformacionEstudiante() {
  let cantidadObtenida = obtenerCantidadAlumno();
  for (let i = 0; i < cantidadObtenida; i++) {
    let nombre = solicitarAlUsuarioNombre();
    let calificacion = obtenerCalificacion();
    estudiantes.push({
      nombre: nombre,
      calificacion: calificacion,
    });
  }
}

function encontrarEstudianteConCalificacionMasAlta(estudiantes) {
  if (estudiantes.length === 0) {
    return "No hay estudiantes en el array";
  }
  let nombreMasAlto = estudiantes[0].nombre;
  let calificacionMasAlta = estudiantes[0].calificacion;
  for (let i = 1; i < estudiantes.length; i++) {
    let calificacionActual = estudiantes[i].calificacion;
    if (calificacionActual > calificacionMasAlta) {
      nombreMasAlto = estudiantes[i].nombre;
      calificacionMasAlta = calificacionActual;
    }
  }
  return {
    nombre: nombreMasAlto,
    calificacion: calificacionMasAlta,
  };
}

function encontrarEstudianteConCalificacionMasBaja(estudiantes) {
  if (estudiantes.length === 0) {
    return "No hay estudiantes en el array";
  }
  let nombreMasBajo = estudiantes[0].nombre;
  let calificacionMasBaja = estudiantes[0].calificacion;
  for (let i = 1; i < estudiantes.length; i++) {
    let calificacionActual = estudiantes[i].calificacion;
    if (calificacionActual < calificacionMasBaja) {
      nombreMasBajo = estudiantes[i].nombre;
      calificacionMasBaja = calificacionActual;
    }
  }
  return {
    nombre: nombreMasBajo,
    calificacion: calificacionMasBaja,
  };
}

function sumarCalificaciones(estudiantes) {
  if (estudiantes.length === 0) {
    return "No hay calificaciones en el array";
  }
  let acumulador = 0;
  for (const item of estudiantes) {
    acumulador = acumulador + item.calificacion;
  }
  return acumulador;
}
//VARIABLES GLOBALES

let estudiantes = [];

//ESTRUCTURA
alert(
  "Calcula el promedio de las calificaciones. Quien obtuvo la calificación más alta y la más baja"
);
ingresarInformacionEstudiante();

let estudianteConCalificacionMasAlta =
  encontrarEstudianteConCalificacionMasAlta(estudiantes);
let estudianteConCalificacionMasBaja =
  encontrarEstudianteConCalificacionMasBaja(estudiantes);

alert(
  "El promedio es de: " +
    calculoPromedio(
      estudiantes.length,
      sumarCalificaciones(estudiantes)
    ).toFixed(2) +
    ", " +
    estudianteConCalificacionMasAlta["nombre"] +
    " obtuvo la calificacion mas alta: " +
    estudianteConCalificacionMasAlta["calificacion"] +
    ", " +
    estudianteConCalificacionMasBaja["nombre"] +
    " obtuvo la calificacion mas baja: " +
    estudianteConCalificacionMasBaja["calificacion"]
);
