// 1. Take a number and check if it's positive, negative, or zero using nested if else.
let number = prompt("enter number");
if(number>=0)
    {
        if(number === 0){
            console.log("number is zero");
        }
            else{
                console.log("number is positive");
            }
        }
        else{
    console.log("number is negative ");
}

// 2. Take three numbers and print the largest among them using nested if else.
 let n1=prompt("enter first number");
 let n2=prompt("enter second number");
 let n3=prompt("enter third number");
if(n1>=n2)
{
    if(n1>=n3){
        console.log("largest number is:",n1);
    }
    else{
        console.log("largest number is:",n3);
    }
}
else{
    if(n2>=n3){
        console.log("largest number is:",n2)
    }
    console.log("largest number is:",n3);
}

// 3. Take a character and check if it is a letter. If yes, check if it's a vowel.
let ch=prompt("enter a letter");
//ch=ch.toLowerCase();
if((ch>='A' && ch<='Z')||(ch>='a' && ch<='z'))
{
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    {
        console.log("vowel");
    }else{
          console.log("consonant");
    }
    }else{
          console.log("letter");
    }

    //4. Take a number and check if it's even. If yes, check if it's divisible by 4.
    let num=prompt ("Enter a number");
    if(num%2==0){
        if(num%4==0){
            console.log(" yes,number is even and it's divisible by 4");
        }else{
            console.log("number is even but it's not divisible by 4");
        }
    }else{
        console.log("odd number");
    }

    // 5. Take marks of 3 subjects and print grade: A (>=90), B (>=75), C (>=50), else Fail.
    let marks=prompt("enter your marks");
    if(marks>=90){
        console.log("your garde is A");
    }
      else if(marks>=75){
            console.log(" your grade is B");
        }
        else if(marks>=50){
            console.log("your grade is C");
        }else{
            console.log("you are fail");
        }