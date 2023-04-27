export class Computer{
    indexUpgrade = null
    owner = "nobody"
    isBoosted = false
    constructor(groupe, axe, pose, name, price, rent, upgrade, RAMPrice, CPUPrice){
        this.groupe = groupe
        this.axe = axe
        this.pose = pose
        this.name = name
        this.price = price
        this.rent = rent
        this.upgrade = upgrade
        this.RAMPrice = RAMPrice
        this.CPUPrice = CPUPrice
    }
    buy(playerName){
        this.owner=playerName
        this.isBoosted=false
    }

}