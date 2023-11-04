let string = prompt("Введите строку:");
let n = parseInt(prompt("Введите натуральное число N:"));

if (n > 0) {
    for (let i = 0; i < n; i++) {
        console.log(string);
    }
} else {
    console.log(string);
}