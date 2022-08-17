const credits = 23580;
const pricePerDroid = 3000;
let orderedQuantity = prompt('Сколько дроидов вы хотите купить?');
let totalPrice = pricePerDroid * orderedQuantity;

if (orderedQuantity === null) {
    console.log('Отменено пользователем!'); 
} else {
    console.log(totalPrice);
    if (totalPrice > credits && totalPrice !== null) {
        console.log('Недостаточно средств на счету');
    } else {
        console.log(`Вы купили ${orderedQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
}
