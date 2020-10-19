// Create an empty array
// Use a loop to add the numbers from 1 to 10 to the array
// Create two variables
// Variable 1 to hold the sum of the odd numbers in the array
// Variable 2 to hold the sum of the even numbers in the array
// Create one function to make the summation process and use it to make the summation process
// Print both variables at the end of the program


var arr=[];
var odd=0;
var even=0;


for(var i = 1; i <= 10; i++) {
    arr.push(i);
    sum(i);
}


function sum(no){
    if(no % 2 !==0){
      odd = odd + no;
    }
    else{
        even = even + no;
    }
}

document.write("Odd numbers sum:" + " " + odd);
document.write("Even numbers sum:" + " " + even);
