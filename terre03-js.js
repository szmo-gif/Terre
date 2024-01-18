const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interface.question("Entrer une lettre : ", (response) => {
    if (response.length === 1 && /^[a-zA-Z]$/.test(response)) {
        let alphabet = '';
        for (let code = response.toLowerCase().charCodeAt(0); code <= 'z'.charCodeAt(0); code++) {
            alphabet += String.fromCharCode(code);
        }
        console.log(`${alphabet}`);
    } else {
        console.log("J'ai demandé qu'une lettre");
    }
    interface.close();
});
