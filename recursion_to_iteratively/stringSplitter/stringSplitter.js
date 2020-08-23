/*
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). __**Don't use JS array's split function to solve this problem.**__

* Input: 02/20/2020
* Output: `["02", "20", "2020"]`

##### recursive
```
const stringSplitter = (str, divVal = ' ') => {
  let index = str.indexOf(divVal);
  if(index === -1){
    return[str];
  } 
  return [str.slice(0,index)].concat(stringSplitter(str.slice(index + divVal.length),divVal));
};
```
*/


const stringSplitter = (str, split='') => {

  if(split === '') return str;
 
  let res=[''] , j =0;

  for(let i = 0 ; i < str.length ; i++){
    if(str[i]=== split){
      j++;
      res.push('');
    }else{
      res[j] += str[i];
    }
  }
  return res; 
};


console.log(stringSplitter('02/20/2020' , '/'));