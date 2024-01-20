let nombre = process.argv[2];
let puissance = process.argv[3];

if (puissance <= 0 || isNaN(nombre)) {
    console.log("Erreur : la puissance doit être un nombre positif.");
} else {
    function repetitionPuissance(nombre, puissance) {
        let resultat = nombre;

        for (let i = 1; i < puissance; i++) {
            resultat *= nombre;
        }

        return resultat;
    }

    const resultatFinal = repetitionPuissance(Number(nombre), Number(puissance));
    
    console.log(resultatFinal);
}
