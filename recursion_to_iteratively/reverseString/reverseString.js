/*
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.


```
const gnirtsEsrever = str =>{
  if(!str.length){
    return '';
  }
  return str.slice(str.length - 1, str.length) + gnirtsEsrever(str.slice(0,-1));
};
```

*/


const strRe = str => str.split('').reverse().join('');

console.log(strRe('321'));