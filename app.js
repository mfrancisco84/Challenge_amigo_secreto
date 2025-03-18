// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById('amigo');
const listaAmigos=[];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){ //funcion para agregar un amigo a la lista
   
    if (inputAmigo.value === '') { //validar que el input no este vacio
        alert('Por favor, ingrese un nombre.');
        return;
    }
    if (listaAmigos.includes(inputAmigo.value)) { //validar que el amigo no este repetido
        alert('Este amigo ya fue ingresado.');
        return
    }
    listaAmigos.push(inputAmigo.value); //agregar el amigo a la lista
       ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + `<li>${inputAmigo.value}</li>`;
       inputAmigo.value=''; //limpiar el input

}
function sortearAmigo(){ //funcion para sortear un amigo de la lista y mostrarlo en el html.
    
    if (listaAmigos.length < 2) { //validar que haya al menos dos amigos en la lista.
        alert('Por favor, ingrese al menos dos amigos.');
        return;
    }
    function recorrerListaAmigos() {
        ulListaAmigos.innerHTML = ''; // Limpiar la lista antes de agregar los elementos
        for (let i = 0; i < listaAmigos.length; i++) {
            const li = document.createElement('li');
            li.textContent = listaAmigos[i];
            ulListaAmigos.appendChild(li);
        }
       
    }
    const random = Math.floor(Math.random() * listaAmigos.length); //generar un numero aleatorio
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML =`<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
