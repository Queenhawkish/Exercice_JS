let ac = document.getElementById("ac")

let one = document.getElementById("one")

let two = document.getElementById("two")

let three = document.getElementById("three")

let four = document.getElementById("four")

let five = document.getElementById("five")

let six = document.getElementById("six")

let seven = document.getElementById("seven")

let eight = document.getElementById("eight")

let nine = document.getElementById("nine")

let divid = document.getElementById("divid")

let multiple = document.getElementById("multiple")

let minus = document.getElementById("minus")

let plus = document.getElementById("plus")

let zero = document.getElementById("zero")

let point = document.getElementById("point")

let equal = document.getElementById("equal")

let op = document.getElementById("op")

let result = document.getElementById("result")

let table = [seven, eight, nine, divid, four, five, six, multiple, one, two, three, minus, zero, point, plus, equal]

console.table(table)

let nb1 = document.getElementById("nb1")

let nb2 = document.getElementById("nb2")


function calculator(a, b, op) {
    let results = "";
    switch (op) {
        case '+':
            results = a + b;
        case '-':
            results = a - b;
        case '*':
            results = a * b;
        case '/': {
            if (b !== 0)
                results = a / b;
            else
                results = "Infinity";
        }
    }
}
ac.addEventListener("click", function () {
    nb1.innerText = ""
    op.innerText = ""
    nb2.innerText = ""
    result.innerText = ""
})

seven.addEventListener("click", function () {
    nb1.innerText += seven.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += seven.innerText
    }
})

eight.addEventListener("click", function () {
    nb1.innerText += eight.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += eight.innerText
    }
})

nine.addEventListener("click", function () {
    nb1.innerText += nine.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += nine.innerText
    }
})

four.addEventListener("click", function () {
    nb1.innerText += four.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += four.innerText
    }
})

five.addEventListener("click", function () {
    nb1.innerText += five.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += five.innerText
    }
})

six.addEventListener("click", function () {
    nb1.innerText += six.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += six.innerText
    }
})

one.addEventListener("click", function () {
    nb1.innerText += one.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += one.innerText
    }
})

two.addEventListener("click", function () {
    nb1.innerText += two.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += two.innerText
    }
})

three.addEventListener("click", function () {
    nb1.innerText += three.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += three.innerText
    }
})

zero.addEventListener("click", function () {
    nb1.innerText += zero.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += zero.innerText
    }
})

point.addEventListener("click", function () {
    nb1.innerText += point.innerText
    if(divid.addEventListener("click")){
        nb2.innerText += point.innerText
    }
})

divid.addEventListener("click", function () {
    op.innerText += divid.innerText
})

multiple.addEventListener("click", function () {
    op.innerText += multiple.innerText
})

minus.addEventListener("click", function () {
    op.innerText += minus.innerText
})

plus.addEventListener("click", function () {
    op.innerText += plus.innerText
})



// equal.addEventListener("click" , function() {
//     result.innerText = equal.innerText
// })