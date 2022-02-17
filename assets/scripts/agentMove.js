let agent31 = 0
let agent32 = 0
let agent33 = 0
let agent34 = 0
let agent35 = 0
let agent36 = 0
let agent37 = 0
let agent38 = 0
let agent39 = 0
let agent310 = 0
let agent311 = 0
let agent312 = 0
let agent313 = 0
let agent314 = 0
let agent315 = 0
let agent316 = 0

let agent41 = 0
let agent42 = 0
let agent43 = 0
let agent44 = 0
let agent45 = 0
let agent46 = 0
let agent141 = 0
let agent142 = 0
let agent143 = 0
let agent144 = 0
let agent145 = 0
let agent146 = 0
let agent147 = 0
let agent148 = 0
let agent241 = 0
let agent242 = 0
let agent243 = 0
let agent244 = 0
let agent245 = 0
let agent246 = 0
let agent247 = 0
let agent248 = 0

let agent51 = 0
let agent52 = 0
let agent53 = 0
let agent54 = 0
let agent55 = 0
let agent56 = 0
let agent57 = 0
let agent58 = 0
let agent151 = 0
let agent152 = 0
let agent153 = 0
let agent154 = 0
let agent155 = 0
let agent156 = 0
let agent157 = 0
let agent158 = 0

function agentPath1(){
    agent31 = setTimeout(moveAgentDown, 400)
    agent32 = setTimeout(moveAgentDown, 800)
    agent33 = setTimeout(moveAgentRight, 1200)
    agent34 = setTimeout(moveAgentRight, 1600)
    agent35 = setTimeout(moveAgentDown, 2000)
    agent36 = setTimeout(moveAgentRight, 2400)
    agent37 = setTimeout(moveAgentRight, 2800)
    agent38 = setTimeout(moveAgentUp, 3200)
    agent39 = setTimeout(moveAgentDown, 3600)
    agent310 = setTimeout(moveAgentLeft, 4000)
    agent311 = setTimeout(moveAgentLeft, 4400)
    agent312 = setTimeout(moveAgentUp, 4800)
    agent313 = setTimeout(moveAgentLeft, 5200)
    agent314 = setTimeout(moveAgentLeft, 5600)
    agent315 = setTimeout(moveAgentUp, 6000)
    agent316 = setTimeout(moveAgentUp, 6400)
}

function agentPath2(){
    agent41 = setTimeout(moveAgentDown, 400)
    agent42 = setTimeout(moveAgentRight, 800)
    agent43 = setTimeout(moveAgentRight, 1200)
    agent44 = setTimeout(moveAgentLeft, 1600)
    agent45 = setTimeout(moveAgentLeft, 2000)
    agent46 = setTimeout(moveAgentUp, 2400)
}

function agentPath3(){
    agent141 = setTimeout(moveAgent1Up, 400)
    agent142 = setTimeout(moveAgent1Up, 800)
    agent143 = setTimeout(moveAgent1Left, 1200)
    agent144 = setTimeout(moveAgent1Right, 1600)
    agent145 = setTimeout(moveAgent1Right, 2000)
    agent146 = setTimeout(moveAgent1Left, 2400)
    agent147 = setTimeout(moveAgent1Down, 2800)
    agent148 = setTimeout(moveAgent1Down, 3200)
}

function agentPath4(){
    agent241 = setTimeout(moveAgent2Right, 300)
    agent242 = setTimeout(moveAgent2Right, 600)
    agent243 = setTimeout(moveAgent2Up, 900)
    agent244 = setTimeout(moveAgent2Right, 1200)
    agent245 = setTimeout(moveAgent2Left, 1500)
    agent246 = setTimeout(moveAgent2Down, 1800)
    agent247 = setTimeout(moveAgent2Left, 2100)
    agent248 = setTimeout(moveAgent2Left, 2400)
}

