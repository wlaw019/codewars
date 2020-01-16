findEvenIndex = (arr) => {
  let sumLeft = 0;
  let sumRight = 0;


  for (var index = 0; index < arr.length; index++) {
    for (var i = index+1; i < arr.length; i++) {
      sumRight = sumRight + arr[i];
    }
    // console.log(sumRight);

    for (var k = 0; k < index; k++) {
      if (index!==0) {
        sumLeft = sumLeft + arr[k]
      }
    }
    // console.log(sumLeft);

    if (sumLeft===sumRight) {
      return index;
    } else if (index===arr.length-1) {
      return -1;
    }

    sumLeft = 0;
    sumRight = 0;


  }
}

console.log(findEvenIndex([20,10,30,10,10,15,35]));
// findEvenIndex([1,2,3,4,3,2,1]);
