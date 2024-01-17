function division(numb1, numb2) {
    if (isNaN(numb1) || isNaN(numb2)) {
        throw new Error("Choisissez un nombre");
    }

    if (Number.isInteger(numb1 / numb2)) {
        console.log(numb1 / numb2);
    } else {
        console.log("Non divisible");
    }
}

const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.question("Entrer un chiffre : ", function (numb1) {
    interface.question("Entrer un chiffre : ", function (numb2) {
        try {
            division(parseFloat(numb1), parseFloat(numb2));
        } catch (error) {
            console.error(error.message);
        }
        interface.close();
    });
});
