let count_day = parseInt(prompt("Введите количество недель:"));
let count_liter = parseInt(prompt("Введите количество литров в неделю:"));

if ((count_day < 1) || (count_liter < 1)) {
    console.log("Введены некорректные данные");
} else {

    let sum_liter = 0;
    for (let i = 1; i <= 16; i++) {
        sum_liter += count_day * count_liter;
        console.log('К', i, 'неделе будет выпито', sum_liter, 'литров');
    }

    if (sum_liter >= 120) {
        console.log("Студент принят в IT-клуб");
    } else {
        console.log("К сожалению, студент не принят в клуб");
    }
}