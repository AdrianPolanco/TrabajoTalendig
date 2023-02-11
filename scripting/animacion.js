const title = document.querySelector("h1");
const mainButton = document.querySelector(".btn--main");
const form = document.querySelector("form");
const p = document.querySelector(".btn--main__p");

//Inputs
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const matricula = document.querySelector("#matricula");
const curso = document.querySelector("#curso");
const nota = document.querySelector("#nota");

//Labels
const nombreLabel = document.querySelector("[for='nombre']");
const apellidoLabel = document.querySelector("[for='apellido']");
const matriculaLabel = document.querySelector("[for='matricula']");
const cursoLabel = document.querySelector("[for='curso']");
const notaLabel = document.querySelector("[for='nota']");

//Array de inputs y labels
let arrayInputs = [nombre, apellido, matricula, curso, nota];
let arrayLabels = [
    nombreLabel,
    apellidoLabel,
    matriculaLabel,
    cursoLabel,
    notaLabel,
];

export function animar() {
    mainButton.addEventListener("mouseover", animateTitle);
    mainButton.addEventListener("mouseout", animateTitleOff);
    mainButton.addEventListener("click", showClick);

    function showClick(e) {
        e.preventDefault();
        p.classList.toggle("show-click");
        mainButton.classList.toggle("btn--default");
        mainButton.classList.toggle("btn--clicked");
        title.classList.remove("title--animated");
        title.classList.add("score--published");
        form.classList.add("form__notas--clicked");
        arrayInputs.forEach(
            (item) => (item.style.border = "1px rgb(255, 168, 7) solid")
        );
        arrayLabels.forEach((item) => item.classList.add("show-click--inputs"));
        setTimeout(() => {
            p.classList.toggle("show-click");
            mainButton.classList.toggle("btn--default");
            mainButton.classList.toggle("btn--clicked");
            title.classList.remove("score--published");
            form.classList.remove("form__notas--clicked");
            arrayInputs.forEach(
                (item) => (item.style.border = "1px rgb(161, 161, 161) solid")
            );
            arrayLabels.forEach((item) =>
                item.classList.remove("show-click--inputs")
            );
        }, 3000);
    }

    function animateTitle(e) {
        title.classList.add("title--animated");
    }

    function animateTitleOff(e) {
        title.classList.remove("title--animated");
    }
}

animar();

export { form, mainButton, nombre, apellido, matricula, curso, nota };
