import { stockData } from './src/data/data.js';
window.stockData = stockData
const board = document.querySelector('#gameBoard');
const c = board.getContext('2d');
var image = document.getElementById("source");


board.width = board.clientWidth;
board.height = board.clientHeight;

export class Player{
   
    NBcase = 0
    money = 500
    estate = []
    axe = 1  
    pos = 1
    num =32



throw(){
    const dee1 = Math.floor(Math.random() * 6)+1;
    const dee2 = Math.floor(Math.random() * 6)+1;
    let deplasement = dee1 +dee2
    if (deplasement + this.num >= 32){
        this.num = this.num + deplasement-32
    }else{
        this.num = this.num + deplasement
    }
    this.axe = stockData[this.num].axe
    this.pos = stockData[this.num].pos
    console.log(this.num)
    console.log(`${dee1}+${dee2}=${dee1+dee2}`)
}

draw(){
    const cor =[6,5,4,3,2,1,0]
    if(this.axe == 1){
        if(this.pos==1){
            c.drawImage(image,board.width-(board.width*0.147),board.width-(board.width*0.099),25,15);
        }else{
            c.drawImage(image,(board.width*0.147)+(board.height*0.1*(cor[this.pos-2])),board.width-(board.width*0.099),25,15)
        }
    }
    if(this.axe == 2){
        if(this.pos==1){
            c.drawImage(image,40,board.height-(board.height*0.12),25,15);
        }else{
            c.drawImage(image,15,(board.height*0.15)+(board.height*0.101*(cor[this.pos-2])),25,15)
        }
    }
    if(this.axe == 3){
        if(this.pos==1){
            c.drawImage(image,50,50,25,15)
        }else{
            c.drawImage(image,(board.width*0.13)+(board.height*0.1*(this.pos-1)),25,25,15)
        }
    }
    if(this.axe == 4){
        if(this.pos==1){
            c.drawImage(image,board.width-(board.width*0.147),10,25,15);
        }else{
            c.drawImage(image,board.width-(board.width*0.12),(board.height*0.08)+(board.height*0.1*(this.pos-1)),25,15)
        }
    }
}

    update(){
        c.clearRect(0,0,board.width,board.height);
        this.draw();
    }
}

const player = new Player()

function anim(){
    player.update()
}

function  lance(){
    player.throw()
}
player.draw()

setInterval(anim,1000)
console.log("ddd")
window.lance = lance