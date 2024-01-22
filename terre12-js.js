function convertirFormat12hEn24h(heure12h) {
    const [heure, minute, suffixe] = heure12h.match(/(\d+):(\d+)\s?([APMapm]{2})/).slice(1,4);
    
    let heure24h = parseInt(heure, 10);

    if (suffixe.toLowerCase() === 'pm' && heure24h < 12) {
        heure24h += 12;
    } else if (suffixe.toLowerCase() === 'am' && heure24h === 12) {
        heure24h = 0;
    }

    return `${heure24h.toString().padStart(2, '0')}:${minute}`;
}

// Exemple d'utilisation
const heureFormat12h = process.argv[2];
const heureFormat24h = convertirFormat12hEn24h(heureFormat12h);
console.log(heureFormat24h);  // Affiche "15:30"
