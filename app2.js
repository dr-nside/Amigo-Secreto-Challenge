// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let Amigos = [];
let NombreIngresado = "";

function agregarAmigo() {
    let NombreIngresado = document.getElementById("amigo").value;
    if (NombreIngresado == "" || NombreIngresado == " ") {
        alert("Por favor ingrese un nombre válido");
    } else {
        Amigos.push(NombreIngresado);
        LimpiarInput();
        console.log(Amigos);
        console.log(NombreIngresado);
        MostrarListaEnPantalla('ul');
    }
}


function MostrarListaEnPantalla(elemento, list)  {
    let listaMostrar = document.getElementById(elemento);
    return;
};


function LimpiarInput() {
    document.querySelector("#amigo").value = "";
}
