const f1=true;
console.log(f1 ? "it is true":" it is false");
const f2=false;
f2 ? console.log("it is true") : console.log("it is false");//rendering list of value if true returns stmt1 else return false

//Check All The Values Are True
const values=[true,false,true]
const allTrue=values.every(value=>value===true) ? "All Are True" : "All Are Not True";
console.log(allTrue);

//check some of the elements are true
const values2=[true,false,false]
const someTrue=values2.some(value=>value===true) ? "some of are true" : "All are false";
console.log(someTrue);

//Check if specific elements in an array match a condition
const values3=[true,false,true];
const specificCheck=(values3[0]==true && values3[2]==true) ? "First and Last are true" : "First and Last are not both true";
console.log(specificCheck);

//check array has specific value
const values4=[1,2,3,4];
const containsSpecVal=(values4.includes(3)) ? "it contains 3": "it not contain 3";
console.log(containsSpecVal);
