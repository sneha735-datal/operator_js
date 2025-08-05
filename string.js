//Take a string input and convert it to uppercase using a string method.
let str = prompt("enter a string");
{
  console.log(str.toUpperCase(str));
}


// 2. Take a string input and convert it to lowercase using a string method.
let str1 = prompt("enter a string");
{
  console.log(str1.toLowerCase())
}


// //3. Ask the user for a string and print its length using a method.
let str2 = prompt("enter a string");
count = str2.length;
{
  console.log(count);
}


// 4. Ask the user to enter a sentence and count how many times the word 'the' appears using a string
//method.
let sentence = prompt("enter a sentence");
sentence = sentence.toLowerCase();
let word = sentence.split(" ");

let count = 0;
for (let i = 0; i <= word.length; i++) {
  if (word[i] === "the") {
    count++;
  }
}
console.log("the word appears in given string: " + count);


// 5. Take a string input and check if it ends with a particular word using endswith().
let str3 = "Sneha";
{
  console.log(str3.endsWith("ha"));
}


// 6. Input a string and check whether it starts with a specific word using startswith().
let str4 = "Sneha Datal";
{
  console.log(str4.startsWith('S'));
}



// 7. Ask the user to input a string and remove leading and trailing spaces using strim().
let str8 = prompt("enter your your full name");
{
  console.log(" " + " " + str8 + " ");
  console.log(str8.trim());

}



// 8. Take a string and replace all spaces with hyphens (-) using replace().
let str5 = "sneha Datal 123";
{
  console.log(str5.replaceAll(" ", "-"));
}


// 9. Ask the user to input their name and print each character on a new line using a loop.
let string1 = prompt("enter a string");
for (let i = 0; i <= string1.length; i++) {
  console.log(string1[i]);

}


// 10. Take a string input and split it into a list of words using split().
let str7 = "s n e h a";
let words = str7.split(" ");
{
  for (let i = 1; i <= str7.length; i++) {
    console.log(words);
  }
}
