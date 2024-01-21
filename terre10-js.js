let nombre = parseInt(process.argv[2]);

if (isNaN(nombre)) {
    console.log("Erreur : Veuillez fournir un nombre entier en argument.");
} else if (nombre === 0 || nombre === 1) {
    console.log("Erreur : 0 et 1 ne peuvent pas être des nombres premiers.");
} else {
    let nombrePremier = true;

    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            nombrePremier = false;
            break;
        }
    }

    if (nombrePremier) {
        console.log(`${nombre} est un nombre premier.`);
    } else {
        console.log(`${nombre} n'est pas un nombre premier.`);
    }
}
