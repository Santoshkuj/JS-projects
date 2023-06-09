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
// operation and store the result in a constiable called result
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
    names.map((letter) => {
if (vowels.includes(letter)){
    vowelNos++;
    }
});
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
const arr = [9,27,4,6,12,8,10]
const nums = () =>{
 let k =[];
for (i=0; i<arr.length; i++) {
    if ((arr[i] % 3 == 0) && (arr[i] % 2 != 0) ) {
        k.push(arr[i]);  
    }
}
return k;
}
console.log(nums(arr));
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
    if (count[countItem] = count[countItem]) {
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

// 11. Unit converter

// A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying 
// it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The 
// function should take input in Celsius and return output in Fahrenheit. This function will help the weather station 
// to provide tqmperature readines that are easily understandable to a wider audience.

const celcious = 10;
function unitconversion() {
    return fahrenheit = (celcious * 1.8) + 32;
}
console.log(unitconversion(celcious));

// 12. Calculate rental cost

// A car rental company needs to calculate the cost of a rental based on the number of days rentqe and the type 
// of car. They rquirq a function that takes in the numbqr of days rqntqd and car typq and rqturns thq rqntal cost. 
// Thq total cost would bq thq rqntal cost multipliqd by thq numbqr of days rqntqd.

// Thq rental costs are
// O Economy = Rs. 4000 /- pqr dayZ
// O Midsize = Rs. 10,000 /- pqr dayZ
// O Luxury = Rs. 20,000 /- pqr day.

const car = 'Midsize';
const days = 2;
function rentCalculator() {

        if(car == 'Economy')  {
            totalRent = (days * 4000);
        }
        else if (car == 'Midsize') {
            totalRent = (days * 10000)
        }
        else{
            totalRent = (days * 20000)
        }
        return totalRent;
    }
console.log(rentCalculator(car,days));

// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of 
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing 
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.

function billSplitter (x,y) {
  return totalCost ={
    cost: x,
    $person: x/y
  }
}
console.log(billSplitter (100,5)); 

// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.
const customerCart = [
    {unitprice:20,quantity:2},
    {unitprice:30,quantity:3},
    {unitprice:20,quantity:5}
     ]
     function finalOrder(finalCart) {
        let k = [];
        finalCart.forEach(
          (el) =>
            k.push(el.unitprice * el.quantity)
      )
      return k;
    }
      
      console.log(finalOrder(customerCart));
     

    //  15. Calculate the percentage of the discount
    //  A retail store is offering a discount on its products and wants to calculate the percentage of the discount to 
    //  show customers how much they can save. Given the original price and the discounted price of a product, 
    //  implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. 
    //  This function could be useful for the store's marketing team to create promotions and offers that attract 
    //  customers.
    const originalPrice = 'x';
    const discountPrice = 'y';
    const discountedsaving = z='x'-'y'
    const percentageOFDiscount = (x,y) => {
        let z =x-y;
      let p = (z/x) * 100;
      return p.toFixed(2);
    }

console.log(percentageOFDiscount(150,95)+'%');

// 16. Generate a random number
// Create a JavaScript program that generates a random number between 1 and 100 when the program starts. 
// Use a self-invoking arrow function to generate the random number. This program can be used as a component 
// in constious games or applications that require a random number generator

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)+min);
  }
  console.log(getRandomInt(1,100));

//   17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an 
// object with a keys name and balance. Write functions using object methods to update a customer's account 
// balance based on a deposit or withdrawal.

const account ={name:'santosh', balance:5000}
    const deposit= function (balance,x) {
        account.balance = balance + x;
        return (account.balance);
    }
    const withdraw= function (balance,y) {
        account.balance = balance - y;
        return (account.balance);
    }
    const depositBal = deposit(account.balance,2000);
    const withdrawBal = withdraw(account.balance,100)

    account.balance = depositBal;
    account.balance = withdrawBal;
    console.log(account);