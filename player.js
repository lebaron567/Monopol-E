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
    money = 1000
    estate = []
    axe = 1
    pos = 1
    numCase =32
    round = false
    numPlayer= 0
    throw =false
    couleur = "red"
    constructor(name,couleur){
        this.name = name
        this.couleur =couleur
    }
    doubleCount=0
    throwCount=0
    

    throwDee(){
        this.throw = true
        const dee1 = Math.floor(Math.random() * 6)+1;
        const dee2 = Math.floor(Math.random() * 6)+1;
        var div = document.createElement('div');
        div.id = 'textInfo';
        div.innerHTML =  '<span style="color:'+this.couleur+'">'+this.name+'</span>'+ ` : lanser les dée: ${dee1} et ${dee2}. Vous avanser de ${dee1+dee2} casse`;
        div.className = 'lancerDee';
        info.prepend(div);
        if (dee1===dee2){
            div.innerHTML = '<span style="color:'+this.couleur+'">'+this.name+'</span>'+ ' : as fais un double et peu donc lancer les dees a nouveau'
            info.prepend(div);
            this.doubleCount+=1
            let deplasement = dee1 +dee2
            if (deplasement + this.numCase >= 32){
                this.numCase = this.numCase + deplasement-32
            }else{
                this.money += 500
                this.numCase = this.numCase + deplasement
            }
            this.axe = stockData[this.numCase].axe
            this.pos = stockData[this.numCase].pos
            this.throwDee()
        }
        if(this.doubleCount===3){
            div.innerHTML = '<span style="color:'+this.couleur+'">'+this.name+'</span>'+ '  as fait 3 double, et ses fait arreter par la police pour fraude fiscal, il se retouve en case prison.';
            info.prepend(div);
            this.axe=2
            this.pos=1
            this.doubleCount=0
            return
        }
        if(this.doubleCount>0&&dee1!=dee2){
            this.doubleCount=0
        }
        if(this.axe===2&&this.pos===1&&this.doubleCount===0&&this.throwCount<3){
            
            return
        }
        let deplasement = dee1 +dee2
        if (deplasement + this.numCase >= 32){
            this.numCase = this.numCase + deplasement-32
            this.money += 500
        }else{
            this.numCase = this.numCase + deplasement
        }
        this.axe = stockData[this.numCase].axe
        this.pos = stockData[this.numCase].pos
    }

    draw(){
        const decalage = [{L:20,l:20},{L:55,l:20},{L:20,l:45},{L:55,l:45}]
        const cor =[6,5,4,3,2,1,0]
        // const couleur = ["red", "blue", "#FFFF00","#9400D3"]
        // this.couleur = couleur[this.numPlayer]
        c.beginPath();
        c.fillStyle= this.couleur
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
    addOrLessMoney(num){
        this.money=this.money+num
    }
    displayProperties(cases){
        let result =[]
        for (let i=0; i<cases.length; i++){
            if(cases[i].owner===this.name){
                result.push(cases[i].name)
            }
        }
        return result
    }
}
