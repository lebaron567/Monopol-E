import { stockData } from "./src/data/data.js"
import { Central } from "./centrale.js"
import { Computer } from "./computer.js"
import { Overclocking } from "./overclocking.js"
import { Depart } from "./depart.js"
import { TourDuMonde } from "./tourDuMonde.js"
import { Chance } from "./chance.js"
import { Prison } from "./prison.js"
import { Taxe } from "./taxe.js"

export const initialize = () => {
  let cases = []
  for (let objects = 0; objects<stockData.length; objects++){
    if(stockData[objects].type==="depart"){
      cases.push(new Depart)
    }
    if(stockData[objects].type==="chance"){
      cases.push(new Chance)
    }
    if(stockData[objects].type==="prison"){
      cases.push(new Prison)
    }
    if(stockData[objects].type==="taxe"){
      cases.push(new Taxe)
    }
    if(stockData[objects].type==="tour du monde"){
      cases.push(new TourDuMonde)
    }
    if(stockData[objects].type==="computer"){
      cases.push(new Computer(stockData[objects].groupe, stockData[objects].axe, stockData[objects].pose, stockData[objects].name, stockData[objects].price, stockData[objects].rent, stockData[objects].upgrade, stockData[objects].RAMPrice, stockData[objects].CPUPrice, stockData[objects].couleur, stockData[objects].type))
    }
    if(stockData[objects].type==="central"){
      cases.push(new Central(stockData[objects].name, stockData[objects].axe,stockData[objects].pos, stockData[objects].price, stockData[objects].rent, stockData[objects].type))
    }
    if(stockData[objects].type==="overclocking"){
      cases.push(new Overclocking(stockData[objects].groupe, stockData[objects].axe, stockData[objects].price))
    } 
  }
  return cases
}

