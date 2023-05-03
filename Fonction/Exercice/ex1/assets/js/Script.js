let mess = document.getElementById("start")

let start = document.getElementById("me")

let reset = document.getElementById("rst")

let mytimer = document.getElementById("time")

let total = 0

let timer = 5

// function compter(){
//     start.innerText = ""
//     for (let i = 0; i < 100; i++) {
//         document.write(message(i))
//     }
// }

// let click = document.getElementById("me")

// let message = document.getElementById("message").value

reset.addEventListener("click", function () {
    mess.innerText = "Let's start"
    total = 0
    location.reload()
})
start.addEventListener("click", function () {
    total++
    mess.innerText = total

    if(total == 1){
        setInterval(showtimer, 1000)
    }
})

function showtimer() {

    if (timer == 0) {
        window.alert(`Vous avez effectué ${total} click`)
        timer = 5
    } else {
        mytimer.innerText = timer
        timer--
    }
}



