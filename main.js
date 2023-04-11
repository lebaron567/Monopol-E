const board = document.querySelector('#gameBoard');
const c = board.getContext('2d');


board.width = board.clientWidth;
board.height = board.clientHeight;
const keys = {
    spase:{   pressed:false   },
 }

let frames=0;
let cordener =[]

class Case{
    constructor(x,y,tailleX,tailleY){
        this.x = x
        this.y = y
        this.tailleX = tailleX
        this.tailleY = tailleY
    }
}
//coin bas droite
c.fillRect(board.width-100,board.height-100,100,100); 
c.clearRect(board.width-98,board.height-98,96,96);
cordener.push(new Case(board.width-100,board.height-100,100,100))
// ligner de bas
for (let i=6; i>=0; i--){
    c.fillRect((board.width-200)/7*i-1+100, board.height-100, (board.width-200)/7+1, 100); 
    c.clearRect((board.width-200)/7*i+1+100, board.height-98, (board.width-200)/7-3, 96);
    cordener.push(new Case((board.width-200)/7*i-1+100,board.height-100, (board.width-200)/7+1, 100))
}
//coin bas gauche
c.fillRect(0,board.height-100,100,100); 
c.clearRect(1,board.height-98,96,96);
cordener.push(new Case(0,board.height-100,100,100))
//gaucher
for (let i=6; i>=0; i--){
    c.fillRect(0, (board.height-200)/7*i-1+100, 100 , (board.height-200)/7+1); 
    c.clearRect(1, (board.height-200)/7*i-1+2+100, 96 , (board.height-200)/7-3);
    cordener.push(new Case(0,((board.height-200)/7*i-1+100), 100 , (board.height-200)/7+1))
}

//coin haut gauche
c.fillRect(0,0,100,100); 
c.clearRect(1,1,96,96);
cordener.push(new Case(0,0,100,100))
//haut
for (let i=0; i<7; i++){
    c.fillRect((board.width-196)/7*i-1+98, 0, (board.width-196)/7+1, 100); 
    c.clearRect((board.width-196)/7*i+1+98, 1, (board.width-196)/7-3, 96);
    cordener.push(new Case((board.width-196)/7*i-1+98,0, (board.width-196)/7+1, 100))
}
//coin haut droite
c.fillRect(board.width-100,0,100,100); 
c.clearRect(board.width-96,1,95,96);
cordener.push(new Case(board.width-100,0,100,100))
for (let i=0; i<=6; i++){
    c.fillRect(board.width-100, (board.height-200)/7*i-1+100, 100 , (board.height-200)/7+1); 
    c.clearRect(board.width-96, (board.height-200)/7*i-1+2+100, 95 , (board.height-200)/7-3);
    cordener.push(new Case(board.width-100,(board.height-200)/7*i-1+100, 100, (board.height-200)/7+1))
}

class Player{
    constructor(){
        this.NBcase = 0
        this.money = 500
        this.estate = []
    }

    draw(){
        c.fillStyle = 'white';
        c.fillRect(cordener[this.NBcase].x+5,cordener[this.NBcase].y+5, 40,40);
    }

    update(){
        if (keys.spase.pressed){
            this.NBcase ++
            keys.spase.pressed = false
            c.clearRect(cordener[this.NBcase-1].x+4,cordener[this.NBcase-1].y+4, 42,42);
        }
        if(this.NBcase>31){
            this.NBcase =0
        }
        this.draw();
    }
}

const player = new Player();

player.update()

const animationLoop= ()=>{
    requestAnimationFrame(animationLoop);
    player.update();
   frames++;
    
}
animationLoop();

export  function addEventListener() {
    
    console.log(2)
 }  