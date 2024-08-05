//Merging of Two arrays

let arr=[1,2,3,4,5]
let arr1=[6,7,8,9,0]
let res=arr.concat(arr1)
console.log(res)              //Output: [1, 2, 3, 4, 5,6, 7, 8, 9, 0]

//==============================================================================================================================================================


//Reverse of an Array

let arr2=[9,8,7,6,5,4,3,2,1,0]
console.log(arr2.reverse())        //Output: [0, 1, 2, 3, 4, 5, 6,7 ,8, 9]

//==============================================================================================================================================================

//Slicing of an Array

let arr3=[22,15,73,98,87,66,59]
console.log(arr3.slice(1,5))  //Output: [15,73,98,87]

//===============================================================================================================================================================

//Intersection of two arrays

let arr4=[22,9,29,20,24,10,57]
let arr5=[34,22,10,44,12,20,8]
let res1=arr4.reduce((acc,current)=>{
    if(arr5.includes(current)){
        acc.push(current);
    }
    return acc;
},[]);
console.log(res1)   //Output: [ 22, 20, 10 ]

//=================================================================================================================================================================

//Rotating of Array

let arr6=[1,2,3,4,5]
let rotate=2
let res2=arr6.slice(rotate).concat(arr6.slice(0,rotate));
console.log(res2)    //Output: [ 3, 4, 5, 1, 2 ]

//==================================================================================================================================================================

//Adding two arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const sum = array1.map((num, index) => num + array2[index]);
console.log(sum);                

//Output: [5, 7, 9]

//==============================================================================================================================================

//Subtracting two arrays

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];

const diff = array3.map((num, index) => num - array4[index]);
console.log(diff); 

// Output: [-3, -3, -3]

//==============================================================================================================================================

//Comparing two arrays

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  
  const isEqual = arraysEqual(arr1, arr2);
  console.log(isEqual)

// Output: true

//================================================================================================================================================

//Inserting array element at specified position

function insertAtPosition(arr, element, position) {
    arr.splice(position, 0, element);
    return arr;
  }

  const array = [1, 2, 3, 5];
  const element = 4;
  const position = 3;
  
  const result = insertAtPosition(array, element, position);
  console.log(result); 
  
// Output: [1, 2, 3, 4, 5]

//================================================================================================================================================
