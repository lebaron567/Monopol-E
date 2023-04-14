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
        c.fillStyle = 'white';
        c.fillRect(cordener[this.NBcase].x+5,cordener[this.NBcase].y+5, 40,40);
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