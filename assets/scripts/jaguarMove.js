let jag41 = 0
let jag42 = 0
let jag43 = 0
let jag44 = 0
let jag45 = 0
let jag46 = 0
let jag47 = 0
let jag48 = 0
let jag49 = 0
let jag410 = 0
let jag411 = 0
let jag412 = 0

function jagPath(){//4x down
    jag41 = setTimeout(moveJagDown, 200)
    jag42 = setTimeout(moveJagDown, 400)
    jag43 = setTimeout(moveJagDown, 600)
    jag44 = setTimeout(moveJagDown, 800)
    jag45 = setTimeout(moveJagRight, 1000)
    jag46 = setTimeout(moveJagRight, 1200)
    jag47 = setTimeout(moveJagUp, 1400)
    jag48 = setTimeout(moveJagUp, 1600)
    jag49 = setTimeout(moveJagUp, 1800)
    jag410 = setTimeout(moveJagUp, 2000)
    jag411 = setTimeout(moveJagLeft, 2200)
    jag412 = setTimeout(moveJagLeft, 2400)
}

function moveJagUp(){
    let rato = document.querySelector("#jaguar")
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

function moveJagDown(){
    let rato = document.querySelector("#jaguar")
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

function moveJagLeft(){
    let rato = document.querySelector("#jaguar")
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

function moveJagRight(){
    let rato = document.querySelector("#jaguar")
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
