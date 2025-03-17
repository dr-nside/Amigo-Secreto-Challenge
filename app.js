// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let NombreIngresado = document.getElementById("amigo").value;

    if (NombreIngresado === "" || NombreIngresado === " ") {
        alert("Por favor ingrese un nombre válido");
    } else {
        if (Amigos.includes(NombreIngresado)) {
            alert("Este nombre ya ha sido agregado");
            } else {
                Amigos.push(NombreIngresado);
                LimpiarInput();
                MostrarListaEnPantalla("listaAmigos", Amigos);
                console.log(Amigos);
                console.log(NombreIngresado);
            }
 
}

// Función para actualizar la lista de amigos en la pantalla
function MostrarListaEnPantalla() {
    let listaMostrar = document.getElementById("listaAmigos");
    listaMostrar.innerHTML = ""; // Limpiar lista antes de actualizar
}

    Amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaMostrar.appendChild(li);
    });
}

// Función para limpiar el campo de entrada
function LimpiarInput() {
    document.querySelector("#amigo").value = "";
}

