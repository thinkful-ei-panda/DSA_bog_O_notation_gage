/**
 * Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

* Input: 3
* Output:
    * 3: Another sheep jumps over the fence
    * 2: Another sheep jumps over the fence
    * 1: Another sheep jumps over the fence
    * All sheep jumped over the fence

```
const countingSheep = (n , i=0) => {
  if(n === i){
    return console.log(noSheep);
  }
  console.log(`${n- i}: ${ifSheep}`);
  countingSheep(n , i + 1);
};
```

 */

const countingSheep = n => {
  let res = '';
  for(let i = 0 ; i <= n ; i++){
    if(i === n){
      res+= 'all sheep have jumped over the fence.... now got the #### to sleep';
    }else{
      res += `sheep number ${i + 1} has jumped over the fence \n`;
    }
  }
  return res;
};
console.log(countingSheep(5));