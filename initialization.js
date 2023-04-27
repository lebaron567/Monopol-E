import { stockData } from "./src/data/data.js"
import { Central } from "./centrale.js"
import { Computer } from "./computer.js"
import { Overclocking } from "./overclocking.js"

export const initialize = () => {
  let central = []
  let computer = []
  let overclocking = null 
  let cases = []
  for (let objects = 0; objects<stockData.length; objects++){
      if(stockData[objects].type==="computer"){
        computer.push(new Computer(stockData[objects].groupe, stockData[objects].axe, stockData[objects].pose, stockData[objects].name, stockData[objects].price, stockData[objects].rent, stockData[objects].upgrade, stockData[objects].RAMPrice, stockData[objects].CPUPrice))
      }
      if(stockData[objects].type==="central"){
        central.push(new Central(stockData[objects].axe,stockData[objects].pos, stockData[objects].price, stockData[objects].rent))
      }
      if(stockData[objects].type==="overclocking"){
        overclocking = new Overclocking(stockData[objects].groupe, stockData[objects].axe, stockData[objects].price)
      } 
      
  }
  cases.push(computer, central, overclocking)
  return cases
}

