// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let Amigos = [];
let NombreIngresado = "";

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let NombreIngresado = document.getElementById("amigo").value;

    if (NombreIngresado === "" || NombreIngresado === " ") {
        alert("Por favor ingrese un nombre válido");
    } else {
        Amigos.push(NombreIngresado);
        LimpiarInput();
        MostrarListaEnPantalla("listaAmigos", Amigos);
        console.log(Amigos);
        console.log(NombreIngresado);
    }
}

// Función para actualizar la lista de amigos en la pantalla
function MostrarListaEnPantalla(elemento, list) {
    let listaMostrar = document.getElementById(elemento);
};

// Limpiar la lista existente
listaMostrar.innerHTML = "";

// Recorrer el array y agregar cada amigo como un elemento <li>
list.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaMostrar.appendChild(li);
});

// Función para limpiar el campo de entrada
function LimpiarInput() {
    document.querySelector("#amigo").value = "";
}

