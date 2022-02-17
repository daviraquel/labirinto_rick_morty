const jogador = document.createElement("img")
const jogadorArray = ["assets/img/picklerick.png","assets/img/picklerick2.png","assets/img/picklerick3.png","assets/img/picklerick4.png","assets/img/picklerick5.png"]
const rato1 = document.createElement("img")
const rato2 = document.createElement("img")
const ratoArray = [rato1, rato2]
let ratMove = 0
let jagMove = 0
let agentMove = 0
let agentMove1 = 0
let agentMove2 = 0
let fase = 0
let resetButton = document.getElementById("resetButton")
const interval = [4000, 3000, 3000]
let startTime = 0
let endTime = 0

function newGame(){
    let win = document.getElementById("win")
    win.style.display = "none"
    let arrayMap = mapsArray[fase]
    //verificando primeiro jogo
    let lines = document.querySelectorAll(".line")
    if(lines.length > 0){
        let mapa = document.getElementById("mapa")
        for(i=0; i < lines.length; i++){
            mapa.removeChild(lines[i])
        }
        if(fase === 5){
            return finish()
        }
    }
    else{
        startTime = performance.now()
        document.getElementById("videoWin").style.display = "none"
        document.getElementById("winMessage").style.display = "none"
        document.getElementById("sobButton").style.display = "none"
        document.getElementById("resetButton").style.display = "inline-block"
        document.getElementById("prevButton").style.display = "inline-block"
        sobAudio.play()
        setTimeout(playOpen, 2500)
    }
    //Criando células do labirinto
    for(let i = 0; i < arrayMap.length; i++){

        //criando linhas
        let lineDiv = document.createElement("div")
        lineDiv.style.display = "flex"
        lineDiv.style.justifyContent = "center"
        lineDiv.style.width = `${arrayMap[i].length * 40} px`
        lineDiv.setAttribute("class", `line`)
        lineDiv.setAttribute("id", `line${i}`)
        //criando células
        if(fase === 3 || fase === 4){
            for(let j = 0; j < arrayMap[i].length; j++){
                let cellDiv = document.createElement("div")
                if(i < 10){
                    if(j<10){
                        cellDiv.setAttribute("id", `0${i}:0${j}`)
                    }
                    else{
                        cellDiv.setAttribute("id", `0${i}:${j}`)
                    }
                }
                else if(i >= 10){
                    if(j<10){
                        cellDiv.setAttribute("id", `${i}:0${j}`)
                    }
                    else{
                        cellDiv.setAttribute("id", `${i}:${j}`)
                    }
                }
                cellDiv.style.width = "40px"
                cellDiv.style.height = "40px"
                //PAREDE
                if(arrayMap[i][j] === "W"){
                    let image = document.createElement("img")
                    image.src = "assets/img/rocks.jpg"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //PAREDE PONTA
                if(arrayMap[i][j] === "B"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/pontabaixo.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "C"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/pontacima.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "E"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/pontaesquerda.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "D"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/pontadireita.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //PAREDE MEIO
                if(arrayMap[i][j] === "H"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/meiohorizontal.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "V"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/meiovertical.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //PAREDE TRES
                if(arrayMap[i][j] === "1"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/tri1.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "2"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/tri2.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "3"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/tri3.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "4"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/tri4.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //PAREDE Quina
                if(arrayMap[i][j] === "5"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/quina1.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "6"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/quina2.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "7"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/quina3.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                if(arrayMap[i][j] === "8"){
                    let image = document.createElement("img")
                    image.src = "assets/img/walls/quina4.png"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //JOGADOR posição inicial
                if(arrayMap[i][j] === "S"){
                    let image = document.createElement("img")
                    image.src = "assets/img/tile.png"
                    cellDiv.appendChild(image)
                    jogador.src = jogadorArray[fase]
                    jogador.style.position = "absolute"
                    jogador.style.width = "40px"
                    jogador.style.left = "0"
                    jogador.style.top = "0"
                    jogador.style.display = "block"
                    jogador.setAttribute("id", "player")
                    cellDiv.appendChild(jogador)
                    cellDiv.classList.add("player")
                }
                if(arrayMap[i][j] === "O"){
                    let image = document.createElement("img")
                    image.src = "assets/img/door.jpg"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //INIMIGO
                if(arrayMap[i][j] === "J"){
                    let image = document.createElement("img")
                    image.src = "assets/img/tile.png"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/jaguar.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "jaguar")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                if(arrayMap[i][j] === "A"){
                    let image = document.createElement("img")
                    image.src = "assets/img/tile.png"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/agent.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "agent")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                if(arrayMap[i][j] === "a"){
                    let image = document.createElement("img")
                    image.src = "assets/img/tile.png"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/agent.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "agent1")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                if(arrayMap[i][j] === "b"){
                    let image = document.createElement("img")
                    image.src = "assets/img/tile.png"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/agent.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "agent2")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                //Saída do labirinto
                if(arrayMap[i][j] === "F"){
                    cellDiv.setAttribute("class", `win`)
                    let image = document.createElement("img")
                    image.src = "assets/img/tile.png"
                    cellDiv.appendChild(image)
                    let antidote = document.createElement("img")
                    antidote.src = "assets/img/antidote.png"
                    antidote.setAttribute("id", `antidote`)
                    antidote.style.position = "absolute"
                    antidote.style.left = "0"
                    antidote.style.top = "0"
                    cellDiv.appendChild(antidote)
                    //adicionar mais coisa pra diferenciar
                }
                if(arrayMap[i][j] === " "){
                    let image = document.createElement("img")
                    image.src = "assets/img/tile.png"
                    cellDiv.appendChild(image)
                }
                cellDiv.style.position = "relative"
                lineDiv.appendChild(cellDiv)
            }
        }
        else{
            for(let j = 0; j < arrayMap[i].length; j++){
                let cellDiv = document.createElement("div")
                if(i < 10){
                    if(j<10){
                        cellDiv.setAttribute("id", `0${i}:0${j}`)
                    }
                    else{
                        cellDiv.setAttribute("id", `0${i}:${j}`)
                    }
                }
                else if(i >= 10){
                    if(j<10){
                        cellDiv.setAttribute("id", `${i}:0${j}`)
                    }
                    else{
                        cellDiv.setAttribute("id", `${i}:${j}`)
                    }
                }
                cellDiv.style.width = "40px"
                cellDiv.style.height = "40px"
                //PAREDE
                if(arrayMap[i][j] === "W"){
                    let image = document.createElement("img")
                    image.src = "assets/img/rocks.jpg"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //JOGADOR posição inicial
                if(arrayMap[i][j] === "S"){
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                    jogador.src = jogadorArray[fase]
                    jogador.style.position = "absolute"
                    jogador.style.width = "40px"
                    jogador.style.left = "0"
                    jogador.style.top = "0"
                    jogador.style.display = "block"
                    jogador.setAttribute("id", "player")
                    cellDiv.appendChild(jogador)
                    cellDiv.classList.add("player")
                }
                if(arrayMap[i][j] === "O"){
                    let image = document.createElement("img")
                    image.src = "assets/img/open.jpg"
                    cellDiv.setAttribute("class", "wall")
                    cellDiv.appendChild(image)
                }
                //INIMIGO
                if(arrayMap[i][j] === "R"){
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                    let rato = document.createElement("img")
                    rato.src = "assets/img/rato.png"
                    rato.style.position = "absolute"
                    rato.style.left = "0"
                    rato.style.top = "0"             
                    rato.setAttribute("id", "rat")
                    cellDiv.appendChild(rato)
                    cellDiv.setAttribute("class", "enemy")
                }
                if(arrayMap[i][j] === "J"){
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/jaguar.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "jaguar")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                if(arrayMap[i][j] === "A"){
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/agent.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "agent")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                if(arrayMap[i][j] === "a"){
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/agent.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "agent1")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                if(arrayMap[i][j] === "B"){
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                    let jaguar = document.createElement("img")
                    jaguar.src = "assets/img/agent.png"
                    jaguar.style.position = "absolute"
                    jaguar.style.left = "0"
                    jaguar.style.top = "0"             
                    jaguar.setAttribute("id", "agent2")
                    cellDiv.appendChild(jaguar)
                    cellDiv.setAttribute("class", "enemy")
                }
                //Saída do labirinto
                if(arrayMap[i][j] === "F"){
                    cellDiv.setAttribute("class", `win`)
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                    let antidote = document.createElement("img")
                    antidote.src = "assets/img/antidote.png"
                    antidote.setAttribute("id", `antidote`)
                    antidote.style.position = "absolute"
                    antidote.style.left = "0"
                    antidote.style.top = "0"
                    cellDiv.appendChild(antidote)
                    //adicionar mais coisa pra diferenciar
                }
                if(arrayMap[i][j] === " "){
                    let image = document.createElement("img")
                    image.src = "assets/img/water.jpg"
                    cellDiv.appendChild(image)
                }
                cellDiv.style.position = "relative"
                lineDiv.appendChild(cellDiv)
            }
        }
        map.appendChild(lineDiv)
    }
    document.addEventListener('keydown', movePlayer)
    //MOVIMENTAÇÃO
    if(fase === 0 || fase === 1){
        ratMoveArr[fase]() 
        ratMove = setInterval(ratMoveArr[fase], interval[fase])
    }
    else if(fase === 2){
        ratMoveArr[fase]()
        ratMove = setInterval(ratMoveArr[fase], interval[fase])
        agentPath1()
        agentMove = setInterval(agentPath1, 6400)
    }
    else if(fase === 3){
        agentPath2()
        agentMove = setInterval(agentPath2, 2400)
        agentPath3()
        agentMove1 = setInterval(agentPath3, 3200)
        agentPath4()
        agentMove2 = setInterval(agentPath4, 2400)
    }
    else{
        showAudio.play()
        agentPath5()
        agentMove = setInterval(agentPath5, 2400)
        agentPath6()
        agentMove1 = setInterval(agentPath6, 2400)
        jagPath()
        jagMove = setInterval(jagPath, 2400)
    }
}

function youLose(){
    jogador.style.display = "none"
    clearMovesArr[fase]()
    loseAudio.play()
    document.removeEventListener("keydown", movePlayer)
}

function reset(){//ok
    clearMovesArr[fase]()
    newGame()
}

function nextMap(){
    clearMovesArr[fase]()
    fase++
    newGame()
}

function prevMap(){
    if(fase === 0){
        return
    }
    clearMovesArr[fase]()
    fase--
    newGame()
}

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);