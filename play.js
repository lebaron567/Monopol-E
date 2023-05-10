import { players } from "./main.js";
import { cases } from "./main.js";
const info = document.querySelector('.info_box');
 
export function play(){
    for(var i= 0; i < players.length; i++){
        if(players[i].round){
            if(players[i].throw){

                if(stockData[players[i].numCase].type == "computer" ){
                   const found = cases.find(element => element.name == stockData[players[i].numCase].name );
                    if (found.owner == "nobody"){
                        cardComputer(players[i])
                    }else{
                        const player = players.find(element => found.owner == element.name );
                        console.log(player.money);    console.log(players[i].money); console.log(found.rent);
                        // faire le cas ou la case est down a cause d'une carte chance 
                        if(found.indexUpgrade!==null){
                            if(found.rent!=found.upgrade[indexUpgrade]){
                                found.rent=found.upgrade[indexUpgrade]
                            }
                        }
                        if(found.isBoosted===true){
                            player.money += found.rent*1.5
                            players[i].money -= found.rent*1.5
                        }else{
                            player.money += found.rent
                            players[i].money -= found.rent
                        }
                        var div = document.createElement('div');
                        div.id = 'textInfo';
                        div.innerHTML = `${players[i].name} donne ${found.rent} $ a ${player.name}`;
                        div.className = 'loyer';
                        info.prepend(div);
                        nextRound()
                    }
                }else if(stockData[players[i].numCase].type == "chance" ){
                    displayInfo(`${players[i].name} : vous etre sur un case chance`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "central" ){
                    const found = cases.find(element => element.name == stockData[players[i].numCase].name );
                    if (found.owner == "nobody"){
                        cardComputer(players[i])
                    }else {
                        let indexCentral=0
                        const casesOfCentral = [4, 12, 20 ,28]
                        const player = players.find(element => found.owner == element.name );
                        for(let k=0; k<casesOfCentral.length;k++){
                            if(cases[casesOfCentral[k]].type==="central" && cases[casesOfCentral[k]].owner===player.name){
                                indexCentral++
                            }
                        }
                        if(players[i].name != player.name){
                            players[i].money-=cases[players[i].numCase].upgrade[indexCentral]
                            player.money+=cases[players[i].numCase].upgrade[indexCentral]
                            //afficher un message qui dis que le joueur a payer le proprietaire
                        }
                    }
                    displayInfo(`${players[i].name} : vous etre sur un case central`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "overclocking" ){
                    displayInfo(`${players[i].name} : vous etre sur un case overclocking`)
                    displayOverclocking(players[i])
                    while(numero<0){}
                    cases[16].boost(cases[numero], cases)
                    numero=-1
                    
                }else if(stockData[players[i].numCase].type == "tour du monde" ){
                    displayInfo(`${players[i].name} : vous etre sur un case tour du monde`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "prison" ){
                    displayInfo(`${players[i].name} : vous etre sur un case prison`)
                    nextRound()
                }else if(stockData[players[i].numCase].type == "taxe"){
                    let taxes = 0
                    for (let j = 0; j < cases.length; j++){
                        if(cases[j].owner === players[i]){
                            taxes+= (cases[j].price)/10
                        }
                    }
                    players[i].money-=taxes
                    //afficher un message qui dis que le joueur a payer des taxes
                }
            }
            
        }
    } 
} 

export function displayInfo(text){
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
}

const nextRound = () => {
    let num = 0
    for(var i= 0; i < players.length; i++){
        if(players[i].round == true){
            num = i 
            players[i].throw = false
            players[i].round=false
        }
    }
    if(num+1<players.length){
        players[num+1].round = true
    }else{
        players[0].round = true
    }
}

export const displayOverclocking = (player) => {
    let over = document.getElementById("Overclocking")
    const properties = player.displayProperties(cases)
    for(let i=0; i<properties.length;i++){
        let opition = document.createElement("option");
        opition.value = i
        opition.prepend(properties[i]) 
        document.getElementById("ordiPlayer").prepend(opition)
    }
    over.style.display = "flex";
}

let numero = -1
window.OverValeur = OverValeur
function OverValeur(){
    numero = document.getElementById("ordiPlayer").value;
    document.getElementById("Overclocking").style.display = "none"
}

export const buyComputer = () => {
    for (let i=0 ; i<players.length; i++){
        if(players[i].round === true){
            if(players[i].money >= cases[players[i].numCase].price){
                cases[players[i].numCase].owner=players[i].name
                players[i].money-=cases[players[i].numCase].price
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

