


const tOH = (rings, beg='A',  aux='B', des='C') => {
  if(rings === 0){
    return;
  }
  tOH(rings-1, beg,des,aux);

  console.log(`moved ring ${rings}, from ${beg} ---> ${des}`);

  tOH(rings-1, aux,des,beg);
};
console.time();
tOH(4);
console.timeEnd();
