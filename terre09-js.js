const nombre = process.argv[2];

if (nombre < 0 || isNaN(nombre)) {
    console.log("Erreur : le nombre ne peut pas être négatif");
} else {
  
    function racineCarre(nombre) {
       // utilisation de le méthode de Newton
        let resultat = nombre / 2;

        // Utiliser une boucle pour améliorer l'estimation de la racine carrée(10 itérations de façon arbitraire)
        for (let i = 0; i < 10; i++) {
            // Appliquer la formule pour améliorer l'estimation : x(n+1)=(1/2)(x+(nombre/xn)) avec xn qui est l'estimation acutel
            resultat = 0.5 * (resultat + nombre / resultat);
        }

        return resultat;
    }

    const resultatFinal = racineCarre(Number(nombre));

    console.log(resultatFinal);
}