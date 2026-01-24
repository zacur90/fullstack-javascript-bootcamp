// Proyecto Módulo 3 - Contexto Bootcamp
// Aplicación de consola en JavaScript

// --- Funciones matemáticas (Lección 4) ---
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Error: división por cero"; }

// --- Función para pedir número (Lección 1) ---
function pedirNumero(mensaje) {
    let valor = parseInt(prompt(mensaje));
    while (isNaN(valor)) {
        valor = parseInt(prompt("Entrada inválida. " + mensaje));
    }
    return valor;
}

// --- Datos del Bootcamp (Lección 3 y 5: Arreglos y Objetos) ---
let estudiantes = [
    { nombre: "Ana", modulo: 1, nota: 7.0 },
    { nombre: "Luis", modulo: 2, nota: 5.3 },
    { nombre: "María", modulo: 3, nota: 9.2 },
    { nombre: "Pedro", modulo: 3, nota: 4.5 }
];

// --- Funciones de Bootcamp ---
function mostrarEstudiantes() {
    console.log("Lista de estudiantes del Bootcamp:");
    estudiantes.forEach(e => console.log(`${e.nombre} - Módulo ${e.modulo} - Nota ${e.nota}`));
    alert("Estudiantes mostrados en consola.");
}

function filtrarPorModulo() {
    let modulo = pedirNumero("¿Qué módulo quieres filtrar?");
    let filtrados = estudiantes.filter(e => e.modulo === modulo);
    if (filtrados.length > 0) {
        console.log(`Estudiantes en el módulo ${modulo}:`);
        filtrados.forEach(e => console.log(`${e.nombre} - Nota ${e.nota}`));
        alert("Estudiantes filtrados mostrados en consola.");
    } else {
        alert("No hay estudiantes en ese módulo.");
    }
}

function calcularPromedio() {
    let suma = estudiantes.reduce((acc, e) => acc + e.nota, 0);
    let promedio = dividir(suma, estudiantes.length);
    console.log("Promedio general del Bootcamp:", promedio);
    alert("Promedio calculado y mostrado en consola.");
}

function mejorEstudiante() {
    let mejor = estudiantes.reduce((max, e) => e.nota > max.nota ? e : max, estudiantes[0]);
    console.log(`El mejor estudiante es ${mejor.nombre} con nota ${mejor.nota}`);
    alert("Mejor estudiante mostrado en consola.");
}

// --- Menú principal (Lección 2: Condicionales y bucles) ---
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            "MENÚ BOOTCAMP\n" +
            "_________________________________\n" +
            "1. Sumar dos notas\n" +
            "2. Restar dos notas\n" +
            "3. Multiplicar valores\n" +
            "4. Dividir valores\n" +
            "5. Mostrar lista de estudiantes\n" +
            "6. Filtrar estudiantes por módulo\n" +
            "7. Calcular promedio general\n" +
            "8. Mostrar mejor estudiante\n" +
            "9. Salir\n\n" +
            "---------------------------------\n" +
            "Ingresa el número de la opción:"
        );

        switch(opcion) {
            case "1":
                console.log("Resultado:", sumar(pedirNumero("Nota 1:"), pedirNumero("Nota 2:")));
                alert("Operación de suma realizada correctamente.");
                break;
            case "2":
                console.log("Resultado:", restar(pedirNumero("Nota 1:"), pedirNumero("Nota 2:")));
                alert("Operación de resta realizada correctamente.");
                break;
            case "3":
                console.log("Resultado:", multiplicar(pedirNumero("Valor 1:"), pedirNumero("Valor 2:")));
                alert("Operación de multiplicación realizada correctamente.");
                break;
            case "4":
                console.log("Resultado:", dividir(pedirNumero("Valor 1:"), pedirNumero("Valor 2:")));
                alert("Operación de división realizada correctamente.");
                break;
            case "5":
                mostrarEstudiantes();
                break;
            case "6":
                filtrarPorModulo();
                break;
            case "7":
                calcularPromedio();
                break;
            case "8":
                mejorEstudiante();
                break;
            case "9":
                alert("¡Gracias por usar la aplicación del Bootcamp!");
                break;
            default:
                alert("Opción inválida, intenta de nuevo.");
        }
    } while(opcion !== "9");
}

// --- Ejecutar menú ---
mostrarMenu();
