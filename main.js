// player1 box function

const pl1Btn= document.getElementById("pl1Btn")

const pl1Name= document.getElementById("pl1Name")
const pl1Number= document.getElementById("pl1Number")

const pl1Box= document.getElementById("pl1")
const pl2Box= document.getElementById("pl2")

let pla1NameStore
let pla1NumberStore


let pla2NameStore
let pla2NumberStore


pl1Btn.addEventListener("click", (e)=>{
    e.preventDefault()

    const pl1NameValue= pl1Name.value.trim()
    const pl1NumberValue= Number(pl1Number.value)

    let hasError= false
    pl1Name.style.border="3px solid green"
    pl1Number.style.border="3px solid green"

    if(pl1NameValue==="" || !isNaN(pl1NameValue)){
        pl1Name.value=""
        pl1Name.placeholder=pl1NameValue===""? "Please Enter your name": "Please Enter your name  (Not a Number)"
        pl1Name.style.border="3px solid red"
        hasError=true
    }

    if(pl1NumberValue==="" || isNaN(pl1NumberValue) || pl1NumberValue<0 || pl1NumberValue>99){
        pl1Number.value=""
        pl1Number.placeholder="Please Enter a number between 1 to 99"
        pl1Number.style.border="3px solid red"
        hasError=true
    }
    
    if(!hasError){
        pla1NameStore=pl1NameValue
        pla1NumberStore=pl1NumberValue
        console.log(`Player 1 Name:${pl1NameValue} player 1 Number: ${pl1NumberValue}`)
        pl1Box.style.display="none"
        pl2Box.style.display="block"
    }
    
})




// player2 box function
const pl2Name= document.querySelector("#pl2Name")
const pl2Number= document.querySelector("#pl2Number")
const pl2Btn= document.querySelector("#pl2Btn") 


pl2Btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const pl2NameValue= pl2Name.value.trim()
    const pl2NumberValue= Number(pl2Number.value)

    let hasError=false
    pl2Name.style.border="3px solid green"
    pl2Number.style.border="3px solid green"

    if(pl2NameValue==="" || !isNaN(pl2NameValue)){
        pl2Name.value=""
        pl2Name.placeholder= pl2NameValue===""? "Please Enter your name " : "Please Enter a name (Not a Number)"
        pl2Name.style.border="3px solid red"
        hasError=true
    }
    if(pl2NumberValue==="" || isNaN(pl2NumberValue) || pl2NumberValue<0 || pl2NumberValue>99 ){
        pl2Number.value=""
        pl2Number.style.border="3px solid red"
        pl2Number.placeholder="Please Enter a number between 1 to 99"
        hasError=true
    }
    console.log(`Player 2 name: ${pl2NameValue} Player 2 Number ${pl2NumberValue}`)

// Winner box function
const winnerBox= document.getElementById("winner-box")
const winner= document.getElementById("winner")

const pl1Nam= document.getElementById("pl1Name")
const pl1Num= document.getElementById("pl1Num")
const pl2Nam= document.getElementById("pl2Name")
const pl2Num= document.getElementById("pl2Num")


    if(!hasError){
        pla2NameStore=pl2NameValue
        pla2NumberStore=pl2NumberValue
    }
    if(pla1NumberStore==pla2NumberStore){
        winner.innerHTML=`${pla2NameStore}`

        pl1Nam.innerHTML=`${pla1NameStore}`
        pl1Num.innerHTML=`${pla1NumberStore}`
        pl2Nam.innerHTML=`${pla2NameStore}`
        pl2Num.innerHTML=`${pla2NumberStore}`
    }

})