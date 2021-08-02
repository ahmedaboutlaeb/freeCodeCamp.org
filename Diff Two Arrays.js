function diffArray(arr1, arr2) {
  let union = [];
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    if (!union.includes(arr1[i]))  { union.push(arr1[i]);}
  }
  
  for (let i = 0; i < arr2.length; i++) {
      if (!union.includes(arr2[i]))  {union.push(arr2[i]);}
    }
  console.log(union)

  for(let i = 0 ; i<union.length;i++){
    if(arr1.includes(union[i])&& !arr2.includes(union[i])){
      newArr.push(union[i])

    }else if(!arr1.includes(union[i])&&arr2.includes(union[i])){
      newArr.push(union[i])

    }
  }
  console.log (newArr)
  
}
//another shot solution 
function differArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item=>!arr1.includes(item)||!arr2.includes(item)
  );
}


  

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  

  differArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);