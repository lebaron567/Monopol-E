export class Overclocking{
    lastBoosted = ""
    constructor(axe, pos, coste){
        this.axe = axe
        this.pos = pos
        this.coste = coste
    }
    boost(propertieSlected, computer){
        if(this.lastBoosted!==""){
            let i =0
            for (;this.lastBoosted===computer[i].name;){
                i++
            }
            computer[i].isBoosted=false
        }
        propertieSlected.isBoosted=true
    }
}