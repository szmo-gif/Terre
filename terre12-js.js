const heureDonnee = process.argv[2] + process.argv[3]?.toLowerCase();

let heure24;

if (heureDonnee.includes("am") && heureDonnee >= "01:00" && heureDonnee < "12:00") {
    heure24 = heureDonnee.replace("am", '');

} else if (heureDonnee.includes("pm") && heureDonnee >= "01:00" && heureDonnee < "12:00") {
    let heure12 = parseInt(heureDonnee.split(":")[0], 10);
    let minute = parseInt(heureDonnee.split(":")[1], 10);
    heure24 = `${heure12 + 12}:${minute}`;

} else if (heureDonnee.includes("am") && heureDonnee >= "12:00" && heureDonnee < "13:00") {
    let heure12 = parseInt(heureDonnee.split(":")[0], 10);
    let minute = parseInt(heureDonnee.split(":")[1], 10);
    heure24 = `${heure12 - 12}:${minute}`;

} else if (heureDonnee.includes("pm") && heureDonnee >= "12:00" && heureDonnee < "13:00") {
    let minute = parseInt(heureDonnee.split(":")[1], 10);
    heure24 = `12:${minute}`;

} else {
    console.log("erreur");
    process.exit(1);  
}

console.log(`${heure24}`);
