
let symbols = ["♦" ,"♥", "♠", "♣"]

displaySimUp = document.getElementById("up-symbol")
displaySimDown = document.getElementById("down-symbol")
displayNumber = document.getElementById("number")
displayTime = document.getElementById("time")
relodpage = document.getElementById("button")
let count = 10
function changeCard () {
pickRandom = Math.random() * symbols.length; 
  randomSymbol = symbols[Math.floor(pickRandom)]
  randomNumber = Math.floor((Math.random() *10) +1)

  if(randomSymbol == "♥") {
    randomSymbol = `<span class = "red"> ♥ </span>`

  }
 

  if (randomNumber == 10) {
   randomNumber = randomSymbol

  }

  displayNumber.innerHTML = randomNumber
  displaySimDown.innerHTML = randomSymbol
  displaySimUp.innerHTML = randomSymbol
}

function countTime () {
count = count -1
displayTime.innerHTML = "Seconds to change : " + count
if (count == 0)
  count = 10
}

document.addEventListener("DOMContentLoaded",changeCard)

relodpage.addEventListener("click", ()=> {
  location.reload(true)
})

setInterval(countTime, 1000)

setInterval(changeCard, 10000)

