//alert("Bienvenido a MOKEPON")
let ataqueJugador;
let ataqueDelEnemigo;
let vidasdelJugador = 3;
let vidasdelEnemigo = 3;
let imagenJugador = new Image();
let imagenEnemigo = new Image();

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
  let jugador = document.getElementById("jugador");
  let enemigo = document.getElementById("enemigo")
}

function selecionarMascotaJugador(){
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
  sectionSeleccionarAtaque.style.display="flex";
  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
  sectionSeleccionarMascota.style.display="none";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipego = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota_jugador");
  let imgMascotaJugador = document.getElementById("imagen-jugador").appendChild(imagenJugador);

  if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = "Hipodoge";
    imgMascotaJugador.src = "/mokepon/assets/mokepons_mokepon_hipodoge_attack.png"
    imgMascotaJugador.style.display="flex"
  } else if(inputCapipego.checked){
    spanMascotaJugador.innerHTML = "Capipepo";
    imgMascotaJugador.src = "/mokepon/assets/mokepons_mokepon_capipepo_attack.png"
    imgMascotaJugador.style.display="flex"
  } else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML = "Ratigueya";
    imgMascotaJugador.src = "/mokepon/assets/mokepons_mokepon_ratigueya_attack.png"
    imgMascotaJugador.style.display="flex"
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(){
  let spanMascotaEnemigo = document.getElementById("mascota_enemigo");
  let mascotaAleatoria = aleatorio(1,3);

  let imgMascotaEnemigo = document.getElementById("imagen-enemigo").appendChild(imagenEnemigo)
  if(mascotaAleatoria == 1){
    spanMascotaEnemigo.innerHTML = "Hipodoge";
    imgMascotaEnemigo.src = "/mokepon/assets/mokepons_mokepon_hipodoge_attack.png"
    imgMascotaEnemigo.style.display="flex"
  } else if (mascotaAleatoria == 2){
    spanMascotaEnemigo.innerHTML = "Capipepo";
    imgMascotaEnemigo.src = "/mokepon/assets/mokepons_mokepon_capipepo_attack.png"
    imgMascotaEnemigo.style.display="flex"
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
    imgMascotaEnemigo.src = "/mokepon/assets/mokepons_mokepon_ratigueya_attack.png"
    imgMascotaEnemigo.style.display="flex"
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
    crearMensajeFinal("FELICITACIONES, GANASTE 🥳🥳 ")
  } else if(vidasdelJugador == 0){
    crearMensajeFinal("LO SENTIMOS, PERDISTE 😔😔")
  }
}

function crearMensaje(mensajeCombate){
  let mensaje = document.getElementById('resultado');
  let ataqueDelJugador = document.getElementById('ataque-jugador');
  let ataqueEnemigo = document.getElementById('ataque-enemigo');
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  mensaje.innerHTML = mensajeCombate;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueDelEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueJugador);
  ataqueEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal){
  let sectionReiniciarJuejo = document.getElementById("reiniciar")
  sectionReiniciarJuejo.style.display="block";

  let mensaje = document.getElementById('resultado')
  mensaje.innerHTML = resultadoFinal

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