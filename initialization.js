import { stockData } from "./src/data/data.js"

import { Computer } from "./computer.js"

export const initialize = () => {
    let computer = []
    for (let objects = 0; objects<stockData.length; objects++){
        if(stockData[objects].type==="computer"){
          computer.push(new Computer(stockData[objects].groupe, stockData[objects].axe, stockData[objects].pose, stockData[objects].name, stockData[objects].price, stockData[objects].rent, stockData[objects].upgrade, stockData[objects].RAMPrice, stockData[objects].CPUPrice))
        }
    }
    return computer
}

