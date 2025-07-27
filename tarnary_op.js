/* 1. Take a number from the user and check whether it is even or odd using the ternary operator. */

// let Num=prompt("enter number");
//    let result=(Num%2==0)?"even":"odd";
//    {
//     console.log(result);
//    };

//    2. Check whether a user is eligible to vote (age >= 18) using the ternary operator.
// let age=prompt("enter your age");
// let check=(age>=18)?"eligible for vote":"not eligible for vote";
// {
//     console.log(check);
// }

//  3. Take two numbers and print the greater one using the ternary operator.
let n1=23;
let n2=12;
let greaternum=(n1>n2)?"number1 is greater":"number2 is greater";
{
    console.log(greaternum);
}

// 4. Check if a number is divisible by 5 using the ternary operator.
let number=50;
let check=(number%5==0)?"number is divisible by 5":"number is not divisible by 5";
{
    console.log(check);
}

//5.  Take a character input and check whether it's a vowel or consonant using ternary logic
let ch=prompt("enter any alphabet");
let checkvowelconsonant=(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')?"vowel":"consonant";
{
    console.log(checkvowelconsonant);
}