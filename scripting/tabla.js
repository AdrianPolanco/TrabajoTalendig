import { mainButton } from "./animacion.js";
import { arrayEstudiantes } from "./crearEstudiante.js";

const tbodySelector = document.querySelector("tbody");
mainButton.addEventListener("click", crearTabla);

function crearTabla(e) {
    limpiarTabla();
    const filaPromedio = document.createElement("tr");

    arrayEstudiantes.forEach((student) => {
        const filaDatos = document.createElement("tr");
        filaDatos.classList.add("body__row");
        filaDatos.innerHTML = `
        <td>${student.nombre}</td>
        <td>${student.apellido}</td>
        <td>${student.matricula}</td>
        <td>${student.curso}</td>
        <td>${student.nota}</td>`;

        tbodySelector.appendChild(filaDatos);
    });

    filaPromedio.classList.add("body__row--score");

    let contador = 0;
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        contador += arrayEstudiantes[i].nota;
    }

    const promedio = contador / arrayEstudiantes.length;

    filaPromedio.innerHTML = `<td></td>
                        <td></td>
                        <td></td>
                        <td>Promedio</td>
                        <td>${promedio}</td>`;

    tbodySelector.appendChild(filaPromedio);
}

function limpiarTabla() {
    while (tbodySelector.firstChild) {
        tbodySelector.removeChild(tbodySelector.firstChild);
    }
}
