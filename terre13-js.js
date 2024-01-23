const entier1 = parseInt(process.argv[2]);
const entier2 = parseInt(process.argv[3]);
const entier3 = parseInt(process.argv[4]);

if (!isNaN(entier1) && !isNaN(entier2) && !isNaN(entier3)) {
    if (entier1 !== entier2 && entier2 !== entier3 && entier1 !== entier3) {
        if ((entier1 < entier2 && entier2 < entier3) || (entier3 < entier2 && entier2 < entier1)) {
            console.log(entier2);
        } else if ((entier2 < entier1 && entier1 < entier3) || (entier3 < entier1 && entier1 < entier2)) {
            console.log(entier1);
        } else {
            console.log(entier3);
        }
    } else {
        console.log("Erreur: Entrez 3 entiers différents");
    }
} else {
    console.log("Erreur: Entrez des entiers valides en tant qu'arguments");
}
