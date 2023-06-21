// utils são ultilitarios... funcoes ultilitarias
export function imc(weight, height) {
    return (weight / (height / 100) **2).toFixed(2)
}
export function notNumber(value) {
    return isNaN(value) || value == "" // isNaN nao é um numero? (se os 2 retorna false é pq é um numero)
}