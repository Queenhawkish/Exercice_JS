let mess = document.getElementById("start")

let start = document.getElementById("me")

let reset = document.getElementById("rst")

let total = 0

// function compter(){
//     start.innerText = ""
//     for (let i = 0; i < 100; i++) {
//         document.write(message(i))
//     }
// }

// let click = document.getElementById("me")

// let message = document.getElementById("message").value

reset.addEventListener("click" , function (){
    mess.innerText = "Let's start"
    total = 0
})
start.addEventListener("click" , function (){
    total++
        mess.innerText = total
})

