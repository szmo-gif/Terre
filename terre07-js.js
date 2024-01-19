const user_string = process.argv.slice(2);

let nombre_arguments = 0;

for (let word of user_string) {
    for (let char of word) {
        if (char === ' ') {
            nombre_arguments++;
        }
        nombre_arguments++;
    }
}

console.log(nombre_arguments);