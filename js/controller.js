//alert("Bienvenido a MOKEPON")
let ataqueJugador;


function iniciarJuego(){
  let btnMascotaJugador = document.getElementById("btn_mascotas");
  btnMascotaJugador.addEventListener("click", selecionarMascotaJugador);

  let btnFuego = document.getElementById('fuego');
  btnFuego.addEventListener("click",ataqueFuego);
  let btnAgua = document.getElementById("agua");
  btnAgua.addEventListener("click",ataqueAgua);
  let btnTierra = document.getElementById("tierra");
  btnTierra.addEventListener("click",ataqueTierra)
}

function selecionarMascotaJugador(){
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
  alert(ataqueJugador)
}
function ataqueAgua(){
  ataqueJugador = "AGUA"
  alert(ataqueJugador)
}
function ataqueTierra(){
  ataqueJugador = "TIERRA"
  alert(ataqueJugador)
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego)