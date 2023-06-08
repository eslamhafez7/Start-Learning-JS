//  Out put to screen L1
//  window. (alert)//
// window.alert("What's Your Name");
//  document (write)//
// document.write("<h1>My Name Is Islam Hafez</h1>");
//  console //
// console.log("Hello From JS File");

// console.log L2
// console.log("text");
// console.error("error");
// const names = [
//     { name: "eslam" },
//     { name: "ahmed" },
//     { name: "aymen" }
//   ];
  
//   console.table(names);
  
// directive %c  
// console.log("hello from %c js file", "color: red; font-size: 30px");

//  Types Of data L3 

// console.log(typeof "islamhafez");
//  string
// console.log(typeof 7000);
// number
// console.log(typeof [20, 30, 40, 50]);
// object
// console.log(typeof {name: 'islam', age: 20, country: 'egy'});
//  object
// console.log(typeof true);
// boolean
// console.log(typeof false)
//  boolean
// console.log(typeof undefined)
// undefined

// Variables
// var user1 = "islam";                                     
// console.log(user1);
// console.log(user1);

// Template literals Template Strings 
// let title = "Islam Hafez";
// let bio = "Front End Developer";
// let Country = "from Egypt";

// let markUp = `
// <div class="card">
//    <div class="child">
//      <h1> ${title}</h1>
//      <p>${bio}</p>
//      <span>${Country}</span>
//    </div>

// </div>
// `
// document.write(markUp);






// Elzero First Challenge ****************************************** 


// let tiTle="Hello Elzero", DescRiption="Elzero Web School", tiMe="25/10";

// let createPage = `
// <div class = "container">
//   <div class = "card">
//     <h3>${tiTle}</h3>
//     <p>${DescRiption}</p>
//     <span>${tiMe}</span>
//   </div>
// </div>  
// `;
// document.write(declarePage);
// document.write(declarePage);
// document.write(declarePage);
// document.write(declarePage);

// another way to repeat the crad

// let repeatedCards = createPage.repeat(3);
// document.write(repeatedCards);
// document.write(createPage);
// ****************** Successful************************

// Increment 
// Decrement 
// num = 1
// num ++ post
//  ++num pre



// Unary Plus +
// Unary Negation -

// console.log(+100); //100 num
// console.log(+ "100"); // 100 num
// console.log(+ "-100");  //-100 num

// console.log(+ "Islam"); //Nan
// console.log(+15.5); //15.5 num
// console.log(+0xff); //255 num

// console.log(+ null); // 0
// console.log(+ false); // 0
// console.log(+ true); // 1

// console.log(-100); // -100 num
// console.log(- "100"); // -100 num
// console.log(- "-100");  // 100 num )(نفي النفي اثبات)

// console.log(- "Islam"); // Nan
// console.log(-15.5); // -15.5 num
// console.log(-0xff); // -255 num

// console.log(- null); // -0
// console.log(- false); // -0
// console.log(- true); // -1


// Assignment Operator
// let a = 10;

// a += 10; //20
// a -= 5; //15
// a +=100; //115
// a /=5; //23
// a *=10; //23
// console.log(a); // 10


// Challenge 

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 output //100
// console.log(++a + -b + +c++ - -a++ + +a); // 13 - 21 + 81 + 12 + 13 output //100
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //100


//Number 
// console.log(1000000);
// console.log(1e6);
// console.log(1**6);
// console.log(1000000.0);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 100000);


// Methods Number 

// two dots to call a method
// toString()
// toFixed()
// parseInt
// parseFloat
// is NaN [ES6]
/*
console.log((100).toString());
console.log((100.546454).toFixed(2));
console.log(parseInt("islam 100"));
console.log(parseInt("100 islam"));
console.log(parseFloat("100.500 islam"));

console.log(Number.isInteger("200"));
console.log(Number.isInteger(200.500));
console.log(Number.isInteger(200));
console.log(Number.isNaN(200));
*/

//Math Object

