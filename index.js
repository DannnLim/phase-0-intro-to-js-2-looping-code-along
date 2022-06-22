// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// const name = (["Guadalupe", "Ollie", "Aki"], "events")
// function whiteCards(name, events) {
//     const newAr = [];
//     for (let i = 0; i < name.length; i++) {
//         let message = (`Thank you, ${name}, for the wonderful ${events} gift!`)
//         newAr[i] = message;;
//         debugger;
//     }
//     return newAr;
// }

// console.log(whiteCards())

function writeCards(names, event) {
    const newAr = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        newAr[i] = message;
        debugger;
    };
    return newAr;
}
function countDown() {
    let countDown = 0;
    while (countDown < 11) {
        console.log(countDown++)
    }
}
console.log(countDown())

// console.log(count)

// let countup = 0;
// while (countup < 10) {
//     console.log(countup++);
// }