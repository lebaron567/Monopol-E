export class Central{
    owner = "nobody"
    constructor(name, axe, pos, prix, louer){
        this.name = name
        this.axe = axe
        this.pose = pos
        this.prix = prix
        this.louer = louer
    }
    buy(playerName){
        this.owner=playerName
        this.isBoosted=false
    }
}