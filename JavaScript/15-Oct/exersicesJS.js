// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts
​
// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]
​
// ** solve it one time using for loop and another using while loop
// **try more cases by your self
​
​
/******* Start Your Code *********/

​var arr=[];
for( var i=0; i<10; i++){
    if(no % 2 !==0){
        odd = odd + i
        arr.push(odd)
    } else {
        even=even+i
    }
}



​
/******* End Your Code ********* */
​
​
​
​
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array
​
// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6
​
// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6
​
// ** solve it one time using for loop and another using while loop
// **try more cases by your self
​
​
/******* Start Your Code *********/
​var arr1=[1,2,4,8,9]
var sum=0;
function aveArray(arr){

    for(var i = 0 ; i < arr.length; i++ ){
        sum=sum+arr[i];
    }
    total=sum/arr.length;
    console.log(total);
-----------------------------------------------
    var i=0;
    sum=0;
    while(i < arr.length){
        sum=sum+arr[i];
        i++;
    }
    total=sum/arr.length;
    console.log(total);
}
​
/******* End Your Code ********* */
​
​
​
​
// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
​
​
​
/******* Start Your Code *********/
var no;
function factorial(no) {
  if (no == 0) {
    return 1;
  } else if (no < 0) {
    return -1;
  } else {
    return no * factorial(no - 1);
  }
}
var n = factorial(2);
console.log(n);
​
/******* End Your Code ********* *5