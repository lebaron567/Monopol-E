import { players } from "./main.js";
import { cases } from "./main.js";
const info = document.querySelector('.info_box');
 
export function play(){
    for(var i= 0; i < players.length; i++){
        console.log(players[i].round);
        if( players[i].money <0){
            displayInfo(": vous avez plus d'agent vous avez perdu", players[i])
            const properties= players[i].displayProperties()
            for(let y=0; y<properties.length;y++){
                const found = cases.find(element => element.owner == players[i].name );
                found.owner ="nobody"
                found.indexUpgrade = null
            }
            players[i].lost= true
        }
        if(players[i].round &&  !players[i].lost){
            if(players[i].throw){
                if(stockData[players[i].numCase].type == "computer" ){
                   const found = cases.find(element => element.name == stockData[players[i].numCase].name );
                    if (found.owner == "nobody"){
                        cardComputer(players[i])
                    }else if(found.owner == players[i].name){
                        displayUpgrade()
                    }else{
                        const player = players.find(element => found.owner == element.name );
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
                        update()
                        nextRound()
                    }
                }else if(stockData[players[i].numCase].type == "chance" ){
                    displayInfo(`$ : vous etre sur un case chance`,players[i])
                    let chanceNum = Math.floor(Math.random()*7)
                    switch(chanceNum){
                        case 0: 
                        displayInfo(`c'est votre anniversaire tous les joueurs vous donner 100$`)
                        players[i].money+=100*players.length
                        for(playerloop of players){
                            if(playerloop!=players[i]){
                                playerloop.money-=100
                            }
                        }
                        break;
                        case 1: 
                        let taxes = 0
                        for (let j = 0; j < cases.length; j++){
                            if(cases[j].owner === players[i]){
                                taxes+= (cases[j].price)/10
                            }
                        }
                        players[i].money-=taxes
                        displayInfo(`les impots vous on ratraper vous payez ${taxes}$ d'impot`,players[i])
                        break;
                        case 2: 
                        displayInfo(`vous faites un tour complet en passant par la case depart`,players[i])
                        players[i].money+=500
                        break;
                        case 3: 
                        displayInfo(`il y a un bug dans la banque, vous recever un virement de 300$`,players[i])
                        players[i].money+=300
                        break;
                        case 4: 
                        displayInfo(`vente forduleuse, vous avez vendu une carte graphique qui a servis a vendre de la cryptomonay. vous aller directement en case prison sans passer par la case depart`,players[i])
                        players[i].axe=2
                        players[i].pos=1
                        break;
                        case 5: 
                        displayInfo(`vous etes d'humeur genereuse et donner donc 150$ a tous les autres joueurs`,players[i])
                        players[i].money-=150*players.length
                        for(playerloop of players){
                            if(playerloop!=players[i]){
                                playerloop.money+=150
                            }
                        }
                        break;
                        case 6: 
                        displayInfo(`aller directement a la case Alienware m16`,players[i])
                        players[i].axe=4
                        players[i].pos=8
                        break;
                    }
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
                            displayInfo(` : à acheter la catrale ${found.name}`,players[i])
                            //afficher un message qui dis que le joueur a payer le proprietaire
                        }
                        update()
                    }
                    displayInfo(`: vous etre sur un case central`, players[i])
                    nextRound()
                }else if(stockData[players[i].numCase].type == "overclocking" ){
                    displayInfo(` : vous etre sur un case overclocking`,players[i])
                    if (players[i].displayProperties(cases).length !=0) {
                        displayOverclocking(players[i])
                        nextRound()
                    }
                }else if(stockData[players[i].numCase].type == "tour du monde" ){
                    displayInfo(` : vous etre sur un case tour du monde`,players[i])
                    displayTour()
                    let x2 = 0
                    if(x2>25){
                        players[i].pos=x2-24
                    }else{
                        players[i].money+=500
                        players[i].axe=Math.floor(x/8)
                        players[i].pose=x%8
                    }
                }else if(stockData[players[i].numCase].type == "prison" ){
                    displayInfo(` : vous etre sur un case prison`,players[i] )
                    nextRound()
                }else if(stockData[players[i].numCase].type == "taxe"){
                    let taxes = 0
                    for (let j = 0; j < cases.length; j++){
                        if(cases[j].owner === players[i]){
                            taxes+= (cases[j].price)/10
                        }
                    }
                    players[i].money-=taxes
                    displayInfo(`: vous avez payer ${taxes}$ de taxes`, players[i])
                    nextRound()
                }
            }
            
        }if(players[i].lost){
            nextRound()
        }
    } 

} 

