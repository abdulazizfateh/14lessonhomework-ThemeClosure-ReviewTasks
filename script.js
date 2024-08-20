// TODAY'S Theme is Closure and this.

// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin.
// Kiritilgan sonning raqamlari yig'indisi topilsin.

// let num = +prompt(`Son kiriting, va biz uni raqamlarini yig'indisini topib beramiz`);

// const sumOfTheDigits = (num) => {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOfTheDigits(num));









// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Ixtiyoriy arrow function yarating va uning parametriga bi nechta sonlar berilsin. 
// va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
// masalan: [1, 22, 3] yigindisi: 26
// result=> [2,6]

// const sumInArray = (n1, n2, n3) => {
//     let sum = n1 + n2 + n3;
//     result = String(sum).split('');
//     // Convert to Number
//     let newArr = [];
//     for (let i = 0; i < result.length; i++) {
//         convertToNumber = Number(result[i]);
//         newArr.push(convertToNumber);
//     }
//     // Convert to Number
//     return newArr;
// }

// console.log(sumInArray(1, 22, 3));









// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Promt yordamida ixtiyoriy son kiritilsin va o'sha sonning lvadradi palindrome yoki palindrome emasligi topilsin 
// algorithm function ichida bo'lsin

// let a = 11;

// const checkPalindrome = (a) => {
//     power = a ** 2;
//     strPower = String(power);
//     let result;
//     for (let i = 0; i < strPower.length; i++) {
//         if (strPower[0] === strPower[strPower.length - 1]){
//             result = `${power} palindrom`;
//         } else {
//             result = `${power} palindrom emas !`;
//         }
//     }
//     return result;
// }

// console.log(checkPalindrome(a));









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Ixtiyoriy 2 ta funciton yaratilsin
// 1-function ichida random sonning raqamlari yig'indisi topilsin
// va mana shu 1-function 2-funciton ni ichida ishlasin
// masala callback function yordamida bajarilsin


// First Try
// let randomNum1 = Math.floor(Math.random() * 10);
// let randomNum2 = Math.floor(Math.random() * 10);
// console.log(randomNum1);
// console.log(randomNum2);


// const sumRandom = (rNum1, rNum2, callback) => { // higher-order function
//     let result = rNum1 + rNum2;
//     return callback(result);
// }

// const addNote = (result) => { // callback function
//     return (`The sum is: ${result}`);
// }

// console.log(sumRandom(randomNum1, randomNum2, addNote));




// Second Try
// let a = 10;
// let b = 13;

// const sumRandom = (num1, num2, addNoteCallback) => { // higher-order function
//     let sum = num1 + num2;
//     addNoteCallback(sum);
// }

// const addNote = (sumCallback) => { // callback function
//     console.log(`The sum is: ${sumCallback}`);
// }

// sumRandom(a, b, addNote);









// TASK 5 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Prompt va function yarating prompt ichida yozilgan so'zning palindrome yoki palindrome emasligi topilsin

// let a = 'Aziza';

// const checkPalindrome = (a) => {
//     middle = Math.floor(a.length / 2);
//     let first = '';
//     let last = '';
//     let result;

//     for (let i = 0; i < middle; i++) {
//         first += a[i];
//     }
//     if (a.length % 2 == 0) {
//         for (let i = a.length - 1; i >= middle; i--) {
//             last += a[i]
//         }
//     } else {
//         for (let i = a.length - 1; i > middle; i--) {
//             last += a[i]
//         }
//     }

//     if (first.toLowerCase() === last.toLowerCase()) {
//         result = `Bu so'z palindrom`;
//     } else {
//         result = `Bu so'z palindrom emas`;
//     }

//     return result;
// }

// console.log(checkPalindrome(a));









// TASK 6 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Ixtiyoriy object yarating => {a:1,b:22}
// value larinig yig'indisini toping => 23
// value larining yigindising yig'indisini toping => 2 + 3 =

// let obj = {
//     productName: 'Pen',
//     oldPrice: 2400,
//     newPrice: 2500,
// }

// const addNumsInObj = (obj) => {
//     const objVal = Object.values(obj);
//     let sum = 0;

//     for (let i = 0; i < objVal.length; i++) {
//         if (typeof objVal[i] == 'number') {
//             sum += objVal[i];
//         }
//     }
//     return `$${sum}`;
// }

// console.log(addNumsInObj(obj));









// TASK 7 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// â€œ1java2script3 5deve6lo4perâ€ shu string orasidagi sonlarni 1 ta arreyga solib so'zlarni 
// boshqa bir stringa o'zlashtiring va return qiling object ko'rinishida


// let a = 'â€œ1java2script3 5deve6lo4perâ€';
// const seperateTheStringNumber = (a) => {
//     let newArr = [];
//     let newStr = '';
//     for (let i = 0; i < a.length; i++) {
//         if (!isNaN(a[i]) && a[i] !== ' ') {
//             newArr.push(a[i]);
//         } else {
//             newStr += a[i];
//         }
//     }
//     return {
//         number: newArr,
//         string: newStr
//     };
// }

// console.log(seperateTheStringNumber(a));









// TASK 8 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// tub sonni aniqlaydiga function yozing

// let a = +prompt('Son kiriting');

// const checkThePrime = (a) => {
//     if (a <= 1) return 'Siz 1 yoki undan kichik son kiritdingiz. Bunday sonlar tub yoki tub emaslikka ajralmaydi!'
//     for (let i = 2; i < a; i++) {
//         if (a % i == 0) {
//             return 'Tub son emas'
//         }
//     }
//     return 'Tub son';
// }

// console.log(checkThePrime(a));