// round()
// ceil()
// floor 
// min 
// max
// pow
// random
// trunc
/*
console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.2)); // 100
console.log(Math.floor(99.9)); // 99 

console.log(Math.min(100, 200, -100, -20, -10)); // -100
console.log(Math.max(100, 200, 600, 432, 890)); // 890

console.log(Math.random()); // قيمه عشوائيه
console.log(Math.trunc(99.5)); // 99
*/



// String Methods P1

// Index 
// ChartAt()
// lengeth 
// trim 
// touppercase
// tolowercase
// chain method

// let name = "  Ahmed  "
// console.log(name[3]); // A
// console.log(name[4]); // m
// console.log(name[5]); // e 

// console.log(name.charAt(3)); // A

// console.log(name.length); // 9

// console.log(name);//   Ahmed
// console.log(name.trim()); // Ahmed
// console.log(name.toUpperCase());//  AHMED
// console.log(name.toLowerCase()); //  ahmed
// console.log(name.trim().charAt(3).toUpperCase()); //E

// String Methods P2

// let a = "Islam Hafez Mohamed";
// // indexOf
// // lastIndexOf
// // slice
// // split
// console.log(a.indexOf("H"));
// console.log(a.lastIndexOf("M"));
// console.log(a.slice(2, 12));
// console.log(a.split()); // Turns To Array

// String Methods P3 
// substring
// substr
// includes
// startsWith true or false
// endsWith true or false

// let a = "Elzero Web School";

// console.log(a.length);
// console.log(a.substring(10));
// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));
// console.log(a.substring(-10, 6));
// console.log(a.length - 5, a.length - 3);

// console.log(a.includes("web"));
// console.log(a.includes("Web"));

// console.log(a.startsWith("E"));
// console.log(a.startsWith("l"));
// console.log(a.startsWith("4"));

// console.log(a.endsWith(-10));
/*
let a = "Islam ";
let b = "Hafez ";
let c = "Mohamed ";
let d = " Abuesha";

let i = "70";
let n = "60";
let g = "50";
let f = "40";
let l = "30";

console.log(i + n + g + f + l);
console.log(Number(i) + Number(n) + Number(g) + Number(f) + Number(l));

document.write (a + b + c + d);
*/

// comparison operators 
// ==   //Equal   // Comapre Value Only
// !=   //Not Equal
// ===   //Edentical  // هنا بيقارن عن طريق القيمه ونوع البيانات  console.log(20 ==="20");// false
// !==   //Not Edentical
// >   //Larger Than
// >=   //Larger Than Or Equal
// <=   //Smaller Than
// <=   //Smaller Than Or Equal

//console.log(10 == "10"); // true
//console.log(10 != "10");  // false
//console.log(10 === "10"); // false
//console.log(10 !== "10"); // true
//console.log(10 < "10");   // false
//console.log(10 <= "10");  // true
//console.log(10 > "10");  // false
//console.log(10 >= "10");  // true

//Challenge 
// What You can do to make the output // True
// console.log("osama" == "Islam"); // false
// Solve 
// console.log(typeof"osama" == typeof"Islam");



// Logical Operators (logic)

// ! // not
// && // and
// || // or


//console.log(true); // true
//console.log(!true); // false
//console.log(10 == "10" && 10 > 10 && 100> 10); // false // لازم تحقق كل الشروط عشان الناتج يطلع صح
//console.log(10 == "10" || 10 > 10 || 100> 10); // true // one condition enough


// window.alert("How old are you?");
// var age = parseInt(prompt("Please enter your age:"));

// if (age >= 18) {
//   console.log("You are an adult.");
//   window.alert("You are an adult.");
// } else {
//   console.log("You are not an adult yet.");
//   window.alert("You are not an adult yet.");
// }



// if conditions 

// control flow
// if 
// else if 
// else






/*
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "Egypt";

if(discount === false) {
    price -= discountAmount;
} else if (discount === false) {
    price -= 10;
}
else if (country === "KSA") {
    price = price - discountAmount;
} else {
    price = price - 90;
}
console.log(price);
*/

