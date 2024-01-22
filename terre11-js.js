const heureDonnee = process.argv[2];

try {
    if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(heureDonnee)) {
        throw new Error("Erreur : veuillez écrire l'heure au format 00:00");
    }

    if (heureDonnee >= "24:00") {
        throw new Error("Erreur : une heure ne peut pas être au-dessus de 24h");
    }
} catch (error) {
    console.error(error.message);
    process.exit(1);
}

if (heureDonnee <= "11:59") {
    if (heureDonnee === "00:00") {
        console.log("Il est 12:00 AM");
    } else {
        console.log(`Il est ${heureDonnee} AM`);
    }
} else {
    if ("12:00" <= heureDonnee && heureDonnee <= "12:59" ) {
        console.log(`Il est ${heureDonnee} PM`);
    } else {
        let heure24 = parseInt(heureDonnee.split(":")[0], 10);
        let minute = heureDonnee.split(":")[1];
        let heure12 = heure24 - 12;
        console.log(`Il est ${heure12}:${minute} PM`);
    }
}
