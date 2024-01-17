function pair_impair(nombre) {
    if (nombre % 2 === 0) {
        return "Pair";
    } else {
        return "Impair";
    }
}

const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.question("Entrer un chiffre : ", function(nombre) {

    const resultat = pair_impair(nombre);

    console.log(`${resultat}`);

    interface.close();
});



//console.log(pair_impair(4))
//console.log(pair_impair(5))
//console.log(pair_impair(-2))
//console.log(pair_impair(-5))