// neasted if
/* 
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
    price -= discountAmount;
}else if (country === "Egypt" && student === true){ // Neasted Condition

}
console.log(price);
*/

// Conditional ternary operator 
// if true use ? if false use :
/*
let theName = "mona";
let gender = "female";
let age = 30;

gender === "male"? console.log("Mr") : console.log("Mrs");

let result = gender === "male"? ("Mr") :("Mrs");
document.write(result);
console.log(gender === "male"? ("Mr") :("Mrs"));
console.log(`hello ${gender === "male"? "Mr" :"Mrs"} ${theName}`);

age < 20  
? console.log(20)
: age > 20 && age < 60
?console.log("20 To 60")
: age > 60 
? console.log("Larger than 60")
: console.log("Unknown");
*/


// Logical or ||
// null + undefined + any falsy value 
// nullish coalescing operator ??
// null + undefined
/*
let price = 0;
console.log(`The price is ${price || 200}`);
console.log(`The price is ${price ?? 200}`);

console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(100));
console.log(Boolean(-100));
*/

// if challenge

/*
let a = 10;

if (a < 10) {
    console.log(10);
}else if (a >= 10 && a <= 40) {
    console.log ("10 To 40");
}else if (a > 40) {
    console.log(">40");
}else {
    console.log("Unknown");
}

a < 10 
? console.log(10)
: a >= 10 && a <= 40
?console.log("10 To 40")
: a > 40
?console.log("> 40")
: console.log("unknown");
// Challenge 1 done 
*/

// Challenge 2 
// write if ternory syntax 

// let st = "Elzero web school";
// if ("34" === st.charAt(3)) {
//     console.log("Good");
// }

/*
Switch Statement 
switch () {
case  :
    block of code
break;
case 1:
    block of code
break;
case 2:
    block of code
break;
default:
block of code  
*/
/*
let day = 10;

switch (day) {
    case 0:
        console.log("saturday");
        break;
    case 1:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;   
    case 3: 
        console.log("Islam");  
        break;
        default:
        console.log("Unknown Day");    

}
*/
/*
switch && if challenge 
change this to switch statement 
let job = "manager";
let salary = 0;

if (job === "manager") {
  salary = 8000;
}else if (job === "IT" || job === "support") {
    salary = 6000;
}else if (job === "developer" || job === "designer") {
     salary = 7000;
}else {
     salary = 4000;
}
console.log(salary);
*/
// The solution 
/*
let job = "designer";
let salary = 0;

switch (job) {
    case "manager":
        salary = 8000;
        break;
    case "IT":
    case "support":
        salary = 6000;
        break;
    case "developer":
    case "designer":
        salary = 7000;
        break;
        default:
            salary = 4000;    
}
console.log(salary);
// Challenge Done 
*/

/*
//Array Big Introduction

let myFriends = ["ahmed", "osama", "saad", ["Islam", "Mariam"]]; // To create an array

console.log(`hello ${myFriends [0]}`); //To access to the arraay 
console.log(`GoodMorning ${myFriends[2]}`);
console.log(`${myFriends[1][3]}`);
console.log(`${myFriends[3]}`);
console.log(`${myFriends[3][1]}`);
console.log(`${myFriends[3][1][4]}`); //Nestead Array

// To Change Elements 
console.log(myFriends);
myFriends[1] = "Gamal";
myFriends[2] = "Sara";
myFriends[3] = ["Mohsen", "Khaled"];

console.log(Array.isArray(myFriends)); //To Check The Element

let str = "Islam";
console.log(Array.isArray(str));
*/ 

// using Length With Array 
//    Array Methods
    // 1- Length 
    // Index Starts From 0
/*
let myFriends = ["Islam", "Sara", "Asmaa", "Mena"];
console.log(myFriends.length);
console.log(myFriends);

// myFriends [4] = "Gamal";
// myFriends [myFriends.length] = "Gamal";
console.log(myFriends);
myFriends [myFriends.length - 1] = "Gamal";
console.log(myFriends);
 myFriends.length = 2;
console.log(myFriends);
*/

