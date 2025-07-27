//1. Input a day number (17), print the corresponding day name using else if
let day = 17;
if (day == 1) {
    console.log("Monday");
} else if (day == 2) {
    console.log("Tuesday");
} else if (day == 3) {
    console.log("Thursday");
} else if (day == 4) {
    console.log("Friday");
} else if (day == 5) {
    console.log("Saturday");
} else if (day == 6) {
    console.log("Sunday");
} else {
    console.log("Invalid day");
}

// 2. Input marks (0100), assign grade: A, B, C, D, or F using else if.
let marks = 100;
if (marks >= 90) {
    console.log("Grade A");
} else if(marks >= 75)
{
    console.log("Grade B");
} else if(marks >= 50)
{
    console.log("Grade C");
} else if(marks >= 35)
{
    console.log("Grade D");
}else
{
    console.log("Grade F");
}

//3. Input month number (112), print the number of days in that month
let monthNo = 112;
if (monthNo == 1 || monthNo == 3 || monthNo == 5 || monthNo == 7 || monthNo == 8 || monthNo == 10 || monthNo == 12) {
    console.log("31 days in this months");
}
else if (monthNo == 4 || monthNo == 6 || monthNo == 9 || monthNo == 11) {
    console.log("30 days in this months");
} else if (monthNo == 2) {
    console.log("28 or days in this month");
}
else {
    console.log("invalid days in this month number");
}

// 4. Input temperature and display message: Very Hot (>=40), Hot (>=30), Warm (>=20), Cold (>=10), Very
// Cold (<10)

let temperature=prompt("enter current temperature");
if(temperature>=40)
{
    console.log("very hot");
}else if(temperature>=30)
{
    console.log(" Hot");
}else if(temperature>=20)
{
    console.log("warm");
}else if(temperature>=10){
    console.log("Cold");
}else if(temperature<=10)
    {
    console.log("Very Cold");
    }

 // 5. Input a number and check: If divisible by 2 and 3, only 2, only 3, or neither.
 let num=prompt("enter a number");
 if(num%2==0 && num%3==0)
 {
    console.log("number is divisible by 2 and 3");
 }else if(num%2==0)
 {
    console.log("number si divible by only 2");
 }
 else if(num%3==0)
 {
    console.log("number is divisible by only 3")
 }else{
    console.log("number is not divisible");
 }