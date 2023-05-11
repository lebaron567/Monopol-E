import { Player } from "./player.js"
import { stockData } from './src/data/data.js';
import { initialize } from "./initialization.js";
import { play } from "./play.js";
import { buyComputer } from "./play.js";
import { nextRound } from "./play.js";
import { update } from "./play.js";
window.openForm = openForm
window.closeForm = closeForm
window.buyComputer = buyComputer
window.start = start;
window.suppPlayer = suppPlayer
window.addPlayer = addPlayer;
var image = document.getElementById("source");
const board = document.querySelector('#gameBoard');
const c = board.getContext('2d');
board.width = board.clientWidth;
board.height = board.clientHeight;
window.lance = lance

export let cases = initialize()
const player = new Player("nobody");
export let players = []


function addPlayer(){
    if (players.length <4){
        var nom = document.getElementById("nom").value;
        var color = document.getElementById("colordPlayer").value;
        const player = new Player(nom,color)
        document.getElementById("nom").value = ""
        player.numPlayer = players.length
        let suppPlayer = document.createElement("option");
        suppPlayer.value = player.numPlayer
        suppPlayer.id =player.name
        suppPlayer.prepend(player.name) 
        document.getElementById("suppPlayer").append(suppPlayer)
        players.push(player)
        let div = document.createElement("div");
        let name = document.createElement("p");
        let money = document.createElement("p");
        let top = document.createElement("div");
        let properties = document.createElement("div");
        let NBcase = document.createElement("p");
        div.id = player.name+"Info"
        div.className ="infoPlayer"
        name.id= "name"
        NBcase.innerHTML = "case n°0"
        NBcase.id = player.name+"NBcase"
        money.id = player.name+"Money"
        name.innerHTML= player.name
        top.style.background = player.couleur
        money.innerHTML = player.money + " $"
        top.id ="topInfo"
        properties.id =player.name +"properties"
        top.append(name)
        top.append(money)
        div.append(top)
        top.append(NBcase)
        div.append(properties)
        document.getElementById("infoPlayers").append(div)
    }
}
function suppPlayer(){
    var id = document.getElementById("suppPlayer").value;
    document.getElementById(players[id].name).remove()
    document.getElementById(players[id].name+"Info").remove()
    players.splice(id, 1);
    for(let i=0; i<players.length; i++){
        players[i].numPlayer = i
    }

}

function start(){
    if(players.length>=2){
        setInterval(anim,100)
        setInterval(play,100)
        document.getElementById("menu").style.display = "none";
        document.getElementById("bou").style.display = "flex";
        // document.getElementById("ungrade").style.display = "flex";
        players[0].round = true
    }
}


export function anim(){
    c.clearRect(0,0,board.width,board.height);
    for(var i= 0; i < players.length; i++){
        players[i].update()
    }
}


function  lance(){
    let num =0
    for(var i= 0; i < players.length; i++){
        if(players[i].round == true && players[i].throw ==false){
            players[i].throw = true
            players[i].throwDee()
            num = i 
        }
    }
    update()
}


function openForm() {
    document.getElementById("computer").style.display = "block";
}

function closeForm() {
    document.getElementById("computer").style.display = "none";
    nextRound()
}

