import { stockData } from "./src/data/data.js"
import { Ordinateur } from "./ordinateur.js"

export const initialize = () => {
    let ordinateur = []
    for (let objects = 0; objects<stockData.length; objects++){
       
        
        if(stockData[objects].type=== "ordinateur"){
          ordinateur.push(new Ordinateur(stockData[objects].groupe, stockData[objects].axe, stockData[objects].pose, stockData[objects].nom, stockData[objects].price, stockData[objects].rent, stockData[objects].upgrade, stockData[objects].RAMPrice, stockData[objects].CPUPrice))
        }

    }
    if(ordinateur !== null){
        return ordinateur
    }
}
initialize()
