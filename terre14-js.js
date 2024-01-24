const liste = process.argv.slice(2);

if (liste.length === 0) {
    console.log("La liste est vide.");
} else {
    let estNumerique = true;

    for (let i = 0; i < liste.length; i++) {
        if (isNaN(Number(liste[i]))) {
            estNumerique = false;
            break;
        }
    }

    if (!estNumerique) {
        console.log("La liste contient des éléments non numériques.");
    } else {
        let trier = true;

        for (let i = 0; i < liste.length - 1; i++) {
            if (Number(liste[i]) > Number(liste[i + 1])) {
                trier = false;
                break;
            }
        }

        if (trier) {
            console.log("La liste est triée.");
        } else {
            console.log("La liste n'est pas triée.");
        }
    }
}
