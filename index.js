// 1
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

const getOrders = arr => arr.reduce( (num, obj) => num + obj.amount, 0);

const totalAmount =  getOrders(orders);
console.log( totalAmount );


// 2
const incNum = arr => arr.map(num => num+1); 

let mappedArray = [3, 45, 6, 56, 7, 9];
mappedArray = incNum(mappedArray)
console.log();



//3
const filterEvens = arr => arr.filter(num => num % 2 === 0);

filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]



//4
const filterFriends = (arr, str) => arr.filter(name => name.includes(str));
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterFriends(friends, 'ka')); // ["Rika"];
console.log(filterFriends(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

//5
const sumUp = arr => arr.reduce((a, b) => a + b);
sumUp([1, 2, 3, 4, 5]); //returns 15
sumUp([6, 7, 7]); //returns 20


//6
const getSquareRoot = arr => {
    return arr = arr.map(a => Math.sqrt(a));
}
console.log(getSquareRoot([1, 2, 3, 4, 5]));
console.log(getSquareRoot([6, 7, 7])); 