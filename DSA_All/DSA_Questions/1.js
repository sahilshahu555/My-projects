// console.log("Hello")
//! 1 Array Contains Duplicates answer is true;
// let arr=[1,1,2,3]

// var containsDuplicate = function(arr) {
//    let set = new Set(arr)
//    return set.size!== arr.length
// };
// console.log(containsDuplicate(arr))

//! 2 Valid Anagram String ,  answer is true;
// let s1="abcd";
// let s2="adcb";
// const isValidAnagramString=(s1,s2)=>{
//   return s1.split("").sort().join("") === s2.split("").sort().join("") 
// }
// console.log( isValidAnagramString(s1,s2) )

//! 3 Two Sum :- Array, answer=[0,1];

// let arr= [2,7,11,15], target = 9
// var twoSum = function(arr, target) {
//    const map=new Map();
//    for( let index in arr){
//       const pairT = target - arr[index];
//       if(map.has(pairT)) return [index,map.get(pairT)]
//        map.set(arr[index],index) 
//    }
// };
// console.log(twoSum(arr,target))


//! 4 Max Sum of SubArray in Array ;  answer=6;

// let arr = [-2,1,-3,4,-1,2,1,-5,4] 

// var maxSubArray = function(arr) {
//    let sum = 0; let max=0;

//    for (let i = 0; i < arr.length; i++) {
//          sum += arr[i];
//          max = Math.max(max, sum);
//          if (sum < 0){ sum = 0; }
//    }
//  return max;
// };
// console.log(maxSubArray(arr))

//! 5  Product of Array Except Self,  Output=[24,12,8,6] ;

//  let s="product od array without 1 element like remove 1 and got 2*3*4=24"
//  let arr=[1,2,3,4];
//  let Output=[24,12,8,6];

// var productExceptSelf = function(arr) {
   
//    let ans=[];
// for(let i=0; i<arr.length; i++){
//    let product=1;
//     for(let j=0; j<arr.length; j++){
//          if(i!=j){
//              product*=arr[j];
//          }
//     }
//      ans.push(product)
// }
// return ans;
// };
// console.log(productExceptSelf(arr))

//! 6  





