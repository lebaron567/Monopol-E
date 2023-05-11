export class Computer{
    indexUpgrade = null
    owner = "nobody"
    isBoosted = false
    constructor(groupe, axe, pos, name, price, rent, upgrade, RAMPrice, CPUPrice,couleur,computer){
        this.groupe = groupe
        this.axe = axe
        this.pos = pos
        this.name = name
        this.price = price
        this.rent = rent
        this.upgrade = upgrade
        this.RAMPrice = RAMPrice
        this.CPUPrice = CPUPrice
        this.couleur = couleur
        this.computer= computer
    }
    buy(playerName){
        this.owner=playerName
        this.isBoosted=false
    }
    getRentPrice(){
        if(this.indexUpgrade==null){
            return this.rent
        }else{
            return this.upgrade[this.indexUpgrade]
        }
    }

}