let rat11 = 0
let rat12 = 0
let rat13 = 0
let rat14 = 0
let rat15 = 0
let rat16 = 0
let rat17 = 0
let rat18 = 0

let rat21 = 0
let rat22 = 0
let rat23 = 0
let rat24 = 0
let rat25 = 0
let rat26 = 0

let rat31 = 0
let rat32 = 0
let rat33 = 0
let rat34 = 0
let rat35 = 0
let rat36 = 0


function ratPath1(){//4s, movimentação mapa 1
    rat11 = setTimeout(moveRatDown, 500)
    rat12 = setTimeout(moveRatDown, 1000)
    rat13 = setTimeout(moveRatDown, 1500)
    rat14 = setTimeout(moveRatRight, 2000)
    rat15 = setTimeout(moveRatLeft, 2500)
    rat16 = setTimeout(moveRatUp, 3000)
    rat17 = setTimeout(moveRatUp, 3500)
    rat18 = setTimeout(moveRatUp, 4000)
}

function ratPath2(){
    rat21 = setTimeout(moveRatDown, 500)
    rat22 = setTimeout(moveRatDown, 1000)
    rat23 = setTimeout(moveRatDown, 1500)
    rat24 = setTimeout(moveRatUp, 2000)
    rat25 = setTimeout(moveRatUp, 2500)
    rat26 = setTimeout(moveRatUp, 3000)
}

function ratPath3(){
    rat31 = setTimeout(moveRatUp, 500)
    rat32 = setTimeout(moveRatUp, 1000)
    rat33 = setTimeout(moveRatRight, 1500)
    rat34 = setTimeout(moveRatLeft, 2000)
    rat35 = setTimeout(moveRatDown, 2500)
    rat36 = setTimeout(moveRatDown, 3000)
}

function moveRatUp(){
    let rato = document.querySelector("#rat")
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

function moveRatDown(){
    let rato = document.querySelector("#rat")
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

function moveRatLeft(){
    let rato = document.querySelector("#rat")
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

function moveRatRight(){
    let rato = document.querySelector("#rat")
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

const ratMoveArr = [ratPath1,ratPath2,ratPath3]