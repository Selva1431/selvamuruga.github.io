//if statement
let context = 10;

if (context > 5) {
    console.log("The number is greater than 5.");
}

// if-else statement
let data = 3;

if (data > 5) {
    console.log("The number is greater than 5.");
} else {
    console.log("The number is 5 or less.");
}

// else if statement

let num = 7;

if (num > 10) {
    console.log("The number is greater than 10.");
} else if (num > 5) {
    console.log("The number is greater than 5 but less than or equal to 10.");
} else {
    console.log("The number is 5 or less.");
}

//loops
//while 
let number = 0;

while ( number  < 5) {
    console.log("count is:" + number);
    number++;
}

//do while

let count = 0;

do {
    console.log("Count is: " + count);
    count++;
} while (count < 9);

//for
for (let i = 0; i < 5; i++) {
    console.log("calculation number " + i);
}



//for each

let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});


// switch statement

let countries = "india";

switch (countries) {
    case "india":
        console.log("india.");
        break;
    case "china":
        console.log("china.");
        break;
    case "japan":
        console.log("japan.");
        break;
    default:
        console.log("Unknown counties.");
}
