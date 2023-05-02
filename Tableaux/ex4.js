let tab = new Array(" Janvier")
tab [1] = " Février"
tab [2] = " Mars"
tab [3] = " Avril"
tab [4] = " Mai"
tab [5] = " Juin"
tab [6] = " Juillet"
tab [7] = " Août"
tab [8] = " Septembre"
tab [9] = " Octobre"
tab [10] = " Novembre"
tab [11] = " Décembre"
// for (let i = 0; i < tab.length; i++) {
//     const element = i + " -" + tab[i];
//     console.table(element)
// }
tab.forEach((value, index) => {
    console.log(index + " -" + value)
});