const nbtoguess = 12

let send = document.getElementById("button")

let mess = document.getElementById("messages")

let ancien = document.getElementById("ancien")

let tentative = 0



function comparer(input) {
    if (input == nbtoguess) {
        mess.innerText = `Bravo vous avez réussit après ${tentative} de tentavive !`
    } else if (input < nbtoguess) {
        mess.innerText = `C'est un nombre plus grand !`
        ancien.innerText += input + " ; "
    } else if (input > nbtoguess) {
        mess.innerText = `C'est un nombre plus petit !`
        ancien.innerText += input + " ; "
    } else {
        mess.innerText = "Veuillez saisir un paramètre valide"
    }
}

send.addEventListener("click", function () {
    let input = document.getElementById("input").value
    comparer(input)
    tentative++
})