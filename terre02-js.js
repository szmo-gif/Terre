const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let userString = "";

interface.question("Écrivez une chaîne de caractères : ", (response) => {
    userString = response;

    // Divise la chaîne en mots et affiche chaque mot sur une nouvelle ligne
    const mots = userString.split(' ');
    for (let mot of mots) {
        console.log(mot);
    }

    interface.close();
});
