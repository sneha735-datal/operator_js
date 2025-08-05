// Write a program to print numbers from 1 to 10 using a loop
 for(let i=1;i<=20;i++)
{
    console.log("numbers from 1 to 20",i);
 }


 //Use a loop to print all even numbers from 1 to 20.

for(let i=1;i<=20;i++)
    if(i%2==0)
    {
        console.log("even number:",i);
    }
     
// Ask the user to enter a number N. Use a loop to calculate the sum from 1 to N
//  let num=prompt("enter a number");
//   let sum=0;
//   for(let i=1;i<=num;i++){
//       sum+=i;
//   }
//   console.log("sum number from 1 to num" +num+" "+sum);


// Ask the user to enter a number and print its table (e.g., 2 × 1 = 2 ... 2 × 10 = 20).
let N=prompt("enter a number");

for(let i=1;i<=N;i++){
    console.log(N+"*"+i+"="+(N*i));
}

// Ask the user to input a number and print its factorial using a loop.
let a=prompt("enter number");
let factorial=1;
for(let i=1;i<=a;i++)
{
    factorial*=i
}
console.log("factorial of",a+"is"+factorial);

//Ask the user to enter N and print numbers in reverse order from N to 1.
let b=prompt("enter a number");
 for(let i=b;i>=1;i--)
{
    console.log("reverse numbers from"+" "+b+"to 1 is"+" "+i);
 }

// Ask the user for a number and use a loop to count how many digits it has.
let ab=prompt("enter num");
for(let i=1;i<=ab.length;i++){
    let count=0;
    count=ab.length;
    count++;
console.log("the number has"+" "+count+" "+"digits");
}

// Take a number as input and find the sum of its digits using a loop.
let Y=prompt("enter Y number");
let sum=0;
for(let i=1;i<Y.length-1;i++){
    sum+=i;
    console.log("sum of digit in given number:"+sum[i]);


}

// Ask the user to input a number and check if it's a prime number using a loop.
let x=prompt("enter x number");
for(let i=1;i<=x;i++)
{
if(x%2===0)
{
    console.log("number is prime");
}else{
    console.log("number is not prime");
}
}
