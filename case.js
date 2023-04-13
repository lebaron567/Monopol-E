import { stockData } from './src/data/data.js';
class Case{
    constructor(type,axe,pos){
        this.type = type
        this.axe = axe
        this.pos = pos
    }

    isTerrain(){
		return this.type === "ordinateur";
	}

	isPropriete(){
		return this.type === "ordinateur" || this.type === "central" || this.type === "ventilation" ;
	}
};


  


console.log(stockData); 


