const user_string = process.argv[2];

try {
    if (!user_string) {
        throw new Error("Erreur : aucune chaîne fournie.");
    }

    if (!isNaN(user_string)) {
        throw new Error("Erreur : la chaîne ne doit pas contenir des chiffres.");
    }

    let nombre_arguments = 0;
    for (let arg of process.argv) {
        if (arg !== process.argv[0] && arg !== process.argv[1]) {
            nombre_arguments++;
        }
    }

    if (nombre_arguments !== 1) {
        throw new Error("Erreur : il doit y avoir qu'une seule chaîne.");
    }

    let nombre_caracteres = 0;

    for (let char of user_string) {
        nombre_caracteres++;
    }

    console.log(nombre_caracteres);
} catch (error) {
    console.error(error.message);
}
