function sumFibs(num) {
  let arr = [1, 1];
  for (let i = 0; arr[arr.length - 1] < num; i++) {
    arr.push((arr[i] + arr[i + 1]))
  }
  console.log(arr)
  console.log(arr[[arr.length - 1]])
  if (arr[[arr.length - 1]] > num) { arr.pop() }
  console.log(arr)
  let finalnum = arr.filter(function (item) {
    return item % 2 !== 0
  }).reduce(function (x, y) {
    return x + y
  })
  
  console.log(finalnum)
  return finalnum;
}

sumFibs(10);