import { stockData } from './src/data/data.js';
window.stockData = stockData
const board = document.querySelector('#gameBoard');
const info = document.querySelector('.info_box');
const c = board.getContext('2d');
var image = document.getElementById("source");


board.width = board.clientWidth;
board.height = board.clientHeight;


export class Player{
    name=""
    NBcase = 0
    money = 500
    estate = []
    axe = 1
    pos = 1
    numCase =32
    round =false
    numPlayer= 0



throw(){
    const dee1 = Math.floor(Math.random() * 6)+1;
    const dee2 = Math.floor(Math.random() * 6)+1;
    let deplasement = dee1 +dee2
    if (deplasement + this.numCase >= 32){
        this.numCase = this.numCase + deplasement-32
    }else{
        this.numCase = this.numCase + deplasement
    }
    this.axe = stockData[this.numCase].axe
    this.pos = stockData[this.numCase].pos
    console.log(this.numCase)
    var div = document.createElement('div');
    div.id = 'textInfo';
    div.innerHTML = `${this.name} : lanser les dée: ${dee1} et ${dee2}. Vous avanser de ${dee1+dee2} casse`;
    div.className = 'lancerDee';
 
    info.prepend(div);
    this.round = false
}

draw(){
    const decalage = [{L:20,l:20},{L:55,l:20},{L:20,l:45},{L:55,l:45}]
    const cor =[6,5,4,3,2,1,0]
    const couleur = ["red", "blue", "#FFFF00","#9400D3"]
    c.beginPath();
    c.fillStyle=couleur[this.numPlayer]
    if(this.axe == 1){
        if(this.pos==1){
            c.arc(board.width-(board.width*0.15) + decalage[this.numPlayer].L,board.width-(board.width*0.136) + decalage[this.numPlayer].l,10,0, 2 * Math.PI);
        }else{
            c.arc((board.width*0.14) + (board.height*0.1*(cor[this.pos-2])) + decalage[this.numPlayer].l, board.width-(board.width*0.099) + decalage[this.numPlayer].L,10,0, 2 * Math.PI)
        }
    }
    if(this.axe == 2){
        if(this.pos==1){
            c.arc(0 + decalage[this.numPlayer].l,board.height-(board.height*0.12) + decalage[this.numPlayer].L,10,0, 2 * Math.PI);
        }else{
            c.arc(0 + decalage[this.numPlayer].L,(board.height*0.15) + decalage[this.numPlayer].l+(board.height*0.101*(cor[this.pos-2])),10,0, 2 * Math.PI)
        }
    }
    if(this.axe == 3){
        if(this.pos==1){
            c.arc(0+decalage[this.numPlayer].L,0 + decalage[this.numPlayer].l,10,0, 2 * Math.PI)
        }else{
            c.arc((board.width*0.14)+(board.height*0.1*(this.pos-2)) + decalage[this.numPlayer].l, 0 + decalage[this.numPlayer].L,10,0, 2 * Math.PI)
        }
    }
    if(this.axe == 4){
        if(this.pos==1){
            c.arc(board.width-(board.width*0.147) + decalage[this.numPlayer].L,0 + decalage[this.numPlayer].l,10,0, 2 * Math.PI);
        }else{
            c.arc(board.width-(board.width*0.12) + decalage[this.numPlayer].L,(board.height*0.14)+(board.height*0.105*(this.pos-2)) + decalage[this.numPlayer].l,10,0, 2 * Math.PI)
        }
    }
    c.fill();
}

    update(){
        this.draw();
    }
}
const players = []
const player1 = new Player()
player1.round = true
player1.name ="clavier"
players.push(player1)
const player2 = new Player()
player2.name ="ecren"
player2.numPlayer = 1
players.push(player2)

c.arc(0, 0, 90, 0, 2 * Math.PI);
function anim(){
    c.clearRect(0,0,board.width,board.height);
    for(var i= 0; i < players.length; i++){
        players[i].update()

    }
}

function  lance(){
    let num =0
    console.log(players[0],players[1])
    for(var i= 0; i < players.length; i++){
        console.log(players[i],i)
        if(players[i].round == true){
            players[i].throw()
            num = i
            
        }
    }
    if(num+1<players.length){
        players[num+1].round = true
    }else{
        players[0].round = true
    }
}

setInterval(anim,100)
window.lance = lance