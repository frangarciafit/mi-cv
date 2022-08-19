//declaro funciones 
let usuario = []
let visitas = 0

//identificarse
let btnIdentificarse = document.querySelector('#identificarse')

btnIdentificarse.addEventListener('click', identificarUsuario);

let contador_visitas = document.querySelector('#cant-visitas') 
let parrafo_bienvenido = document.querySelector('#tittle')
let button_reiniciar = document.querySelector('#reiniciar_contador')
let button_listar = document.querySelector('#lista_usuarios')
let mostrar_usuarios = document.querySelector('#muestra_usuarios')

button_reiniciar.addEventListener('click', reiniciarContador)
button_listar.addEventListener('click', mostrarUsuarios)
//functions
function identificarUsuario(){
    nombre = prompt('Ingrese su nombre para identificarse:')
    if (nombre != "" & nombre != null) {
        usuario = JSON.parse(localStorage.getItem('usuarios')) 
        usuario.push(nombre)
        contador()
        localStorage.setItem('usuarios', JSON.stringify(usuario))
        parrafo_bienvenido.innerHTML = "Bienvenido " + nombre
        console.log(usuario)
    }else{
        alert('debe ingresar su nombre')
    }
    
}

function contador(){
    let visitas = JSON.parse(localStorage.getItem('contador'))
    visitas = visitas + 1
    contador_visitas.innerHTML =  visitas
    localStorage.setItem('contador', JSON.stringify(visitas))
}

function reiniciarContador() {
    visitas = 0
    localStorage.setItem('contador', JSON.stringify(visitas))
    console.log('reiniciado')
    contador_visitas.innerHTML =  visitas
}

function mostrarUsuarios() {
    let usuariosTotales = JSON.parse(localStorage.getItem('usuarios'))
    console.log('hola')
    console.log(usuariosTotales)
    mostrar_usuarios.innerText = ""
    for (user of usuariosTotales){
        let l = document.createElement('li')
        l.innerText = user
        mostrar_usuarios.appendChild(l)
        console.log(user)
    }
}