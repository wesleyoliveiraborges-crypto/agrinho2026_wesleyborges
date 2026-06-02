const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
    x:100,
    y:100,
    size:30
};

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowUp") player.y -= 10;
    if(e.key==="ArrowDown") player.y += 10;
    if(e.key==="ArrowLeft") player.x -= 10;
    if(e.key==="ArrowRight") player.x += 10;
});

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="blue";
    ctx.fillRect(player.x,player.y,player.size,player.size);

    requestAnimationFrame(draw);
}

draw();