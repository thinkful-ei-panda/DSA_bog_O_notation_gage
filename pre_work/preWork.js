/*========================= TEST PACKAGE =============================*/

let test = console.log;

let array1= [1,2,3];
let array2= [1,2,3,4,5,6,7,8,9,10];
let array3= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

/*=============================================================== */

const sum = x => {
  console.time('sum-timer');
  let sum = 0, ticker =1;
  for (let i = 0 ; i < x.length ; i++){
    sum += x[i];
    ticker ++;
  }
  console.timeEnd('sum-timer');
  return {result : sum , ticker};
};


/*******************************************************/  
/*
test(sum(array1));
test(sum(array2));
test(sum(array3));
*/
/*******************************************************/


const getRandomItem = arr => {
  console.time('random item');
  let ticks =0;
  // get a random number and access that element in the array
  const item = arr[Math.floor(Math.random() * arr.length)];
  ticks++ ;
  console.timeEnd('random item');
  return {
    result : item,
    ticks : ticks,
  };
};
/******************************************/
// test(getRandomItem(array1));
// test(getRandomItem(array2));
// test(getRandomItem(array3));
/******************************************/



const howManyLessThenNitems = (arr, n ) => {
  console.time('how many less');
  let ticks = 0;
  /*If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`.  */
  if(!arr.length || arr [0 >= n]){
    ticks++;
    return 0;
  }
  let lowIndex = 0, highIndex = arr.length;

  while ( highIndex > lowIndex) {
    let midIndex = Math.floor((highIndex + lowIndex)/2);
    /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
    if (arr[midIndex]>= n) {
      highIndex = midIndex;
      ticks++;
    }
    /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
    else if (arr[midIndex +1] < n ){
      lowIndex = midIndex;
      ticks++;
    }
    /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
    else{
      ticks++;
      console.timeEnd('how many less');
      return{
        result : midIndex + 1,
        ticks : ticks
      };
    }
  }
};

test(howManyLessThenNitems(array1, 2));
test(howManyLessThenNitems(array2, 9));
test(howManyLessThenNitems(array3, 99));