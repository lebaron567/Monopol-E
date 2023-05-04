import { players } from "./main.js";
import { cases } from "./main.js";
const info = document.querySelector('.info_box');
 
export function play(){

    for(var i= 0; i < players.length; i++){
        // console.log(players[i].name + ":" + players[i].round, players[i].throw)
        // console.log()
        if(players[i].round){
            if(players[i].throw){
                if(stockData[players[i].numCase].type == "computer" ){
                   const found = cases.find(element => element.name == stockData[players[i].numCase].name );
                    if (found.owner == "nobody"){
                        cardComputer(players[i])
                    }else{
                        const player = players.find(element => found.owner == element.name );
                        player.money += found.rent
                        players[i].money += found.rent

                        var div = document.createElement('div');
                        div.id = 'textInfo';
                        div.innerHTML = `${players[i].name} donne ${found.rent} $ a ${player.name}`;
                        div.className = 'loyer';
                        info.prepend(div);
                    }
                }else if(stockData[players[i].numCase].type == "chance" ){
                    displayInfo(`${players[i].name} : vous etre sur un case chance`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "central" ){
                    displayInfo(`${players[i].name} : vous etre sur un case central`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "overclocking" ){
                    displayInfo(`${players[i].name} : vous etre sur un case overclocking`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "tour du monde" ){
                    displayInfo(`${players[i].name} : vous etre sur un case tour du monde`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "prison" ){
                    displayInfo(`${players[i].name} : vous etre sur un case prison`)
                    nextRound()
                }else{
                    nextRound()
                }
            }
        }
    } 
} 

function displayInfo(text){
    const info = document.querySelector('.info_box');
    var div = document.createElement('div');
    div.id = 'textInfo';
    div.innerHTML = text;
    div.className = 'info';
    info.prepend(div);
}

function cardComputer(player){
    let computer = document.getElementById("computer")
    computer.style.display = "flex";
    document.getElementById("titre").style.backgroundColor = stockData[player.numCase].couleur;
    document.getElementById("nameCard").innerHTML = stockData[player.numCase].name
    document.getElementById("prixAchat").innerHTML = stockData[player.numCase].price+"$"
    document.getElementById("loyer").innerHTML = stockData[player.numCase].rent+"$"
    document.getElementById("upgrade1").innerHTML = stockData[player.numCase].upgrade[0] +"$"
    document.getElementById("upgrade2").innerHTML = stockData[player.numCase].upgrade[1] +"$"
    document.getElementById("upgrade3").innerHTML = stockData[player.numCase].upgrade[2] +"$"
    document.getElementById("upgrade4").innerHTML = stockData[player.numCase].upgrade[3] +"$"
    document.getElementById("priceRAM").innerHTML = stockData[player.numCase].RAMPrice +"$"
    document.getElementById("priceCPU").innerHTML = stockData[player.numCase].CPUPrice +"$"
    prixAchat 
    player.throw = false
}

const nextRound = () => {
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


export const buyComputer = () => {
    console.log(cases);
    for (let i=0 ; i<players.length; i++){
        if(players[i].round === true){
            // console.log(players[i].money);
            console.log(cases[players[i].numCase]);
            if(players[i].money >= cases[players[i].numCase].price){
                cases[players[i].numCase].owner=players[i].name
                console.log(cases[players[i].numCase].price);
                players[i].money-=cases[players[i].numCase].price
                console.log(players[i].money);
            }else {
                //afficher vous n'aver aps assez d'argent 
            }
           
            document.getElementById("computer").style.display= "none"
            players[i].throw=false
            players[i].round=false
            if(i+1<players.length){
                players[i+1].round = true
            }else{
                players[0].round = true
            }
            return
        }
    }
}