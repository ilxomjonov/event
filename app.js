const CONTEINER = document.getElementById('CONTEINER')
const TEXT = document.getElementById('TEXT')


function Width(text) {
    CONTEINER.style.width = text + 'px'
}
function Height(text) {
    CONTEINER.style.height = text + 'px'
}
function Border(text) {
    CONTEINER.style.border = text + 'px solid black'
}
function Texts(text) {
    TEXT.innerHTML = text
}
function BG(colors) {
    
    CONTEINER.style.backgroundColor = colors
}

