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

export let objEstudiante = {
    nombre: "",
    apellido: "",
    matricula: "",
    curso: "",
    nota: "",
};
export let arrayEstudiantes = [];

function registrarEstudiantes() {
    nombre.addEventListener("blur", llenarValores);
    apellido.addEventListener("blur", llenarValores);
    matricula.addEventListener("blur", llenarValores);
    curso.addEventListener("blur", llenarValores);
    nota.addEventListener("blur", llenarValores);
    mainButton.addEventListener("click", crearEstudiante);
}

registrarEstudiantes();

export function llenarValores(e) {
    const filtrarValor = Object.keys(objEstudiante).filter(
        (llave) => llave === e.target.id
    );

    objEstudiante[filtrarValor[0]] = e.target.value; /*objEstudiante[nombre]*/

    if (filtrarValor[0] === "nota" || filtrarValor[0] === "matricula") {
        objEstudiante[filtrarValor[0]] = Number(e.target.value);
        if (
            (filtrarValor[0] === "nota" && Number(e.target.value) < 0) ||
            (filtrarValor[0] === "matricula" && Number(e.target.value) < 0)
        ) {
            objEstudiante[filtrarValor[0]] = "";
        }
    }

    console.log(objEstudiante);
}

function crearEstudiante() {
    if (
        objEstudiante.nombre !== "" &&
        objEstudiante.apellido !== "" &&
        objEstudiante.matricula !== "" &&
        objEstudiante.curso !== "" &&
        objEstudiante.nota !== ""
    ) {
        const estudianteNombre = objEstudiante.nombre;
        const estudianteApellido = objEstudiante.apellido;
        const estudianteMatricula = objEstudiante.matricula;
        const estudianteCurso = objEstudiante.curso;
        const estudianteNota = objEstudiante.nota;
        const nuevoEstudiante = new Estudiante(
            estudianteNombre,
            estudianteApellido,
            estudianteMatricula,
            estudianteCurso,
            estudianteNota
        );

        arrayEstudiantes.push(nuevoEstudiante);
        form.reset();

        console.log(arrayEstudiantes);
    }
}
