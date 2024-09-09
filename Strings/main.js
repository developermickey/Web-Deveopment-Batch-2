// String 

// String are for storing text 

// "hello world" 

// let fullName = "Mukesh"; //text mukesh 
// let lastName = 'Pathak'; //text mukesh  
// let age = 28;

// template literal  String 

// console.log(`i am ${fullName} ${lastName}`); // ` `


// console.log(`My name is ${fullName} ${lastName} and My age is ${age}`)


// length is property 

// let words = "Lorem ipsum dolor sit amet, consectetur adip";

// console.log(words.length);

// let myself = 'it\'s me';
// let myself = "Hello this is my friends \"John\" me";

// let myself = "\\";

// console.log(myself);


// String Methods 

// 1. method charAt();

// let name = "Mukesh";

// console.log(name.charAt(0));
// console.log(name.charCodeAt(1));

// console.log(name.at(0));

// console.log(name[0]);


// Stirng toUpperCase();


// let fullName = "mukesh pathak";

// console.log(fullName.toUpperCase());



// String Text String me hum text ko store kar sakte hai  ""

// example 

// let firstName = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil quas cumque soluta autem veniam, deleniti ea voluptas sunt fugit voluptate? Asperiores, consequatur facere voluptatum sit in id dolorem tempore?";
// let lastName = 'Pathak';

// console.log(typeof firstName, typeof lastName);

// console.log(firstName.length);

// what is index only every element postion


// console.log(lastName[3]);



// Slice ek method string  

// syntex  

// let fullName = "Mukesh Pathak";

// slice 2 value ek start jo ki include hota hai 
// or ek hota hai end  jo ki exclude hota hai = jise gina nahi jayega 

// console.log(fullName.slice(7, 10)); 

// console.log(fullName.substring(7, 10))

// console.log(fullName.substr(1)) 
// first value index and second value length 

// let helloString = "THIS IS MY CLASS";

// // console.log(helloString.toUpperCase());
// console.log(helloString.toLowerCase());



 
// id="demo"
// id="btn"


// let p = document.getElementById("demo");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     // console.log("demo clicked");

//    p.innerHTML = toUppercase();


// })


let f1 = "Hello";
let f2 = "World";

// console.log(f1 + " " + f2);

// console.log(f1.concat(" ", f2))

// trim method             mukeshpathak345@gmail.com

let username = "         mike@123  hdjfdkf    "
console.log(username.length);

console.log(username.trim())
console.log(username.length);

