const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.question("Écrire une chaîne de caractères : ", response => {
    userString = response;

    function inverser_ordre(chaine) {
        let resultat = "";
        for (let i = chaine.length - 1; i >= 0; i--) {
            resultat += chaine[i];
        }
        return resultat;
    }

    const lettre_inverse = inverser_ordre(userString);

    console.log(lettre_inverse);
    interface.close();
});
