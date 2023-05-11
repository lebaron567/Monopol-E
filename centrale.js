
export class Central{
    owner = "nobody"
    constructor(name, axe, pos, price, rent, type){
        this.type = type
        this.name = name
        this.axe = axe
        this.pose = pos
        this.price = price
        this.rent = rent
    }
    buy(playerName){
        this.owner=playerName
        this.isBoosted=false
    }
    getRentPrice(cases,player){
        let indexCentral=0
        const casesOfCentral = [4, 12, 20 ,28]
        for(let k=0; k<casesOfCentral.length;k++){
            if(cases[casesOfCentral[k]].owner===player.name){
                indexCentral++
            }
        }
        return this.rent[indexCentral]
    }
}