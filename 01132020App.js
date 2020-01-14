

findOutlier = (integers) => {
  let ansArray = [];
  let uniquePosition = 0;
  
  for (var i = 0; i < integers.length; i++) {
    ansArray.push(Math.abs(integers[i]%2));
  }

  console.log(ansArray);

  if (ansArray.indexOf(0)== ansArray.lastIndexOf(0)) {
      uniquePosition = ansArray.indexOf(0);
  } else if (ansArray.indexOf(1)== ansArray.lastIndexOf(1)) {
      uniquePosition = ansArray.indexOf(1);
  }

  // console.log(ansArray.indexOf(-0));
  // console.log(ansArray.lastIndexOf(-0));
  console.log(integers[uniquePosition]);
}


// let integers = [2, 4, 0, 100, 4, 11, 2602, 36];
let integers = [154379262,12894334,160509482,10714872,96655080,40757210,-89156276,18656216,-41992432,55753098,151930792,181173768,-33537736,-106800684,161336084,135157310,-154231830,-138025838,33739360,-152960602,-48015004,69695156,-2286336,-94409445,-52099208,8340112,16532738,7917810];
findOutlier(integers);
