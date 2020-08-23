/*
Write a recursive function that finds the factorial of a given number.
 The factorial of a number can be found by multiplying that number by each number between itself and 1.
  For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

##### recursive
```
const factorial = n => {
  if(n <= 1){
    return 1; 
  }
  return n * factorial(n - 1);
};
```
*/

const factorial = n => {
  if(!n)return 0;
  if(n === 1 ) return 1;

  let res = 1 , i = 0;
  
  while(i<n)
  {
    res *= (n - i);
    i++;
  }
  return res;
};

console.log(factorial(5));