export function displayInfo(text,player){
    const info = document.querySelector('.info_box');
    var div = document.createElement('div');
    div.id = 'textInfo';
    div.innerHTML = '<span style="color:'+player.couleur+'">'+player.name+'</span>'+ text;
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

export const nextRound = () => {
    let num = 0
    for(var i= 0; i < players.length; i++){
        if(players[i].round == true){
            if(players[i].doubleCount ==0){
                num = i 
                players[i].throw = false
                players[i].round=false
            }else{
                num = -1
                players[i].throw = false
            }
        }
    }
    if (num >=0){
        if(num+1<players.length){
            players[num+1].round = true
            displayInfo(": c'est a votre tour e jouer",players[num+1])
        }else{
            players[0].round = true
            displayInfo(": c'est a votre tour e jouer",players[0])
        }
    }
    update()
}

export const displayOverclocking = (player) => {
    let over = document.getElementById("Overclocking")
    const properties = player.displayProperties(cases)
    document.getElementById("ordiPlayer").replaceChildren();
    for(let i=0; i<properties.length;i++){
        let opition = document.createElement("option");
        opition.value = i
        opition.prepend(properties[i]) 
        document.getElementById("ordiPlayer").prepend(opition)
    }
    over.style.display = "flex";
    update()
}

export const displayUpgrade = () => {
    document.getElementById("ordiPlayerUP").replaceChildren();
    let ugrade = document.getElementById("addUgrade")
    const properties = perso().displayProperties(cases)
    let nbUgrade = 0
    for(let i=0; i<properties.length;i++){
            const found = cases.find(element => element.name == properties[i] );
            // if (found.indexUpgrade <3 ||found.indexUpgrade ==null){
            let opition = document.createElement("option");
            opition.value = i 
            if (found.indexUpgrade ==null){
                nbUgrade = 0
            }else{
                nbUgrade = found.indexUpgrade +1
            }
            opition.prepend(`${properties[i]}: ${nbUgrade} upgrade`) 
            document.getElementById("ordiPlayerUP").prepend(opition)
        // }
    }
    ugrade.style.display = "flex";
    update()
}

function updateComputer() {
    let player = perso()
    numero = document.getElementById("ordiPlayerUP").value;
    const found = cases.find(element => element.name == player.displayProperties(cases)[numero] );
    if (found.indexUpgrade == null){
        found.indexUpgrade =0
    }else if(found.indexUpgrade <3){
        found.indexUpgrade ++
    }
    displayUpgrade()
    update()
}
window.updateComputer = updateComputer
window.displayUpgrade =displayUpgrade

function closeUpgrade(){
    let ugrade = document.getElementById("addUgrade")
    ugrade.style.display = "none";
    nextRound()
}
window.closeUpgrade=closeUpgrade
window.OverValeur = OverValeur
window.TourDuMonde =TourDuMonde
function OverValeur(){
    numero = document.getElementById("ordiPlayer").value;
    document.getElementById("Overclocking").style.display = "none"
    cases[16].boost(cases[numero], cases)
    numero=-1
    nextRound()
}
function displayTour(){
    let tour = document.getElementById("tourDuMonde")
    document.getElementById("tour").replaceChildren();
    for(let i=0; i<31;i++){
        let opition = document.createElement("option");
        opition.value = i
        opition.prepend(`case n° ${i}`) 
        document.getElementById("tour").prepend(opition)
    }
    tour.style.display = "flex";
    update()
}
function TourDuMonde(){
    let x2 = document.getElementById("tour").value
    player =perso()
    if(x2>25){
        player.pos=x2-24
    }else{
        player.money+=500
        player.axe=Math.floor(x/8)
        player.pose=x%8
    }
    document.getElementById("tourDuMonde").style.display ="none"
    perso.throw = false
}

export const buyComputer = () => {
    for (let i=0 ; i<players.length; i++){
        if(players[i].round === true){
            if(players[i].money >= cases[players[i].numCase].price){
                cases[players[i].numCase].owner=players[i].name
                players[i].money-=cases[players[i].numCase].price
            }else {
                displayInfo(": vous avez pas assez d'agent", players[i])
            }
           
            document.getElementById("computer").style.display= "none"
        }
    }
    update()
    nextRound()
}

export function update(){
    for(var i= 0; i < players.length; i++){
        document.getElementById(players[i].name+"Money").innerHTML = players[i].money + " $"
        document.getElementById(players[i].name +"properties").remove()
        document.getElementById(players[i].name+"NBcase").innerHTML = "case n°"+players[i].numCase
        let name = document.createElement("p");
        let newProper = document.createElement("div");
        newProper.id = players[i].name +"properties"
        let properties = players[i].displayProperties(cases)
        for(var y= 0; y < properties.length; y++){
            let div = document.createElement("div");
            let name = document.createElement("p");
            let prixRAM = document.createElement("p");
            let nbcase = document.createElement("p");
            let prixCPU = document.createElement("p");
            const found = cases.find(element => element.name == properties[y] );
            name.innerHTML= properties[y] 
            nbcase.innerHTML ="case n°"+ cases.indexOf(found)
            name.innerHTML += ":  loyer de "+found.getRentPrice()+"$"
            prixCPU.innerHTML = `prix CPU: ${found.CPUPrice}`
            prixRAM.innerHTML = `prix RAM: ${found.RAMPrice}`
            div.style.backgroundColor = found.couleur
            div.id = "propertie"
            div.append(nbcase)
            div.append(name)
            div.append(prixRAM)
            div.append(prixCPU)
            newProper.append(div)
        }
        document.getElementById(players[i].name+"Info").append(newProper)
    }
}

function perso(){
    for(var i= 0; i < players.length; i++){
        if(players[i].round == true){
            return players[i]
        }
    }
}