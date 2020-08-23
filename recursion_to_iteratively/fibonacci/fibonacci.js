/*
Write a recursive function that prints the Fibonacci sequence of a given number.
 The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers.
  For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

##### recursive
```
const fibonacci = n => {
  if(n <= 0){
    return 0;
  }
  if(n === 1){
    return 1;
  }
  return fibonacci(n - 1) + fibonacci((n - 2 ));
};
```
*/


const fibonacci = int => {
  if( int <= 0 ) return 0 ;
  if( int ===1 ) return 1; 

  let x = 1 , res = 0, temp; 
  for(let i = 0 ; i < int; i++){
    temp = x ; 
    x = x + res ; 
    res = temp ; 
  }
  return res; 
};

console.log(fibonacci(4));

