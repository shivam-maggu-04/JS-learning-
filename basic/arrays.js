// JavaScript arrays are resizable and can contain a mix of different data types.

const mixarr =  [4,"Shivam", 'a',2];

const myArr2 = new Array(1,2,3,4);
console.log(myArr2);

const myArr = [0,1,2,3,4];
// Array method

myArr.push(6);
myArr.push(7);
myArr.push("Hello");
console.log(myArr);
myArr.pop();
console.log(myArr);

// myArr.unshift(10); // put value in starting
// myArr.shift(); // remove starting value

console.log(myArr.includes(8));
console.log(myArr.indexOf(4));

/*
const newArr = myArr.join(); //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr); 
console.log(newArr);
*/

// slice, splice
const arr = [0,1,2,3,4,5]; 
console.log("A",arr);  // [0,1,2,3,4,5]

const sl = arr.slice(1,3);  // slice not manipulate the orginal arr and it not include last index
console.log("B",arr); // [0,1,2,3,4,5]
console.log(sl); // [1,2]

const sp = arr.splice(1,3); //splice manipulate the orginal arr and it not include last index
console.log("c",arr); // [0,4,5]
console.log(sp); // [1,2,3]


// concat && spred (...) work same 
const  marvel_heros = ["thor","spiderman","IronMan"];
const dc_heros = ["batman","superman","flash"];

const all_heros  = marvel_heros.concat(dc_heros);

console.log(all_heros);

const allHeros = [...marvel_heros,...dc_heros];
console.log(allHeros);

const arr1 = [1,2,3,[4,5,6],7,[8,9]];

const arr2 = arr1.flat(Infinity);

console.log(arr2);

console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam")); // from use to convert to array 

console.log(Array.from({name:"Shivam"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));