// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Inicializamos el array de amigos vacío, ya que en él agregaremos los nombres ingresados por el usuario
let amigos = [];

function agregarAmigo() {
    // Obtenemos el valor del input y con .trim() eliminamos los espacios en blanco de ambos extremos
    let inputNombreAmigo = document.getElementById('amigo').value.trim();

    // Validamos que no esté vacío el input antes de agregar el nombre al array de amigos[]
    if (inputNombreAmigo != '') {
        amigos.push(inputNombreAmigo);

        // Llamado a funciones auxiliares para limpiar el input y mostrar la lista actualizada
        limpiarInputAmigo();
        mostrarListaAmigos();
    } else {
        // Si el campo está vacío, mostramos una alerta al usuario
        alert('Por favor, inserte un nombre.')
    }
};

// Con esta función limpiamos el input donde se ingresan los nombres de los amigos
function limpiarInputAmigo() {
    // Dejamos vacío el input para que el usuario pueda escribir otro nombre
    document.querySelector('#amigo').value = '';
};

// Limpiamos mediante esta función la lista de amigos, específicamente los <li> dentro del <ul>
function limpiarListaAmigos() {
    // Traemos el elemento HTML, en este caso el <ul> con id "listaAmigos"
    let getListaAmigos = document.getElementById('listaAmigos');

    // Eliminamos su contenido HTML, dejando la lista vacía
    getListaAmigos.innerHTML = '';
};

// Mediante esta función mostramos en pantalla la lista actual de amigos ingresados
function mostrarListaAmigos() {
    // Traemos el elemento HTML donde se mostrará la lista de amigos
    let getListaAmigos = document.getElementById('listaAmigos');

    // Limpiamos el contenido anterior para evitar duplicados
    getListaAmigos.innerHTML = '';

    // Inicializamos la variable vacía, para luego agregar los nombres dentro de etiquetas <li>
    let listaHtml = '';
    for (let nombre of amigos) {
        listaHtml += `<li>${nombre}</li>`;
    };

    // Insertamos la lista ya formateada en el HTML
    getListaAmigos.innerHTML = listaHtml;
};

// Esta función selecciona al azar un nombre de la lista y lo muestra como "amigo secreto"
function sortearAmigo() {
    // Traemos el contenedor donde se mostrará el resultado del sorteo
    let setResultado = document.getElementById('resultado');

    // Limpiamos cualquier resultado anterior
    setResultado.innerHTML = '';

    // Si hay al menos un amigo en la lista, realizamos el sorteo
    if (amigos.length > 0) {
        // Generamos un índice aleatorio dentro del rango del array
        let indice = Math.floor(Math.random() * amigos.length);

        // Mostramos el nombre sorteado en el HTML
        setResultado.innerHTML += `<p>El amigo secreto sorteado es: ${amigos[indice]}</p>`;

        // Limpiamos la lista en pantalla (esto no borra el array)
        limpiarListaAmigos();
    } else {
        // Si no hay nombres en la lista, mostramos una alerta
        alert('Por favor ingrese un nombre válido');
    }
};
