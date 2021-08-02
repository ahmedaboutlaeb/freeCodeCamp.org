function sumAll(arr) {
  const Min = arr[0]>arr[1]?arr[1]:arr[0]
  const Max = arr[0]>arr[1]?arr[0]:arr[1]
  let sum =0;
  for(let i=Min;i<=Max;i++){
    sum+=i;

  }
  return sum;
}

sumAll([1, 4]);