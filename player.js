export class Player{
   
    NBcase = 0
    money = 500
    estate = []
    // axe = axe  a definir
    // tpos = pos  adefinir



throw(){
    const dee1 = Math.floor(Math.random() * 6);
    const dee2 = Math.floor(Math.random() * 6);
    console.log(`${dee1}+${dee2}=${dee1+dee2}`)
}

draw(){
    const cor =[6,5,4,3,2,1,0]
    console.log("test")
    if(axe == 1){
        if(pos==1){
            c.drawImage(this.image,board.width-(board.width*0.147),board.width-(board.width*0.099),50,30);
        }else{
            pos =cor[pos-2]
            c.drawImage(this.image,(board.width*0.147)+(board.height*0.1*(pos-0)),board.width-(board.width*0.099),50,30)
        }
    }
    if(axe == 2){
        if(pos==1){
            c.drawImage(this.image,40,board.height-(board.height*0.12),50,30);
        }else{
            pos =cor[pos-2]
            c.drawImage(this.image,30,(board.height*0.147)+(board.height*0.1*(pos-1)),50,30)
        }
    }
    if(axe == 3){
        if(pos==1){
            c.drawImage(this.image,50,50,50,30);
        }else{
            c.drawImage(this.image,(board.width*0.13)+(board.height*0.1*(pos-1)),40,50,30)
        }
    }
    if(axe == 4){
        if(pos==1){
            c.drawImage(this.image,board.width-(board.width*0.147),10,50,30);
        }else{
            c.drawImage(this.image,board.width-(board.width*0.12),(board.height*0.147)+(board.height*0.1*(pos-1)),50,30)
        }
    }
}

update(){
    if (keys.spase.pressed){
        this.NBcase ++
        keys.spase.pressed = false
        c.clearRect(cordener[this.NBcase-1].x+4,cordener[this.NBcase-1].y+4, 42,42);
    }
    if(this.NBcase>35){
        this.NBcase =0
    }
    this.draw();
}
}