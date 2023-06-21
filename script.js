function sameFrequency(valA,valB){
  // good luck. Add any arguments you deem necessary.
  let val1 = valA.toString();
  let val2 = valB.toString();
 
  if(val1.length && val2.length === 0 ) return false;
  let obj1 = {};
  let obj2 = {};
  if(val1.length === val2.length){
      for(let i = 0 ; i < val1.length; i++){
          obj1[val1[i]] = obj1[val1[i]] + 1 || 1;
          obj2[val2[i]] = obj2[val2[i]] + 1 || 1;
      }

   for(let i in obj1){
   
     if(obj1[i] !== obj2[i]) {

       return false
     }
   }
    
  
return true;
  }
  return false;
}

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
