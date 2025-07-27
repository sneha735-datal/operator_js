// 1. Swap Two Numbers Without Using a Third Variable
// Use only arithmetic and assignment operators

let a = 20;
let b = 30;

a = a + b;
b = a - b;
a = a - b;
{
    console.log("swapped numbers:", a, b);
}

// 2. Check If a Number is Even or Odd
//  Use the modulus (%) operator and logical operators, without using if or ternary (? :)
let num = 11;
{
    (num % 2 == 0 && console.log("even")) || console.log("odd");
}

//3. Find the Maximum of Three Numbers
//Use only comparison and logical operators
let n1 = 20;
let n2 = 30;
let n3 = 40;
let r_max;
(n1 > n2 && n1 > n3 && (r_max = n1)) ||
    (n2 > n1 && n2 > n3 && (r_max = n2)) ||
    (n3 > n1 && n3 > n2 && (r_max = n3));
{
    console.log("maximum number is:", r_max);
}

// 4. Write a Simple Calculator Function
//That takes two numbers and an operator (+, -, *, /, %) and returns the result
function calculator(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return "inavlid op";

    }
}
console.log(calculator(12, 14, '+'));

//5. Check if a Character is a Vowel or Consonant
//Use logical (||) and comparison (==) operators
function Vowelorconsonant(char) {
  

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        console.log ("vowel");
    } else {
        console.log ("consonant");
    }
}
console.log(Vowelorconsonant('p'));

//6. Calculate Square of a Number Using Assignment Operator
  // Use *= operator only
  let N=20;
  {
    console.log(N*=N);
  }
  //7. Return true Only if Both Inputs Are Non-Zero Numbers
   //Use logical AND (&&) operator
   let N1=0;
   let N2=10;
   let res=(N1!=0)&&(N2!=0);
   {
    console.log(res);
   }

   // 8. Check if a Number Lies Between Two Given Numbers
   //Use only < and > operators (no if or function)
   let A=10;
   let B=30;
   let C=50;
   {
    console.log(B>A && B<C);
   }

   // 9. Evaluate the Result of Postfix and Prefix Operators
   //let a = 5;
   //let b = a++ + ++a;
   // What are the values of a and b?
   let a1 = 5;
   let b1 = a1++ + ++a1;
   {
    console.log(a1,b1);
   }

   //10. Predict the Output Using Logical Operators
    //let x = 0;
    //let y = 10;
    //let result1 = x && y;
    //let result2 = x || y;
    // What are result1 and result2?
     let x = 0;
    let y = 10;
    let result1 = x && y;
    let result2 = x || y;
    {
        console.log(result1,result2);
    }
