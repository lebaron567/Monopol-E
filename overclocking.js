export class Overclocking{
    owner = "game"
    lastBoosted = ""
    constructor(axe, pos, coste){
        this.axe = axe
        this.pos = pos
        this.coste = coste
    }
    boost(propertieSlected, cases){
        if(this.lastBoosted!==""){
            let i =0
            for (;this.lastBoosted== cases[i].name;){
                i++
            }
         cases[i].isBoosted=false
        }
        propertieSlected.isBoosted=true
    }
}