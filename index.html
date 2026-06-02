const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let fase = 1;
let pontos = 0;

let jogador = {
x:50,
y:250,
size:40,
speed:5
};

let frutas = [
{x:200,y:100},
{x:300,y:200},
{x:400,y:150},
{x:500,y:250},
{x:650,y:120}
];

const teclas = {};

document.addEventListener("keydown",(e)=>{
teclas[e.key]=true;
});

document.addEventListener("keyup",(e)=>{
teclas[e.key]=false;
});

function mover(){

if(teclas["ArrowUp"])
jogador.y -= jogador.speed;

if(teclas["ArrowDown"])
jogador.y += jogador.speed;

if(teclas["ArrowLeft"])
jogador.x -= jogador.speed;

if(teclas["ArrowRight"])
jogador.x += jogador.speed;

}

function desenharJogador(){

ctx.fillStyle="green";

ctx.fillRect(
jogador.x,
jogador.y,
jogador.size,
jogador.size
);

}

function desenharFrutas(){

ctx.font="35px Arial";

frutas.forEach((fruta,index)=>{

ctx.fillText("🍓",fruta.x,fruta.y);

if(
jogador.x < fruta.x+30 &&
jogador.x+jogador.size > fruta.x &&
jogador.y < fruta.y+30 &&
jogador.y+jogador.size > fruta.y
){

frutas.splice(index,1);

pontos += 10;

document.getElementById("pontos").innerText = pontos;

}

});

}

function fases(){

if(fase===1 && frutas.length===0){

fase = 2;

document.getElementById("fase").innerText =
"Fase 2 - Fábrica 🏭";

}

if(fase===2){

ctx.font="80px Arial";
ctx.fillText("🏭",650,250);

if(jogador.x > 620){

fase = 3;

document.getElementById("fase").innerText =
"Fase 3 - Mercado 🏪";

jogador.x = 50;

}

}

if(fase===3){

ctx.font="80px Arial";
ctx.fillText("🏪",650,250);

if(jogador.x > 620){

fase = 4;

document.getElementById("fase").innerText =
"Fase 4 - Casa 🏠";

jogador.x = 50;

}

}

if(fase===4){

ctx.font="80px Arial";
ctx.fillText("🏠",650,250);

if(jogador.x > 620){

alert(
"Parabéns! Você levou o alimento do Campo à Mesa!"
);

location.reload();

}

}

}

function loop(){

ctx.clearRect(0,0,900,500);

mover();

desenharJogador();

if(fase===1)
desenharFrutas();

fases();

requestAnimationFrame(loop);

}

loop();