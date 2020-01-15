getSum = (a, b) => {
  let sum = 0;

  if (a===b) {
    return a;
  } else if (a<b) {
    while (a<=b) {
      sum = sum + a;
      a = a+1;
    }
  } else if (a>b) {
    while (b<=a) {
      sum = sum + b;
      b = b+1;
    }
  }

  return sum;
}

getSum(-1,2)
