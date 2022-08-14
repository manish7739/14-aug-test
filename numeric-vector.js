function numeric(arr) {
    let sum = 0 
        i = arr.length;
    while (i--) 
    
     sum = sum + Math.pow(arr[i], 2);
    return sum;
  }
   
  console.log(numeric([0, 2, 4, 6, 8, 10]));