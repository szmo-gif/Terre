function display_division(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
        throw new Error("Choisissez un nombre");
    }

    const resultat = Math.floor(numb1 / numb2);
    const reste = numb1-resultat*numb2;

    console.log(`résultat: ${resultat} \nreste: ${reste}`);
}

const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.question("Entrer un chiffre : ", function (numb1) {
    interface.question("Entrer un chiffre : ", function (numb2) {
        try {
            display_division(parseFloat(numb1), parseFloat(numb2));
        } catch (error) {
            console.error(error.message);
        }
        interface.close();
    });
});
