import { Player } from "./player.js"
import { stockData } from './src/data/data.js';
import { initialize } from "./initialization.js";
import { play } from "./play.js";
import { buyComputer } from "./play.js";
window.buyComputer=buyComputer
var image = document.getElementById("source");
const board = document.querySelector('#gameBoard');
const c = board.getContext('2d');
board.width = board.clientWidth;
board.height = board.clientHeight;

export const players = []
// const player1 = new Player("clavier")
// player1.round = true
// players.push(player1)
// const player2 = new Player("ecren")
// const player3 = new Player("cable")
// const player4 = new Player("batrie")
// player2.numPlayer = 1
// player3.numPlayer = 2
// player4.numPlayer = 3
// players.push(player2,player3,player4) 
// setInterval(anim,100)
// setInterval(play,100)

function addPlayer(){
    var nom = document.getElementById("nom").value;
    if (players.length ==0){
        const player = new Player(nom)
        player.numPlayer = 0
        player.round = true
        document.getElementById("loyer").innerHTML +=player.name
        players.push(player)
    }else if (players.length <4){
        const player = new Player(nom)
        players.push(player)
        player.numPlayer = players.length-1
        document.getElementById("loyer").innerHTML += ", " + player.name
    }
}
window.addPlayer = addPlayer;

function start(){
    setInterval(anim,100)
    setInterval(play,100)
    document.getElementById("menu").style.display = "none";
    console.log(players);
}
window.start = start;

export function anim(){
    c.clearRect(0,0,board.width,board.height);
    for(var i= 0; i < players.length; i++){
        players[i].update()

    }
}
setInterval(anim,100)
console.log(players)
function perso(){
    for(var i= 0; i < players.length; i++){
        if(players[i].round == true){
            return players[i]
        }
    }
}

function  lance(){
    let num =0
    console.log()
    for(var i= 0; i < players.length; i++){
        if(players[i].round == true){
            players[i].throw = true
            players[i].throwDee()
            num = i
            
        }
    }
}

window.lance = lance




export let cases = initialize()
console.log(cases[0])
const player = new Player("nobody");
console.log(player.displayProperties(cases[1]))


function openForm() {
    document.getElementById("computer").style.display = "block";
}

function closeForm() {
    document.getElementById("computer").style.display = "none";
    nextRound()
}
function nextRound(){
    let num = 0
    for(var i= 0; i < players.length; i++){
        if(players[i].round == true){
            num = i 
            players[i].throw = false
            players[i].round = false
        }
    }
    if(num+1<players.length){
        players[num+1].round = true
    }else{
        players[0].round = true
    }
}

function OverValeur(){
    var numero = document.getElementById("ordiPlayer").value;
    document.getElementById("Overclocking").style.display = "none"
    console.log(numero)
}
window.OverValeur = OverValeur
window.openForm = openForm
window.closeForm = closeForm