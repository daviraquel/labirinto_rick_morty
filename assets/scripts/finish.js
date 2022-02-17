let score = 0
const winText = document.getElementById("winText")

function finish(){
    endTime = performance.now()
    let currScore = Math.round((10 ** 9)/(endTime - startTime))
    if(score === 0){
        score = currScore
        winText.innerText = `Good job! You saved Rick from the agony of being a worthless pickle!\nYour score is ${score} points.\n Maybe you can do better...`
    }
    else{
        if(score > currScore){
            winText.innerText = `Not so good job! You saved Rick from the agony of being a worthless pickle but... \nYour score is ${currScore} points.\n And your best score is ${score} points.\nTry harder!`
        }
        else{
            score = currScore
            winText.innerText = `Great job! You saved Rick from the agony of being a worthless pickle faster!\nYour new high score is ${score} points.\n Maybe you can do better...`
        }
    }
    document.getElementById("videoWin").style.display = "block"
    document.getElementById("winMessage").style.display = "block"
}

function proceed(){
    document.getElementById("winMessage").style.display = "none"
}