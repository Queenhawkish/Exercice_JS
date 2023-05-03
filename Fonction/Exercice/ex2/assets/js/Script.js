const nbtoguess = 12

let input = document.getElementById("input").value

let send = document.getElementById("button")

tentative = 0

send.addEventListener("click" , function(){
    tentative++
    console.log(tentative)
})
