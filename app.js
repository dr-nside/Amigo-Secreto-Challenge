// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigoLista () {
    let InputNombre = document.getElementById("amigo").value;
    
    if (InputNombre === "" || NombreIngresado == " ") {
        alert("Por favor ingrese un nombre válido");
    } else {
        if (Amigos.includes(InputNombre)) {
            alert("Este nombre ya ha sido agregado");
        } else {
            Amigos.push(InputNombre);
            LimpiarInput();
            console.log(Amigos);
            console.log(InputNombre);
        }
    } 
    
}

// Función para limpiar el campo de entrada
function LimpiarInput() {
    document.querySelector("#amigo").value = "";
}