// Arrays Methods [Adding - Removing];

//    1- unShift() // add element to the first 
//    2- push() // add element to the end 
//    3- shift() // remove the first element and return it
//    4- pop() // remove the last element and return it
/*
let myFriends = ["Islam", "Mai", "Sara", "Ahmed"];

console.log(myFriends);

myFriends.unshift("Samy", "Said");
console.log(myFriends);

myFriends.push("Islam Hafez");
console.log(myFriends);

myFriends.shift();
console.log(myFriends);

let first = myFriends.shift();
console.log(`First Name Is ${(first)}`);

let last = myFriends.pop();
console.log(myFriends);
console.log(`Last Name Is ${(last)}`);
*/

// Searching Array 
//  1- indexOf()
//  2- lastIndexOf()
//  3- includes(value + index of element)
/*
let myFriends = ["Islam", "Ayman", "Mohsen", "Saad", "Islam"];

console.log(myFriends);

console.log(myFriends.indexOf("Islam"));
console.log(myFriends.lastIndexOf("Islam"));
console.log(myFriends.includes("Islam")); // true
console.log(myFriends.includes("Khaled")); // false 
console.log(myFriends.includes("Islam", 2)); // true 
console.log(myFriends.includes("Islam", 4)); // true 

if (myFriends.indexOf("Khaled") === -1) {
    console.log("not Found")
}
if (myFriends.indexOf("Khaled") === -1) {
    console.log("not Found")
}
*/
/*
// Sorting Array 
// arrays methods 
//  1- sort()
//  2- reverse()

let sort = [10 , "20", "Islam", "9000", 20, "90", "Sayed"];
console.log(sort);

console.log(sort.sort()); // sort by alphabit
console.log(sort.reverse());
console.log(sort.sort().reverse());
*/

// Slicing Arrays 
// Arrays Methods 
// 1- slice() 
// 2- splice(start[Mand], Deletecount[opt] [0 = no remove], the items to add[opt])
// if negative => Starts from the end
// The start value is not an option
// The end value may worl as an option
/*
let myFriends = ["Islam", "Ayman", "Mohsen", "Saad", "Islam"];
console.log(myFriends);
console.log(myFriends.slice); // as it was bexause there is no value

console.log(myFriends.slice(1, 4)); // Not includes end
console.log(myFriends.slice(3 , 4));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-2));
console.log(myFriends.slice(1, -2));
console.log(myFriends);

// console.log(myFriends.splice(1, 2, "Islam Hafez", "Nour Hafez"));
myFriends.splice(0, 2, "Islam Hafze", "Nour Hafez");
console.log(myFriends);
*/
/*
// Joining Array 
// concat(array , array) // return new array 
// loin (Seperator)
let myFriends = ["Islam", "Ayman", "Mohsen", "Saad", "Islam"];
let newFriends = ["Khaled", "Sara"];
let schoolFriends = ["Khames", "Asmaa"];

let allFriends = myFriends.concat(newFriends, schoolFriends, "Islam Hafez", "Manar", 1, 4);
console.log(allFriends);
console.log(allFriends.join());
console.log(allFriends.join("/"));
console.log(allFriends.join(" , "));
console.log(allFriends.join("|").toUpperCase);
*/

// Arrays Challenge
// Don't use any numbers in your methods (Never )
// let zero = 0;
// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Gamal", "Ameer"];

// // write code here 
// my.reverse()
// my.splice(0, 2, "Osama");
// console.log(my) // ["Osama", "Elham", "Mazero", "Ahmed"]
// // 1 Done 
// console.log(my.unShift("Elzero").splice(0, 1));  // ["Elham", "Elzero"]
// // console.log(); // Elzero
// // console.log(); // Or


/* Loop
for ([1] [2] [2]) {
    block of code 
}
*/
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let myFriends = [1, 2, "Osama", "Islam", "Youssef"];
// let onlyNames = [];
// for (let i = 0; i < myFriends.length; i++) {
//     if(typeof myFriends[i] === 'string') {
//         onlyNames.push(myFriends[i]);
//     }
// }
// console.log(onlyNames);


