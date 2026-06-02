const agricultor = new Image();
agricultor.src = "imagens/agricultor.png";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let fase = 1;
let pontos = 0;

const pontosTxt = document.getElementById("pontos");
const faseTxt = document.getElementById("fase");

let player = {
    x:50,
    y:250,
    size:35,
    speed:5
};

let frutas = [
    {x:150,y:100},
    {x:300,y:200},
    {x:500,y:100},
    {x:650,y:300},
    {x:800,y:150}
];

let teclas = {};

document.addEventListener("keydown", e=>{
    teclas[e.key]=true;
});

document.addEventListener("keyup", e=>{
    teclas[e.key]=false;
});

function mover(){
    if(teclas["ArrowUp"]) player.y -= player.speed;
    if(teclas["ArrowDown"]) player.y += player.speed;
    if(teclas["ArrowLeft"]) player.x -= player.speed;
    if(teclas["ArrowRight"]) player.x += player.speed;
}
function desenharPlayer(){
    ctx.drawImage(
        agricultor,
        player.x,
        player.y,
        50,
        50
    );
}

function desenharFrutas(){
    ctx.font="30px Arial";

    frutas.forEach((fruta,index)=>{
        ctx.fillText("🍎",fruta.x,fruta.y);

        if(
            player.x < fruta.x+25 &&
            player.x+player.size > fruta.x &&
            player.y < fruta.y+25 &&
            player.y+player.size > fruta.y
        ){
            frutas.splice(index,1);
            pontos += 10;
            pontosTxt.textContent = pontos;
        }
    });
}

function verificarFase(){
    if(fase===1 && frutas.length===0){
        fase=2;
        faseTxt.textContent="Fase 2 - Transporte 🚚";

        player.x=50;
        player.y=250;
    }

    if(fase===2){

        ctx.fillStyle="gray";
        ctx.fillRect(750,180,100,120);

        ctx.font="50px Arial";
        ctx.fillText("🚚",760,260);

        if(player.x > 740){
            fase=3;
            faseTxt.textContent="Fase 3 - Mercado 🏪";
            player.x=50;
        }
    }

    if(fase===3){

        ctx.font="70px Arial";
        ctx.fillText("🏪",700,250);

        if(player.x > 680){
            fase=4;
            faseTxt.textContent="Fase 4 - Mesa 🍽️";
        }
    }

    if(fase===4){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.font="90px Arial";
        ctx.fillText("🍽️",400,180);

        ctx.font="30px Arial";
        ctx.fillText("Parabéns!",330,280);

        ctx.fillText("Você levou os alimentos do campo até a mesa!",150,330);

        ctx.fillText("Pontuação Final: "+pontos,300,390);

        return true;
    }

    return false;
}

function loop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    mover();

    desenharPlayer();

    if(fase===1){
        desenharFrutas();
    }

    if(verificarFase()) return;

    requestAnimationFrame(loop);
}

loop();