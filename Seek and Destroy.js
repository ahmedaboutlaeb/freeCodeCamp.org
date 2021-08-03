function destroyer(arr) {
  let restArr = Array.from(arguments).slice(1)
 console.log(restArr) 
 
 console.log(arr)
 return arr.filter(function(item){
   return  !restArr.includes(item)
 })
  
 
   
 }
 
 destroyer([1, 2, 3, 1, 2, 3], 2, 3);