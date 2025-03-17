//Versión final de código: confirmación para GitHUB

let Amigos = [];

//Función para actualizar la lista amigos en pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    for (let i = 0; i < Amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = Amigos[i];
        lista.appendChild(li);
    }
}

//Función para agregar un amigo a la lista
function agregarAmigoLista() {
    let InputNombre = document.getElementById("amigo").value;
    if (InputNombre === "" || InputNombre == " ") {
        alert("Por favor ingrese un nombre válido");
        LimpiarInput();
    } else {
        if (Amigos.includes(InputNombre)) {
            alert("Este nombre ya ha sido agregado");
            LimpiarInput();
        } else {
            Amigos.push(InputNombre);
            LimpiarInput();
            actualizarListaAmigos();
        }
    } 
}

//Función para sortear la lista y obtener el amigo secreto
function sortearAmigo() {
    let IndiceAleatorio = Math.floor(Math.random()*Amigos.length);
    if (Amigos.length == 0) {
        alert("Por favor ingrese nombres para sortear, la lista está vacía");
        LimpiarInput();
    } else {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
            let li2 = document.createElement("li2");
            li2.textContent = (`El amigo secreto sorteado es: ${Amigos[IndiceAleatorio]}`);
            resultado.appendChild(li2);
        }   
    }

// Función para limpiar el campo de entrada
function LimpiarInput() {
    document.querySelector("#amigo").value = "";
}