function agentPath5(){
    agent51 = setTimeout(moveAgent1Down, 300)
    agent52 = setTimeout(moveAgent1Down, 600)
    agent53 = setTimeout(moveAgent1Right, 900)
    agent54 = setTimeout(moveAgent1Left, 1200)
    agent55 = setTimeout(moveAgent1Down, 1500)
    agent56 = setTimeout(moveAgent1Up, 1800)
    agent57 = setTimeout(moveAgent1Up, 2100)
    agent58 = setTimeout(moveAgent1Up, 2400)
}

function agentPath6(){
    agent151 = setTimeout(moveAgent2Down, 300)
    agent152 = setTimeout(moveAgent2Down, 600)
    agent153 = setTimeout(moveAgent2Down, 900)
    agent154 = setTimeout(moveAgent2Up, 1200)
    agent155 = setTimeout(moveAgent2Right, 1500)
    agent156 = setTimeout(moveAgent2Left, 1800)
    agent157 = setTimeout(moveAgent2Up, 2100)
    agent158 = setTimeout(moveAgent2Up, 2400)
}

function moveAgentUp(){
    let rato = document.querySelector("#agent")
    const currentCellRow = Number(rato.parentElement.id.substring(0,2))
    const currentCell = rato.parentElement
    let rowString = String
    const nextCellRow = currentCellRow - 1
    if(nextCellRow < 10){
        rowString = `0${nextCellRow}`
    }
    else{
        rowString = `${nextCellRow}`
    }
    const nextCell = document.getElementById(`${rowString}:${rato.parentElement.id.substring(3)}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideUp"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato) 
}

function moveAgentDown(){
    let rato = document.querySelector("#agent")
    const currentCellRow = Number(rato.parentElement.id.substring(0,2))
    const currentCell = rato.parentElement
    let rowString = String
    const nextCellRow = currentCellRow + 1
    if(nextCellRow < 10){
        rowString = `0${nextCellRow}`
    }
    else{
        rowString = `${nextCellRow}`
    }
    const nextCell = document.getElementById(`${rowString}:${rato.parentElement.id.substring(3)}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideDown"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}

function moveAgentLeft(){
    let rato = document.querySelector("#agent")
    const currentCellCollumn = Number(rato.parentElement.id.substring(3))
    const currentCell = rato.parentElement
    let collumnString = String
    const nextCellCollumn = currentCellCollumn - 1
    if(nextCellCollumn < 10){
        collumnString = `0${nextCellCollumn}`
    }
    else{
        collumnString = `${nextCellCollumn}`
    }
    const nextCell = document.getElementById(`${rato.parentElement.id.substring(0,2)}:${collumnString}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideLeft"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}

function moveAgentRight(){
    let rato = document.querySelector("#agent")
    const currentCellCollumn = Number(rato.parentElement.id.substring(3))
    const currentCell = rato.parentElement
    let collumnString = String
    const nextCellCollumn = currentCellCollumn + 1
    if(nextCellCollumn < 10){
        collumnString = `0${nextCellCollumn}`
    }
    else{
        collumnString = `${nextCellCollumn}`
    }
    const nextCell = document.getElementById(`${rato.parentElement.id.substring(0,2)}:${collumnString}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideRight"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}

function moveAgent1Up(){
    let rato = document.querySelector("#agent1")
    const currentCellRow = Number(rato.parentElement.id.substring(0,2))
    const currentCell = rato.parentElement
    let rowString = String
    const nextCellRow = currentCellRow - 1
    if(nextCellRow < 10){
        rowString = `0${nextCellRow}`
    }
    else{
        rowString = `${nextCellRow}`
    }
    const nextCell = document.getElementById(`${rowString}:${rato.parentElement.id.substring(3)}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideUp"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato) 
}

function moveAgent1Down(){
    let rato = document.querySelector("#agent1")
    const currentCellRow = Number(rato.parentElement.id.substring(0,2))
    const currentCell = rato.parentElement
    let rowString = String
    const nextCellRow = currentCellRow + 1
    if(nextCellRow < 10){
        rowString = `0${nextCellRow}`
    }
    else{
        rowString = `${nextCellRow}`
    }
    const nextCell = document.getElementById(`${rowString}:${rato.parentElement.id.substring(3)}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideDown"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}

function moveAgent1Left(){
    let rato = document.querySelector("#agent1")
    const currentCellCollumn = Number(rato.parentElement.id.substring(3))
    const currentCell = rato.parentElement
    let collumnString = String
    const nextCellCollumn = currentCellCollumn - 1
    if(nextCellCollumn < 10){
        collumnString = `0${nextCellCollumn}`
    }
    else{
        collumnString = `${nextCellCollumn}`
    }
    const nextCell = document.getElementById(`${rato.parentElement.id.substring(0,2)}:${collumnString}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideLeft"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}

function moveAgent1Right(){
    let rato = document.querySelector("#agent1")
    const currentCellCollumn = Number(rato.parentElement.id.substring(3))
    const currentCell = rato.parentElement
    let collumnString = String
    const nextCellCollumn = currentCellCollumn + 1
    if(nextCellCollumn < 10){
        collumnString = `0${nextCellCollumn}`
    }
    else{
        collumnString = `${nextCellCollumn}`
    }
    const nextCell = document.getElementById(`${rato.parentElement.id.substring(0,2)}:${collumnString}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideRight"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}
function moveAgent2Up(){
    let rato = document.querySelector("#agent2")
    const currentCellRow = Number(rato.parentElement.id.substring(0,2))
    const currentCell = rato.parentElement
    let rowString = String
    const nextCellRow = currentCellRow - 1
    if(nextCellRow < 10){
        rowString = `0${nextCellRow}`
    }
    else{
        rowString = `${nextCellRow}`
    }
    const nextCell = document.getElementById(`${rowString}:${rato.parentElement.id.substring(3)}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideUp"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato) 
}

function moveAgent2Down(){
    let rato = document.querySelector("#agent2")
    const currentCellRow = Number(rato.parentElement.id.substring(0,2))
    const currentCell = rato.parentElement
    let rowString = String
    const nextCellRow = currentCellRow + 1
    if(nextCellRow < 10){
        rowString = `0${nextCellRow}`
    }
    else{
        rowString = `${nextCellRow}`
    }
    const nextCell = document.getElementById(`${rowString}:${rato.parentElement.id.substring(3)}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideDown"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}

function moveAgent2Left(){
    let rato = document.querySelector("#agent2")
    const currentCellCollumn = Number(rato.parentElement.id.substring(3))
    const currentCell = rato.parentElement
    let collumnString = String
    const nextCellCollumn = currentCellCollumn - 1
    if(nextCellCollumn < 10){
        collumnString = `0${nextCellCollumn}`
    }
    else{
        collumnString = `${nextCellCollumn}`
    }
    const nextCell = document.getElementById(`${rato.parentElement.id.substring(0,2)}:${collumnString}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideLeft"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}

function moveAgent2Right(){
    let rato = document.querySelector("#agent2")
    const currentCellCollumn = Number(rato.parentElement.id.substring(3))
    const currentCell = rato.parentElement
    let collumnString = String
    const nextCellCollumn = currentCellCollumn + 1
    if(nextCellCollumn < 10){
        collumnString = `0${nextCellCollumn}`
    }
    else{
        collumnString = `${nextCellCollumn}`
    }
    const nextCell = document.getElementById(`${rato.parentElement.id.substring(0,2)}:${collumnString}`)
    currentCell.classList.remove("enemy")
    nextCell.classList.add("enemy")
    rato.className = "slideRight"
    if(nextCell.classList.contains("player") || currentCell.classList.contains("player")){
        youLose()
    }
    nextCell.appendChild(rato)
}