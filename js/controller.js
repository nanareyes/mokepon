//alert("Bienvenido a MOKEPON")
let ataqueJugador;
let ataqueDelEnemigo;
let vidasdelJugador = 3;
let vidasdelEnemigo = 3;

function iniciarJuego(){

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
  sectionSeleccionarAtaque.style.display="none";
  let sectionReiniciarJuejo = document.getElementById("reiniciar")
  sectionReiniciarJuejo.style.display="none";

  let btnMascotaJugador = document.getElementById("btn_mascotas");
  btnMascotaJugador.addEventListener("click", selecionarMascotaJugador);

  let btnFuego = document.getElementById('fuego');
  btnFuego.addEventListener("click",ataqueFuego);
  let btnAgua = document.getElementById("agua");
  btnAgua.addEventListener("click",ataqueAgua);
  let btnTierra = document.getElementById("tierra");
  btnTierra.addEventListener("click",ataqueTierra);
  let btnReiniciar = document.getElementById("reiniciar");
  btnReiniciar.addEventListener("click", reiniciarJuego)
}

function selecionarMascotaJugador(){
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
  sectionSeleccionarAtaque.style.display="block";
  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
  sectionSeleccionarMascota.style.display="none";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipego = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota_jugador");

  if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if(inputCapipego.checked){
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(){
  let spanMascotaEnemigo = document.getElementById("mascota_enemigo");
  let mascotaAleatoria = aleatorio(1,3);
  if(mascotaAleatoria == 1){
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2){
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego(){
  ataqueJugador = "FUEGO"
  ataqueEnemigo()
}
function ataqueAgua(){
  ataqueJugador = "AGUA"
  ataqueEnemigo()
}
function ataqueTierra(){
  ataqueJugador = "TIERRA"
  ataqueEnemigo()
}

function ataqueEnemigo(){
  let ataqueAleatorio = aleatorio(1,3);
  if(ataqueAleatorio == 1){
    ataqueDelEnemigo = "FUEGO"
  } else if(ataqueAleatorio == 2){
    ataqueDelEnemigo = "AGUA"
  } else {
    ataqueDelEnemigo = "TIERRA"
  }
  combate();
}

function combate(){
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if(ataqueJugador == ataqueDelEnemigo){
    crearMensaje("EMPATASTE")
  } else if ((ataqueJugador == "FUEGO" && ataqueDelEnemigo == "TIERRA")||
            (ataqueJugador == "AGUA" && ataqueDelEnemigo == "FUEGO")|| (ataqueJugador == "TIERRA" && ataqueDelEnemigo == "AGUA")){
    crearMensaje("GANASTE")
    vidasdelEnemigo--;
    spanVidasEnemigo.innerHTML = vidasdelEnemigo;
  } else {
    crearMensaje("PERDISTE")
    vidasdelJugador--;
    spanVidasJugador.innerHTML = vidasdelJugador;
  }
  revisarVidas();
}

function revisarVidas(){
  if(vidasdelEnemigo == 0){
    crearMensajeFinal("FELICITACIONES, GANASTE 🥳🥳🥳🥳🥳🥳 ")
  } else if(vidasdelJugador == 0){
    crearMensajeFinal("LO SENTIMOS, PERDISTE 😔😔😔😔")
  }
}

function crearMensaje(mensajeCombate){
  let mensaje = document.getElementById('mensajes')
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ". La mascota del enemigo atacó con " + ataqueDelEnemigo + ". " + mensajeCombate
  mensaje.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal){
  let sectionReiniciarJuejo = document.getElementById("reiniciar")
  sectionReiniciarJuejo.style.display="block";

  let mensaje = document.getElementById('mensajes')
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal
  mensaje.appendChild(parrafo);

  let btnFuego = document.getElementById('fuego');
  btnFuego.disabled = true;
  let btnAgua = document.getElementById("agua");
  btnAgua.disabled = true;
  let btnTierra = document.getElementById("tierra");
  btnTierra.disabled = true;
}

function reiniciarJuego(){
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego)