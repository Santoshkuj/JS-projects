// 1} Password Validator

// Write a JavaScript program that checks if the entered password matches the confirmed password. If the 
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.

const enteredPassword = "x";
const confirmedPassword = "x";
if (enteredPassword == confirmedPassword) {
    console.log("Password Matched. Password validation Successful.");
}
else {
    console.log("Password didn't match. Password validation unsuccessful");
}
// 2} Calculator

// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement 
// to perform the operation on the two numbers
// The calculator function should:
// | Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator
// | Use a switch statement to determine which operation to perform based on the value of the operator
// | If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical 
// operation and store the result in a variable called result
// | If the operator is not one of the valid operators, log "Invalid operator" to the console.
const num1 = 10;
const num2 = 4;
const math = ("+");
// let result = (num1+num2 || num1-num2 || num1*num2 || num1/num2);
switch (math) {
    case "+":
        result = num1+num2;
        console.log(result);
        break;
    case "-":
        result = num1-num2;
        console.log(result);
        break;
    case "*":
        result = num1*num2;
        console.log(result);
        break;
    case "/":
        result = num1/num2;
        console.log(result);
        break;
    default:
        console.log("Invalid operator");
}
// 3} Color Mixer

// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// based on the following criteria:
// | If color1 is "red" and color2 is "blue" or vice versa, print "purple"
// | If color1 is "red" and color2 is "yellow" or vice versa, print "orange"
// | If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"
// | If any other combination of colors is input, the program should print "Invalid color combination"

let color1 = 'blue';
let color2 = 'yellow';
switch (color1,color2) {
    case (color1 =='red' && 'blue') ||  (color1 =='blue' && 'red'):
        console.log("purple");
        break;
    case (color1 =='red' && 'yellow') ||  (color1 =='yellow' && 'red'):
        console.log("orange");
        break;
    case (color1 =='blue' && 'yellow') ||  (color1 =='yellow' && 'blue'):
        console.log("green");
        break;
    default:
        console.log("Invalid color");
}
// 4} Highest Marks

// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters 
// the marks of all five students in an array called "marks". Write a program that iterates through the array and 
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the 
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
const studenr1Mark = 40;
const studenr2Mark = 44;
const studenr3Mark = 47;
const studenr4Mark = 49;
const studenr5Mark = 43;
let mark = [40,44,47,49,43];
function heighest() {
    let max = mark[0];  
    for ( i = 0; i < mark.length; i++) {
        if (mark[i] > max) 
            max = mark[i]; 
    } 
  return max; 
} 
console.log("heighest mark is"+" "+ heighest());

const  grade =  heighest() == studenr1Mark ? 'Student 1 with heighest mark'
    :  heighest() == studenr2Mark ? 'Student 2 with heighest mark'
    :  heighest() == studenr3Mark ? 'Student 3 with heighest mark'
    :  heighest() == studenr4Mark ? 'Student 4 with heighest mark'
    :'Student 5 with heighest mark'

console.log(grade);
// 5} Capitalize

// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changes

const str = "santosh";
let x = "";
  (str.charAt(0) == str.charAt(0).toLowerCase()) ?
    x += str.charAt(0).toUpperCase()
  :x += str.charAt(0).toUpperCase();

console.log(x+str.slice(1));

// 6} Vowel Counter

// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
// counted
const vowels = ['a','e','i','o','u'];
let names =['f','i','f','s','u','d','a','o'];
function vowelCount() {
    let vowelNos = 0;
for (letter of names) {
if (vowels.includes(letter)){
    vowelNos++;
    }
}
    return vowelNos;
}
console.log(vowelCount()); 

// 7} Remove Duplicates
// In an online shopping application, customers can add multiple items to their cart. ;owever, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase but also
// affect the accuracy of the purchase order.To solvq this problqm, thq application nqqds to rqmovq duplicatq items from the customer's cart. The program
// should take the customer's cart with duplicatqs as input, and rqturn a nqw cart without duplicates.
// Writq a pro[ram to solvq thq problqm of duplicatq itqms in thq cart by removing duplicates.
    
const cart =["mango","apple","orange","banana","apple","orange"];
const newCart = [];
function removeDuplicates() {
    for (i=0; i<cart.length; i++) {
        if (newCart.indexOf(cart[i])===-1) {
            newCart.push(cart[i]);
        }
    }
    return newCart;
}
console.log(removeDuplicates());

// 8. Inverted right-angled triangle pattern with asterisks
// Write a program that takes an integer input i and prints an inverted right-angle triangle pattern of asterisks
//     with i rows.
//     Invqrtqd ri[ht-an[lqd pattqrn: 
//     If i=6
let i1 = 6;
let astericks = "";
for (i=i1; i>=1; i--) {
    for (j=0; j<i; j++) {
        astericks+=("*");
    }
    astericks+="\n"
}
console.log(astericks);

// 9. Check for divisibility
// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
// Use a for loop and continue statement.
let arr = [9,27,4,6,12,8,10]
for (i=0; i<arr.length; i++) {
    if ((arr[i] % 3 == 0) && (arr[i] % 2 != 0) ) {
       console.log(arr[i]);
    }
}
// 10. Correct a bug

// You are working on an e-commerce website where customers can add items to their cart. The cart stores the
// quantity of qach itqm that thq customqr wants to purchasq in an array of numbqrs. Howqvqr, the website is
// currently qxperiqncing a bug whqrq thq quantity of qach itqm is being recorded incorrectly by reducing it to
// half. As a rqsult, you need to write a JavaScript function that can doublq thq quantity of qach itqm in thq cart
// array to correct the bug
const Cart =['e','a','d','r','a','a','b','e'];
let count ={};
for (i=0; i<Cart.length; i++) {
    let countItem = Cart[i];
    if (count[countItem]) {
        count[countItem]+= 1;
    } else {
        count[countItem] = 1;
    }
}
console.log(count);
let bug = Object.values(count);
let doubleBug = [];
for (i=0; i<bug.length; i++) {
    doubleBug.push(bug[i] * 2);
}
console.log(doubleBug);