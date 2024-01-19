const user_string = process.argv.slice(2);
const letters = user_string.map(argument => argument.split(''));

function calculer_arguments(tableau_de_lettre) {
    return tableau_de_lettre.reduce((acc, mot) => acc + mot.map(() => 1).reduce((acc, val) => acc + val, 0), 0);
}

const nombre_arguments = calculer_arguments(letters);

console.log(nombre_arguments);
