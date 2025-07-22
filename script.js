//1. Add two numbers and print the result. (Use + operator)
let a1=5;
let b1=10;
{
    console.log("addition of two number is:",a1+b1);
};

//2. Find the remainder when 17 is divided by 3. (Use % operator)
let a2=17;
let b2=3;
{
    console.log("remainder:",a2%b2);
};

//3. Multiply three numbers: 2, 3, and 4. (Use * operator)
let x=2;
let y=3;
let z=4;
{
    console.log("multiplication of 2 , 3, 4 is:",x*y*z);
};

 //4. Subtract 100 from 250 and divide the result by 5. (Use - and / operators)
 let x1=250;
 let y1=100;
 let z1=5;
 let r=x1-y1;
 let r2=r/5;
 {
    console.log("subtraction of 250 ans 100 is:",r +"\n"+"after divide the result:" ,r2);
 };

 // 5. What will be the output?
  // let a = 5;
  // let b = ++a;
   //console.log(a, b);
   let a = 5;
   let b = ++a;{
   console.log(a, b);
   };

   // 6. Use += operator to add 10 to a variable initialized as 20
   let a3=20;
    a3+=10;
    {
        console.log(a3);
    };

    //7. Use *= to double the value of a variable initialized as 7
    let a4=7;
    a4*=2;
    {
        console.log(a4);
    };

    // 8. What will be the output?
   //let x = 10;
   //x -= 3;
   //console.log(x);
   let X = 10;
   X-= 3;
   console.log(X);

   // 9. Check if two numbers are equal using == or ===
   let n1=10;
   let n2=20;
   {
    console.log(n1==n2);
    console.log(n1===n2);
   };

   //10. Check if 25 is greater than 15 using > operator.
   let n3=25;
   let n4=15;
   let result=n3>n4;
   {
    console.log(result);
   };
 
   // 11. Compare two numbers and print true if the first is smaller    
    let n5=50;
    let n6=40;
    {
        console.log(n5>n6);
    };

    // 12. What is the output?
   //console.log(5 === "5");
    let num1=5;
    let num2="5";
    {
        console.log(5==="5");
    };

    // 13. Check if a number is between 10 and 50 using && operator.
    let number=30;
    let result1=(number>=10 && number<=50);
    {
        console.log(result1);
    };

    //14. Check if a number is less than 10 or greater than 100 using || operator
    let number2=0;
    let result2=number2<10||number2>100;
    {
        console.log("number is less than 10 0r grater than 100",result2);
    };

    //15. What is the output?
  // let a = true;
   //let b = false;
   //console.log(a && b);
   
   let ab = true;
   let bc = false;
   console.log(ab && bc);

   // 16. Negate a boolean value using ! operator. Print the opposite of true
   let N=30;
   let M=40;
   let res=N!=M;
   {
    console.log(res);
   };

   //  17. Check if a number is even or odd using the ternary operator
   let Num=15;
   let res1=(Num%2==0)?"even":"odd";
   {
    console.log(res1);
   };

   //18. Check eligibility to vote using ternary. (age >= 18)
   let age=20;
   let res2=(age>=18)?"eligible for vote":"not eligible for vote";
   {
    console.log(res2);
   };

   //19. Find the greater of two numbers using the ternary operator.
   let A=20;
   let B=30;
   let res3=(A>B)?A:B;
   {
    console.log(res3);
   };

   // 20. Predict the output:
   //let x = 5;
   //let y = x++ + ++x;
   //console.log(y)
 
   let X1 = 5;
   let Y1 = X1++ + ++X1;
   console.log(Y1);
