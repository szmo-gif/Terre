function pair_impair(nombre) {
    if (isNaN(nombre))
        throw new  Error("me prends pas pour une banane!");

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

    try {
        const resultat = pair_impair(nombre);
        console.log(`${resultat}`);
    }
    catch (error) {
        console.error(error.message);
    }
   
   

    interface.close();
});
