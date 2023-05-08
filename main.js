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

export let players = []
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
    if (players.length <4){
        var nom = document.getElementById("nom").value;
        var color = document.getElementById("colordPlayer").value;
        const player = new Player(nom,color)
        player.numPlayer = players.length
        if (players.length == 0){
            player.round = true
        }
        let suppPlayer = document.createElement("option");
        suppPlayer.value = player.numPlayer
        suppPlayer.id =player.name
        suppPlayer.prepend(player.name) 
        document.getElementById("suppPlayer").append(suppPlayer)
        // document.getElementById("loyer").innerHTML += ", " + player.name
        players.push(player)
        console.log(players);
        let div = document.createElement("div");
        let name = document.createElement("p");
        let money = document.createElement("p");
        let top = document.createElement("div");
        let properties = document.createElement("div");
        div.id = player.name+"Info"
        div.className ="infoPlayer"
        name.id= "name"
        money.id = player.name+"Money"
        name.innerHTML= player.name
        top.style.background = player.couleur
        money.innerHTML = player.money + " $"
        top.id ="topInfo"
        properties.id =player.name +"properties"

        top.append(name)
        top.append(money)
        div.append(top)
        div.append(properties)
        document.getElementById("infoPlayers").append(div)
    }
}
function suppPlayer(){
    var id = document.getElementById("suppPlayer").value;
    document.getElementById(players[id].name).remove()
    players.splice(id, 1);
    for(let i=0; i<players.length; i++){
        players[i].numPlayer = i
    }

}

window.suppPlayer = suppPlayer
window.addPlayer = addPlayer;

function start(){
    if(players.length>=2){
        setInterval(anim,100)
        setInterval(play,1000)
        document.getElementById("menu").style.display = "none";
        console.log(players);
        document.getElementById("bou").style.display = "flex";
    }
}
window.start = start;

export function anim(){
    c.clearRect(0,0,board.width,board.height);
    for(var i= 0; i < players.length; i++){
        players[i].update()
        document.getElementById(players[i].name+"Money").innerHTML = players[i].money + " $"
        document.getElementById(players[i].name +"properties").remove()
        let newProper = document.createElement("div");
        newProper.id = players[i].name +"properties"
        let Properties = players[i].displayProperties(cases)
        for(var y= 0; y < Properties.length; y++){
            let name = document.createElement("p");
            name.innerHTML= Properties[y]
            newProper.append(name)
        }
        document.getElementById(players[i].name+"Info").append(newProper)
        
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
        //console.log(players[i].name,players[i].round, players[i].throw);
        if(players[i].round == true && players[i].throw ==false){
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