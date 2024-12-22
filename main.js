function saludarProfesor() {
    alert("Bienvenido/a profesor/a")
}
saludarProfesor()
let cantidad = parseInt(prompt("¿Cuantos alumnos va a ingresar?"));

for (let i = 0; i < cantidad; i++) {
    let suma = 0;
    let nombre = prompt("Ingrese el nombre del alumno:");
    if (nombre === null){
        alert("Intente nuevamente")
        break
    }
    for (let j = 0; j < 3; j++) {
        let nota = parseFloat(prompt("Ingrese nota del trimestre ${j + 1}:"));
        suma += nota;
    }

    let promedio = suma / 3;
    alert("El alumno", nombre, "tiene un promedio de", promedio);
}

