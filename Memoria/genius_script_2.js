function ajustar() {
  let width = document.body.scrollWidth;
  width = width;
  genius = document.getElementsByClassName("genius").item(0);
  genius.style.width = width * 0.5 + "px";
  genius.style.height = width * 0.5 + "px";
  center = document.getElementById("center");
  center.style.width = width * 0.25 + "px";
  center.style.height = width * 0.25 + "px";
  let height = document.body.scrollHeight;
  center.style.bottom = height / 2 + "px";
}

ajustar();
let red = document.getElementsByClassName("vermelho").item(0);
let blue = document.getElementsByClassName("azul").item(0);
let yellow = document.getElementsByClassName("amarelo").item(0);
let green = document.getElementsByClassName("verde").item(0);
let colors = [red, blue, yellow, green];
let order = [];
clickOrder = [];

//faz o o brilho e o som do elemento quando clicado
function blink(element, with_audio = true) {
  if (with_audio) {
    let audio_name = element.className + ".wav";
    let audio = new Audio(audio_name);
    audio.play();
  }
  element.classList.add("light");
  setTimeout(() => {
    element.classList.remove("light");
  }, 500);
}

function addOneColorToOrder() {
  rand_int = Math.floor(Math.random() * 4);
  order[order.length] = colors[rand_int];
}

function blinkOrder() {
  let count = 0;
  for (let element of order) {
    setTimeout(() => {
      blink(element, false);
    }, 1000 * count);
    count++;
  }
}

function check() {
  for (let e in clickOrder) {
    if (clickOrder[e] != order[e]) {
      return false;
    }
  }
  return true;
}
function blinkAll() {
  blink(red, false);
  blink(blue, false);
  blink(yellow, false);
  blink(green, false);
  setTimeout(() => {
    blink(red, false);
    blink(blue, false);
    blink(yellow, false);
    blink(green, false);
  }, 1000);
}

addOneColorToOrder();
blinkOrder();
function clicar(element) {
  blink(element);
  clickOrder[clickOrder.length] = element;
  if (check()) {
    console.log("Por Enquanto tudo certo");
    if (clickOrder.length == order.length && check()) {
      blinkAll();
      setTimeout(() => {
        clickOrder = [];
        addOneColorToOrder();
        blinkOrder();
      }, 2000);
    }
  } else {
    console.log("Perdeu");
  }
}
