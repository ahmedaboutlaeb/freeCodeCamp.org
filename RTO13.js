function rot13(str) {

let arr =[]
for(let  i=0; i<str.length; i++){
arr.push(str.charCodeAt(i))
}
console.log(arr)
  let RTO = arr.map(function(item){
    if(item<65||item>91) return item
    else if(item!==32&& item>=78&& 64<item<91)return item-13
    else if(item!==32&& item<78 ){  
      return item+13
    }
    
})
console.log(RTO)
let trans = RTO.map(function(item){
  return String.fromCharCode(item)
}).join('')
console.log(trans)
return trans

}



rot13("SERR PBQR PNZC");
