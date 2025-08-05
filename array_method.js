let arr = [1, 2, 3, 4, 5];
{
    console.log(arr);
}

let array = [10, 20, 30, 40, 50];

let array2 = [10, 80, 70, 40, 50, 35, 30];
{
    console.log(array.push(60));
    console.log(array);

    console.log(array.pop(60));
    console.log(array);

    console.log(array.unshift(0));
    console.log(array);

    console.log(array.shift(0));
    console.log(array);


    console.log(array.splice(1, 0, 2));
    console.log(array);


    console.log(array.slice(10, 30));
    console.log(array);


    console.log(array.includes(12));


    console.log(array.indexOf(60));//-1 because 60 is removed in the array using pop method

    console.log(array.lastIndexOf(30));

    console.log(array2.sort());

    console.log(array2.reverse());



    let arr1=[1,2,3,4];
    let arr2=[5,6,7,8];
    console.log(arr2.join('-'));

    console.log(arr1.toString());


}

