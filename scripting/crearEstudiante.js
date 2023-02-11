import {
    form,
    mainButton,
    nombre,
    apellido,
    matricula,
    curso,
    nota,
} from "./animacion.js";
import { Estudiante } from "./clase.js";

const valorApellido = apellido.value;
const valorMatricula = matricula.value;
const valorCurso = curso.value;
const valorNota = nota.value;

nombre.addEventListener("blur", crearEstudiante);

function crearEstudiante(e) {
    /*e.preventDefault();
    const nuevoEstudiante = new Estudiante(
        valorNombre,
        valorApellido,
        valorMatricula,
        valorCurso,
        valorNota
    );*/
    const valorNombre = nombre.value;
    console.log(valorNombre);
}
