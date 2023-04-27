import { Player } from "./player.js"
window.Player = Player
window.stockData = stockData
const board = document.querySelector('#gameBoard');
const info = document.querySelector('.info_box');
const c = board.getContext('2d');
var image = document.getElementById("source");


board.width = board.clientWidth;
board.height = board.clientHeight;



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
export function anim(){
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