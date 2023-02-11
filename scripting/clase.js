class Estudiante {
    constructor(nombre, apellido, matricula, curso, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.curso = curso;
        this.nota = Number(nota);
    }
}

export { Estudiante };
