// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
/*El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres 
ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" 
seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a 
una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un 
nombre de la lista y se mostrará en la página.*/

// Variables
let listaAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let resultado = document.getElementById("resultado");
let nombres = [];

console.log("Nombres iniciales:", nombres);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function limpiarCaja() {
    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    nombres.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        listaAmigos.appendChild(li);
    });
}

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        asignarTextoElemento(".section-title", "Por Favor Inserte un Nombre <br> ⬇️⬇️⬇️⬇️.");
        return;
    }

    if (nombres.includes(nombre)) {
        asignarTextoElemento(".section-title", "¡Este nombre ya está en la lista!");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    limpiarCaja();
    asignarTextoElemento(".section-title", `Has Digitado el Nombre <br>de ${nombre} al sorteo`);
    console.log("Nombres actualizados:", nombres);
}

function sortearAmigo() {
    if (nombres.length === 0) {
        asignarTextoElemento(".section-title", "No hay Nombres. <br>Agrega al Menos Uno.");
        return;
    }
    
    document.getElementById('sortear').disabled = true;
    
    let contador = 0;
    const intervalo = setInterval(() => {
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.innerHTML = `<li>Sorteando... ${nombres[indiceAleatorio]}</li>`;
        contador++;
        
        if (contador > 10) {
            clearInterval(intervalo);
            const amigoSecreto = nombres[indiceAleatorio];
            resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</li>`;
            document.getElementById('reiniciar').disabled = false;
        }
    }, 100);
}

function condicionesIniciales() {
    asignarTextoElemento(".section-title", "Digite el Nombre de Sus Amigos");
    listaAmigos.innerHTML = "";
    document.getElementById('reiniciar').disabled = true;
    document.getElementById('sortear').disabled = false;    
}

function reiniciarSorteo() {
    nombres = [];
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').disabled = true;
    document.getElementById('sortear').disabled = false;
    resultado.innerHTML = "";
}

// Inicialización
condicionesIniciales();
   

/*Implementa una función para agregar amigos
Desarrolla una función, que permita al usuario ingresar un nombre en el 
campo de texto y añadirlo a la lista de amigos creada anteriormente.

Tareas específicas:
 

Capturar el valor del campo de entrada: Utilizar document.getElementById o 
document.querySelector para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el 
campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de 
error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de 
amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.*/

// Item2

/*
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/