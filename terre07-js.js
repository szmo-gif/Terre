const user_string = process.argv.slice(2);
const letter = user_string.map(argument => argument.split(''));
console.log(letter)