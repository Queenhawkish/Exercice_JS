// // Je déclare ma fonction
// // qui va me faire une alerte avec un message HELLO
// // var name = prompt("Entrer votre prénom")
// // function sayHello(name) {
// // window.alert("HELLO" + name + "!")
// // }

// // J'appelle ma fonction 
// // sayHello(name)

// // function sayHello(argument) {
// //     let name = "Luigi"
// //     window.alert("HELLO" + name + "!")
// // }

// // // J'appelle ma fonction 
// // sayHello()

// function makeCoolSentence(name) {
//     let sentence = `Salut ${name} , j'adore ton style et surtout ton nom : ${name}, c'est quelle origine ?`
//     return sentence
// }

// console.log(makeCoolSentence("Mevine"))
// function makeAlert() {
//     window.alert("BOOOM !!!!")
// }
// function writeMessageInDiv(name) {
//     let myDIV = document.getElementById("message")
//     myDIV.innerText = `Bonjour, ${name}, comment allez-vous ?`
// }

// function eraseMessage() {
//     let myDIV = document.getElementById("message")
//     myDIV.innerText = ``
// }

// // // METHODE 1 : en html dans <button onclick:"monBouton"
// // // Je défini une constante qui sera mon bouton à l'aide de getElementById
// const monBouton = document.getElementById("myButton")

// // console.log(monBouton)

// // Je défini une constante qui sera mon bouton à l'aide de querySelector

// // const myButton = document.querySelector("#myButton")

// // console.log(myButton)

// // METHODE 2
// // Appelle de la fonction .onclick pas besoin des parenthèses , lors de l'appelle de la fonction 
// // monBouton.onclick = makeAlert

// // MEHTODE 3

// // Mise en place d'un écouteurs sur l'éléments addEventListener

// monBouton.addEventListener("click", () => {
//     // monBouton.addEventListener("click" , function () {

//     // Je lance ma fonction makeAlert()
//     makeAlert()
//     console.log("Bientôt la cantine")
// })

// // Je selectionne mon élément via getElementById
// const mxbutton = document.getElementById("mxButton")
// // Je met en place un écouteur d'évènement sur le click
// // mxbutton.addEventListener("click", function () {
// //     // J'appelle ma fonction avec un paramètre
// //     writeMessageInDiv("Mevine")
// // })

// mxbutton.addEventListener("click", function () {
//     // on détermine l'élément inputFirstname
//     let inputFirstname = document.getElementById("inputFirstname")
//     // on stock la valeur dans name à l'aide de value
//     let name = inputFirstname.value
//     // Il ne reste plus qu'à appeler notre fonction
//     writeMessageInDiv(name)
// })
// mxbutton.addEventListener("dblclick", function () {
//     eraseMessage()
// })

