let heros = {
    Alias: "Superman",
    RealName: "Clark Kent",
    Power: "Très fort et qui vole très haut",
    Universe: "DC"
}
console.log(Object.keys(heros))
// let list = ""
// for(let key in heros){
//     list += key + ","
// }
// console.log(list)
// Object.keys(heros , window.navigator.language)
// console.log(Object.keys(heros))

var heros_card = "Héro : " + heros.Alias + ", \nIdentité Secrète : " + heros["RealName"] + ", \nPouvoir : " + heros.Power + ", \nUnivers : " + heros.Universe
console.log(heros_card)

var heros1 = {
    Alias: "Batman",
    RealName: "Bruce Wayne",
    Power: "Très intelligent et riche",
    Universe: "DC"
}

var heros2 = {
    Alias: "Flash",
    RealName: "Barry Allen",
    Power: "Très rapide",
    Universe: "DC"
}

var heros3 = {
    Alias: "Supergirl",
    RealName: "Kara Zor-El",
    Power: "Très forte et vole très haut",
    Universe: "DC"
}

var heros4 = {
    Alias: "Green Arrow",
    RealName: "Oliver Queen",
    Power: "Très fort et très habile avec un arc",
    Universe: "DC"
}

var heros5 = {
    Alias: "Black Widow",
    RealName: "Natasha Romanoff",
    Power: "Très agile et forte",
    Universe: "Marvel"
}

var heros6 = {
    Alias: "Thor",
    RealName: "Thor",
    Power: "Très fort avec un marteau",
    Universe: "Marvel"
}

var heros7 = {
    Alias: "Starlord",
    RealName: "Peter Quill",
    Power: "Humain",
    Universe: "Marvel"
}

var heros8 = {
    Alias: "Antman",
    RealName: "Scott Lang",
    Power: "Très petit et contrôle une armé",
    Universe: "Marvel"
}

var herosdatabase = [heros1, heros2, heros3, heros4, heros5, heros6, heros7, heros8]
console.table(herosdatabase)

herosdatabase.forEach(hero => {
    console.log("Héro: "+ hero.Alias);
    console.log("Identité secrète: "+ hero.RealName);
    console.log("Pouvoir: "+ hero.Power);
    console.log("Univers: "+ hero.Universe);
    console.log("---");

});