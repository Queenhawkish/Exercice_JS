let tab = ["Cendrillon"]
console.table(tab)
tab.push("Mulan" , 
"Peach" , 
"Raiponce" , 
"Belle" , 
"Vaiana" , 
"Daisy" , 
"Jasmine")
console.table(tab)
tab.splice(2 , 1)
tab.splice(5,1)
console.table(tab)
tab.sort()
console.table(tab)
console.log("Il y a " + tab.length + " princesses dans le tableau")