//Select the boxes


//isolate those elements with that box class name to select them all
const boxes = document.querySelectorAll('.box');
//returns a node list
//so we need to transform it into an array

//we called the slice method on the array prototype and setting the 'this variable'
//to the boxes in this case

                      //ES5:

var boxesArr5 = Array.prototype.slice.call(boxes);
//now we have an Array
//so we can use all the array methods

//we want to change the boxes to dogerblue
//so we use the forEach method
//callback function, the es5 way, the current element
//change the style-backgroundColor to dogerblue which is a css color name
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});




                    //ES6
const boxesArr6 = Array.from(boxes);
//transform this node list to an array, as simple as that
//es6 rocks
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//the power of es6 guys!

//-------------------------------------------------------------


//Suppose we have a group of children, and we know one of them is an adult/teen

//ES5
var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur){
  return cur >= 18;
});
console.log(full);//f,f,f,t,f,f

//Find out the position of the true elements
console.log(full.indexOf(true));

//now we want see how old that person is, we need to retrieve that exact element
console.log(ages[full.indexOF(true)]);//21


//ES6
//findIndex method, with a callback function that has access to the current element, index and entire array
//retrieve the index for the element in which this callback function ( cur >= 18)
  console.log(ages.findIndex(cur => cur >= 18));//3
//retrieve element
  console.log(ages.find(cur => 18)); //21