// if (typeof myFriends[0] === 'string') {
//     onlyNames.push(myFriends[0]);
// }
// if (typeof myFriends[1] === 'string') {
//     onlyNames.push(myFriends[1]);
// }
// if (typeof myFriends[3] === 'string') {
//     onlyNames.push(myFriends[2]);
// }
// if (typeof myFriends[3] === 'string') {
//     onlyNames.push(myFriends[3]);
// }
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
// } 

// Neasted Loop L50
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Blue"];
let models = [2021, 2022];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);

    for(let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    for(let k = 0; k < models.length; k++) {
        console.log(`@ ${models[k]}`);
    }
}
*/

/*
Loop L 51
    - Break
    - Continue
    - Label
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Blue"];
mainLoop:for(let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nesteadLoop:for(let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}
*/

/* Loop For Advanced Examples L52*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let i = 0;
// for (;;) {
//     console.log(products[i]);
//     i++
//     if(i === products.length) break;
// }

/* Loop 
    - Add Products To the Page L53
*/
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for(let i = 0; i < products.length; i++) {
//     document.write(`<div>`);
//     document.write(`<h3> [${i + 1}] ${products[i]}</h3>`);
//     for(let j = 0; j < colors.length; j++) {
//         document.write(`<p>- ${colors[j]}</p>`);
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`);
//     document.write(`<div>`);
// }

/*
Loop L 54
    - while
*/
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let i = 0;

// while(i < products.length) {
//     console.log(products[i]);
//     i++;
// }
/*
Loop L 55 
    - Do while
*/
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let i = 0;

// do {
//     console.log(i);
//     i++;
// }while(false);
// console.log(i);

// Loop Challenge L 56
// let admins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let employees = ["Amged", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let adminsCount = 0;


// document.write('<h3>We Have 3 Admins</h3>');
// for(let i = 0; i < admins.length; i++) {
//     if (adminsCount === 3) break;
//     let adminNumber = i + 1;
//     document.write(`<hr>`);
//     document.write(`<div>The Admin For Team ${adminNumber} is ${admins[i]}`);
//     if(admins[i] === 3)break;
//     adminsCount++

//     for(let j = 0; j < employees.length; j++) {
//         document.write(`<br>- ${employees[j]}`);
//     }
// }
// Solve the challenge with chatGPT
// let admins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let employees = ["Amged", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// document.write(`<div>We Have 3 Admins</div>`);
// document.write(`<div>We Have Three Admins:</div>`);
// document.write(`<hr>`);
// let adminCount = 0;

// Create an object that groups employees by their first letter
// let employeesByFirstLetter = {};
// for (let i = 0; i < employees.length; i++) {
//   const firstLetter = employees[i][0];
//   if (!employeesByFirstLetter[firstLetter]) {
//     employeesByFirstLetter[firstLetter] = [];
//   }
//   employeesByFirstLetter[firstLetter].push(employees[i]);
// }

// mainLoop: for (let i = 0; i < admins.length; i++) {
//   if (adminCount === 3) break;

//   let adminNumber = i + 1;

//   document.write(`${adminNumber} <h3>The Admin for Team ${adminNumber} is ${admins[i]}</h3>`);
//   document.write(`<hr>`);
//   document.write(`<br>[${adminNumber}] ${admins[i]}`);

//   if (admins[i] === "stop") break mainLoop;

//   adminCount++;

//   const firstLetter = admins[i][0];
//   if (employeesByFirstLetter[firstLetter]) {
//     for (let j = 0; j < employeesByFirstLetter[firstLetter].length; j++) {
//       document.write(`<br>- ${employeesByFirstLetter[firstLetter][j]}`);
//     }
//   }
// }
// for(let i = 900; i < 930; i++) {
//     document.write(`<hr>`)
//     document.write(`<br> - ${i}`);
// }


