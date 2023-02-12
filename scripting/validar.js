import {
    form,
    mainButton,
    nombre,
    apellido,
    matricula,
    curso,
    nota,
} from "./animacion.js";
import { objEstudiante, llenarValores } from "./crearEstudiante.js";

mainButton.classList.add("disabled");
const containerStart = document.querySelector(".alert-container__start");
const containerMid = document.querySelector(".alert-container__mid");
const containerFinal = document.querySelector(".alert-container__final");

nombre.addEventListener("blur", validarOpciones);
apellido.addEventListener("blur", validarOpciones);
matricula.addEventListener("blur", validarOpciones);
curso.addEventListener("blur", validarOpciones);
nota.addEventListener("blur", validarOpciones);
form.addEventListener("submit", (e) => {
    objEstudiante.nombre = "";
    objEstudiante.apellido = "";
    objEstudiante.matricula = "";
    objEstudiante.curso = "";
    objEstudiante.nota = "";
});

function validarOpciones(e) {
    if (e.target.value === "" && e.target.id === "nombre") {
        limpiarAlertaDiv(containerStart);
        imprimirAlerta(nombre, "Todos los campos son necesarios.");
    } else if (e.target.value === "" && e.target.id === "apellido") {
        limpiarAlertaDiv(containerMid);
        imprimirAlerta(apellido, "Todos los campos son necesarios.");
    } else if (
        e.target.value === "" &&
        (e.target.id === "matricula" ||
            e.target.id === "curso" ||
            e.target.id === "nota")
    ) {
        limpiarAlertaDiv(containerFinal);
        imprimirAlerta(e.target, "Todos los campos son necesarios.");
    } else if (
        e.target.value !== "" &&
        e.target.id === "nota" &&
        Number(e.target.value) > 100
    ) {
        limpiarAlertaDiv(containerFinal);
        imprimirAlerta(nota, "No pueden existir notas mayores a 100");
        e.target.value = "";
    } else if (
        (e.target.value !== "" &&
            e.target.id === "nota" &&
            Number(e.target.value) < 0) ||
        (e.target.id === "matricula" && Number(e.target.value) < 0)
    ) {
        limpiarAlertaDiv(containerFinal);
        imprimirAlerta(nota, "No pueden introducirse valores negativos.");
        e.target.value = "";
    }

    habilitarBoton();
}

function imprimirAlerta(item, mensaje) {
    const divAlerta = document.createElement("DIV");

    divAlerta.textContent = mensaje;

    divAlerta.classList.add("alert-danger", "text-white", "p-2", "text-center");

    if (item.id === "nombre") {
        containerStart.appendChild(divAlerta);
    } else if (item.id === "apellido") {
        containerMid.appendChild(divAlerta);
    } else {
        containerFinal.appendChild(divAlerta);
    }

    setTimeout(() => divAlerta.remove(), 3000);
}

function limpiarAlertaDiv(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function habilitarBoton() {
    if (!Object.values(objEstudiante).includes("")) {
        mainButton.classList.remove("disabled");
    }
}
