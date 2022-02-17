//Áudios
const sobAudio = new Audio("assets/mp3/sonofab.mp3")
const loseAudio = new Audio("assets/mp3/youlose.mp3")
const winAudio = new Audio("assets/mp3/wubba.mp3")
const showAudio = new Audio("assets/mp3/showme.mp3")
const themeAudio = new Audio("assets/mp3/theme.mp3")
const ilikeAudio = new Audio("assets/mp3/ilike.mp3")

function playOpen(){
    themeAudio.play()
}

function playWin(){
    ilikeAudio.play()
}

//Mapas
const map = document.getElementById("mapa")
const wall = "W"
const map1 = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "WRW W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "OS    W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]

const map2 = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W W   W W W W",
    "W WWWWWWW W WWW W W W",
    "OS        W     WRW W",
    "W WWW WWWWW WWWWW   W",
    "W W   W   W W     WWW",
    "W WWWWW W W W W W W F",
    "W     W W W W W W W W",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWW W WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]

const map3 = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "OS  W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W W   WAW W W",
    "W WWWWWWW W WWW W W W",
    "W         W       W W",
    "W WWW WWWWW WWWWW   W",
    "WRW       W W     WWW",
    "W WWWWW W W WWWWW W F",
    "W     W W W W W W W W",
    "WWWWW W W W W W W W W",
    "W     W W     W W W W",
    "W WWWWW WWWWWWW W W W",
    "W     W         W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]

const map4 = [
    "7HHH4HHHHH4HHHHH4H4H8",
    "OS  V     V     V V V",
    "V C V EH8 3HHH8 V V V",
    "V V V   V V   V V V V",
    "VA6H2HHH5 V EH5 V V V",
    "V         V     V B V",
    "V 7HD 7HHH5 7HHH5   V",
    "V V   V     V  b  7H5",
    "V 6HHH1 C C V 7H8 V F",
    "V     V VaV V V V V C",
    "3HHHD V V V B V V V V",
    "V     V V V   V V V V",
    "V EHHH5 V 6HHH5 V B V",
    "V       V       V   V",
    "6HHHHHHH2HHHHHHH2HHH5",
]

const map5 = [
    "7HHH4HHHHHHHHHHH4HHH8",
    "V   V           V   V",
    "V C V EH8 7HHH8 V C V",
    "VaV V   V Vb  V V V V",
    "V 6H2HHH5 V EH5 B V V",
    "V         V       V V",
    "V 7HD 7H4H5 7H8 EH1 V",
    "V V   V V   V V   V V",
    "V 6HHH1 V C V 3H4H2H1",
    "V     V V V V V BJ  V",
    "3HHHD V V V B V     V",
    "V     V V V   V C   B",
    "V EHHH5 V 6HHH5 V   F",
    "OS      V       V   C",
    "6HHHHHHH2HHHHHHH2HHH5",
]

const mapsArray = [map1,map2,map3,map4,map5]