function movePlayer(x){
    const keyName = x.key;
    const currentCell = jogador.parentElement
    const currentCellRow = Number(jogador.parentElement.id.substring(0,2))
    const currentCellCollumn = Number(jogador.parentElement.id.substring(3))
    let rowString = String
    let collumnString = String
    //ajustando strings e movimentando vertical
    if(keyName === "ArrowUp"){
        const nextCellRow = currentCellRow - 1
        if(nextCellRow < 10){
            rowString = `0${nextCellRow}`
        }
        else{
            rowString = `${nextCellRow}`
        }
        const nextCell = document.getElementById(`${rowString}:${jogador.parentElement.id.substring(3)}`)
        if(nextCell.className !== "wall"){
            currentCell.classList.remove("player")
            nextCell.classList.add("player")
            jogador.className = ""
            jogador.className = "slideUp"
            nextCell.appendChild(jogador)    
        }
    }
    if(keyName === "ArrowDown"){
        const nextCellRow = currentCellRow + 1
        if(nextCellRow < 10){
            rowString = `0${nextCellRow}`
        }
        else{
            rowString = `${nextCellRow}`
        }
        const nextCell = document.getElementById(`${rowString}:${jogador.parentElement.id.substring(3)}`)
        if(nextCell.className !== "wall"){
            currentCell.classList.remove("player")
            nextCell.classList.add("player")
            jogador.className = ""
            jogador.className = "slideDown"
            nextCell.appendChild(jogador)    
        }      
    }
    //ajustando strings e movimentando horizontal
    if(keyName === "ArrowLeft"){
        const nextCellCollumn = currentCellCollumn - 1
        if(nextCellCollumn < 10){
            collumnString = `0${nextCellCollumn}`
        }
        else{
            collumnString = `${nextCellCollumn}`
        }
        const nextCell = document.getElementById(`${jogador.parentElement.id.substring(0,2)}:${collumnString}`)
        if(nextCell.className !== "wall"){
            currentCell.classList.remove("player")
            nextCell.classList.add("player")
            jogador.className = ""
            jogador.className = "slideLeft"
            nextCell.appendChild(jogador)    
        }
    }
    if(keyName === "ArrowRight"){
        const nextCellCollumn = currentCellCollumn + 1
        if(nextCellCollumn < 10){
            collumnString = `0${nextCellCollumn}`
        }
        else{
            collumnString = `${nextCellCollumn}`
        }
        const nextCell = document.getElementById(`${jogador.parentElement.id.substring(0,2)}:${collumnString}`)
        if(nextCell.className !== "wall"){
            currentCell.classList.remove("player")
            nextCell.classList.add("player")
            jogador.className = ""
            jogador.className = "slideRight"
            nextCell.appendChild(jogador)            
        }
    }
    //Condição de vitória
    if(jogador.parentElement.className.includes("win")){
        youWin()
    }
    //Condição de derrota
    if(jogador.parentElement.className === "enemy"){
        youLose()
    }
}

function youWin(){
    winAudio.play()
        if(fase === 4){
            setTimeout(playWin, 3500)
        }
        const antidote = document.getElementById("antidote")
        antidote.style.display = "none"
        let imagePlayer = document.getElementById("player")
        imagePlayer.style.display = "none"
        let divWin = document.getElementById("win")
        divWin.style.display = "block"
        document.removeEventListener("keydown", movePlayer)
}