# Big O notations 

## question 1
#### What is the Big O for this?

1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

#### answer(s)

#### part 1 
`O(1)`
```
const findPlay = () => {
    ask = 'does anyone want to play with my dog?'
    return 'i do'
}
```
since you asking a question to everyone (idk how this would be coded....)
since you just doing something once and expecting a response 
it's an `O` notation of `(1)`

#### part2
`O(n)`

```
const findPlayDate = () => {
    people [
        {name: 'dave', play :false},
        {name : 'tammy' , play: true},.....(15 total)]

    for(let i = 0 ; i < people.length ; i++){
        if(people[i].play === true){
            return people[i].name
        }
    }
    return 'no one found '
}

```
because it seem like to be a indexOf() function were there is ways one person out if 15 that will be able to take the request 




## question 2
#### Even or odd

What is the Big O of the following algorithm? Explain your answer

```
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```


#### answer
`O(1)`
because it's one val going in and one going out based on wether if *condition* is met

## question 3
#### Are you here?

What is the Big O of the following algorithm? Explain your answer

```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

#### answer
`O(n^2)`

because it's a loop within a loop running

## question 4
#### Doubler
What is the Big O of the following algorithm? Explain your answer
```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```
#### answer
`O(n)`
because it's running tough a loop doing something to each number in the array

## question 5
#### Naive search
What is the Big O of the following algorithm? Explain your answer

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

#### answer
`O(log(n))`
in best case it only run's once,
but in worst,
it run's though the whole array.



## question 6
#### Creating pairs
What is the Big O of the following algorithm? Explain your answer

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```
#### answer
`O(n^2)`

## question 7
#### Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

#### answer
`O(n)`
since it's running for `n` length 


## question 8
####  An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```
#### answer
`O(n)`


## question 9
#### Random element

What is the Big O of the following algorithm? Explain your answer

```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```
#### answer
`O(1)`
because it only run's once despite the length of the array  

## question 10
#### What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

#### answer
`O(log(n))`
because it "could fun for the full length"


## question 11
#### Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

* There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
* The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

Input:

|Rod A        |	Rod B |	Rod C  |
|-------------|-------|--------|
|----		  |       |        |
|---------	  |       |        |	
|-------------|       |        |


|Rod A   |	Rod B |	Rod C        |
|--------|------- |--------------|
|		 |        |----          |
|	     |        |---------     |
|        |        |------------- |
#### answer
`O(n^2)`
1 = 1
2 = 3 
3 = 7 
4 = 15
```
const tOH = (rings, beg='A',  aux='B', des='C') => {
  if(rings === 0){
    return;
  }
  tOH(rings-1, beg,des,aux);

  console.log(`moved ring ${rings}, from ${beg} ---> ${des}`);

  tOH(rings-1, aux,des,beg);
};
``` 
this has to be more one of the harder puzzle ive done in a min. 

from my research and understanding 
the idea is
move ring to des
then move 2nd ring to aux 
then tack small ring to aux
so another ring can be place on des
then move aux thing to des, 
then source ring to des, 

## question 12
#### Iterative version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

### part 1 
#### Counting Sheep

Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

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


#### answer
`O(n)`
because it runs for `n` length 


#### iteratively


```
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

```
`O(n)` again since it runs for n lenth of sheep (counting sheep)

#### answer 
`O()`

### part 2 
#### Power Calculator


Write a function called `powerCalculator()` that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

* `powerCalculator(10,2)` should return `100`
* `powerCalculator(10,-2)` should return `exponent should be >= 0`

##### recersive

```
const powerCalculator=( x, powOf) =>{
  if(powOf <= 0 ){
    return 1;
  }
  if(powOf === 1 ){
    return x;
  }
  return x * powerCalculator(x , powOf - 1);
};
```

#### answer
`O(1)`
because it's taking 2 numbers and spits out a results 

#### iteratively

```
const powerCalculator = (x,y) => Math.pow(x,y);
```

#### answer
`O(1)`
unless if it's running for y number of times 


### part 3 
#### Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

##### recursive

```
const gnirtsEsrever = str =>{
  if(!str.length){
    return '';
  }
  return str.slice(str.length - 1, str.length) + gnirtsEsrever(str.slice(0,-1));
};
```

#### answer
`O(n)`
since it is reversing a string it has to run for 



#### iteratively


```
const strRe = str => str.split('').reverse().join('');
```


#### answer

since i think the reverse method is a sorting function of some sort. 
i guessing that this is still `O(n)` since with this boi here 
it has to do
1 split string to an array
2 reverse array
3 join array




### part 4 
#### nth Triangular Number

Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

```
                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth?  
```
##### recursive

```
const nthTriangularNumber = n =>{
  if( n <= 0){
    return 0;
  }
  return  n + nthTriangularNumber(n - 1);
};
```

#### answer
`O(n)`
it's running it's self for n time adding onto it's self 1 less then it did the time before till it hit 0 

#### iteratively


```
const nthNumber = n => n * (n + 1)/2
```


#### answer
`O(1)`
quick mafs


### part 5 
#### String Splitter

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

#### answer
~`O(1)`~
`O(n)` most likely since there all doing something ... n number of times 

#### iteratively


```
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

```

#### answer
`O(n)`
since it's checking for something n number of time ... i think 



### part 6
#### Fibonacci

Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

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

#### answer
`O(2n)`... while rewriting this i know there should be way to get this to n(1);
... but that seems a big out there at this time.



#### iteratively


```
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
```


#### answer
`O(n)` runs "for" i number of times 
so a little better then above 


### part 7 
#### Factorial

Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

##### recursive
```
const factorial = n => {
  if(n <= 1){
    return 1; 
  }
  return n * factorial(n - 1);
};
```

#### iteratively


```

```


#### answer
`O()`

## question 13
#### Recursive Big O

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

#### answer
- see above


## question 14
#### Iterative Big O

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

#### answer
- see above


