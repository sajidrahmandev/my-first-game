const pl1Btn = document.getElementById("pl1Btn")

const pl1Name = document.getElementById("pl1Name")
const pl1Number = document.getElementById("pl1Number")

const pl1Box = document.getElementById("pl1")
const pl2Box = document.getElementById("pl2")

let pl1NameStore
let pl1NumberStore

let pl2NameStore
let pl2NumberStore

let chance=0;

//  Player1 box function

pl1Btn.addEventListener("click", (e) => {
    e.preventDefault()

    const pl1NameValue = pl1Name.value.trim()
    const pl1NumberValue = Number(pl1Number.value)

    let hasError = false
    pl1Name.style.border = "3px solid green"
    pl1Number.style.border = "3px solid green"

    if (pl1NameValue === "" || !isNaN(pl1NameValue)) {
        pl1Name.value = ""
        pl1Name.placeholder = pl1NameValue === "" ? "Please Enter your name" : "Please Enter your name (Not a Number)"
        pl1Name.style.border = "3px solid red"
        hasError = true
    }
    if (pl1NumberValue === "" || isNaN(pl1NumberValue) || pl1NumberValue < 1 || pl1NumberValue > 99) {
        pl1Number.value = ""
        pl1Number.placeholder = "Please Enter a number from 1 to 99"
        pl1Number.style.border = "3px solid red"
        hasError = true
    }
    if (!hasError) {
        pl1NameStore = pl1NameValue
        pl1NumberStore = pl1NumberValue
        pl1Box.style.display = "none"
        pl2Box.style.display = "block"
    }
})


//  player2 box function

const pl2Btn = document.getElementById("pl2Btn")

const pl2Name = document.getElementById("pl2Name")
const pl2Number = document.getElementById("pl2Number")

const winnerBox = document.getElementById("winner-box")

pl2Btn.addEventListener("click", (e) => {
    e.preventDefault()

    const pl2NameValue = pl2Name.value.trim()
    const pl2NumberValue = Number(pl2Number.value)

    let hasError = false
    pl2Name.style.border = "3px solid green"
    pl2Number.style.border = "3px solid green"

    if (pl2NameValue === "" || !isNaN(pl2NameValue)) {
        pl2Name.value = ""
        pl2Name.placeholder = pl2NameValue === "" ? "Please Enter your name" : "Please Enter your name (Not a Number)"
        pl2Name.style.border = "3px solid red"
        hasError = true
    }

    if (pl2NumberValue === "" || isNaN(pl2NumberValue) || pl2NumberValue < 1 || pl2NumberValue > 99) {
        pl1Number.value = ""
        pl1Number.placeholder = "Please Enter a number from 1 to 99"
        pl1Number.style.border = "3px solid red"
        hasError = true
    }

    if (!hasError) {
        pl2NameStore = pl2NameValue
        pl2NumberStore = pl2NumberValue
    }

    // Winner Box function

    const winner = document.getElementById("winner")

    const pl1Nam = document.getElementById("pl1Nam")
    const pl1Num = document.getElementById("pl1Num")
    const pl2Nam = document.getElementById("pl2Nam")
    const pl2Num = document.getElementById("pl2Num")

    const reloadGame = document.getElementById("reloadGame")


    if (pl1NumberStore == pl2NumberStore) {
        pl2Box.style.display = "none"
        winnerBox.style.display = "block"
        winner.innerHTML = `The Winner name is: ${pl2NameStore}`

        pl1Nam.innerHTML = `Player 1 Name:${pl1NameStore}`
        pl1Num.innerHTML = `Player 1 Name:${pl1NumberStore}`
        pl2Nam.innerHTML = `Player 1 Number:${pl2NameStore}`
        pl2Num.innerHTML = `Player 2 Number:${pl2NumberStore}`

        pl2Btn.style.display = "none"
        reloadGame.style.display = "block"
        reloadGame.addEventListener("click", () => {
            location.reload();
        })
    }
    else {
        chance++

        if(chance<3){
        pl2Number.value = ""
        pl2Number.placeholder = `Sorry don't match your number with ${pl1NameStore} you have ${3 - chance} chance to win`
        pl2Number.style.border = "3px solid red"
        hasError = true
    }
    
    else{
        pl2Box.style.display = "none"
        winnerBox.style.display = "block"
        winner.innerHTML = `The Winner name is: ${pl1NameStore}`

        pl1Nam.innerHTML = `Player 1 Name:${pl1NameStore}`
        pl1Num.innerHTML = `Player 1 Number:${pl1NumberStore}`
        pl2Nam.innerHTML = `Player 2 Name:${pl2NameStore}`
        pl2Num.innerHTML = `Player 2 Number:${pl2NumberStore}`

        pl2Btn.style.display = "none"
        reloadGame.style.display = "block"

        reloadGame.addEventListener("click",()=>{
            location.reload()
        })
       
    }
    }

    
})