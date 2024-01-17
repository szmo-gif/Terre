function pair_impair(nombre) {
    if (nombre % 2 === 0) {
        return "Pair";
    } else {
        return "Impair"
    }
}

console.log(pair_impair(4))
console.log(pair_impair(5))
console.log(pair_impair(-2))
console.log(pair_impair(-5))