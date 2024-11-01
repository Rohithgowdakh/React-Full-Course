
const student = [
    {
        id: 1,
        name: "Praveen",
        city: "USA",
        age:24
    },
    {
        id: 2,
        name: "Nandan",
        city: "UK",
        age:24
    },
    {
        id: 3,
        name: "Keerthi",
        city: "India",
        age:28
    },
    {
        id: 4,
        name: "Ujjwal",
        city: "Russia",
        age:26
    }
]

//map function

const getNames=student.map((result,index,i)=>{
   
    console.log(result,index);
    // return result.name;
    return `${result.name} city is ${result.city}`
})
console.log(getNames);

//find() method

const findMethod=student.find((find)=>{
    return find.age>25;
    
})
console.log(findMethod);//it returns first matched value only

//filter() method

const filterMethod=student.filter((filter)=>{
    return filter.age>25;
})

console.log(filterMethod);//it returns all matched value

//some() method

const someMethod=student.some((someoneAgeIsGT25)=>{
    return someoneAgeIsGT25.age>25;
})

console.log("Some Students Age is Greater then 25 :"+someMethod);//if some of elements are match it returns boolean value true otherewise false.

//every() method

const everyMethod=student.every((everyoneAgeIsGT25)=>{
    return everyoneAgeIsGT25.age>25;
})

console.log("All Students Age is Greater then 25 :"+everyMethod);//it returns true when every elements are matches the condition otherwise false.

//includes() method

const array=['apple','bannana','mango'];
const res=array.includes("bannana")
console.log(res);//determines array conatain specified element ,returns boolean value TRUE or FALSE

//insexof() method

let index=array.indexOf('mango')
console.log(index);//it returns 1st matched index value if element present in list otherwise -1 based on ===(strict equality)

index=array.indexOf('mangomo')
console.log(index);//returns -1

const array3 = [1, 2, 3, 4, 5];//it returns 1st matched index value if element present in list otherwise -1 based on condition(callback)
console.log(array3.findIndex(num => num > 3));  // 
console.log(array3.findIndex(num => num > 6));  // Output: -1 

const fruits= ["Banana","Apple","Orange","Mango"];
let reverse=fruits.reverse();
console.log(reverse);//reverse the original array

//reverse function
let colors=['white','green','black','pink'];
colors.reverse();
console.log(colors);

//concate() function
let concate=fruits.concat(colors);//cocate 2 array elements
console.log(concate);

//push() function
fruits.push("Grapes") //add new element at last
console.log(fruits);

//pop() method
let res1=fruits.pop(); //remove top-most element
console.log(fruits);

//unshift() function
fruits.unshift("Strawberry")//add new element at first
console.log(fruits);

//shift() function
fruits.shift();//remove first element
console.log(fruits);

//forEach() function
let num=[2,3,4,3,7,6,8]
num.forEach((result)=>{ 
    console.log(result); //Used to read the elements from array , it doesnt return array
    
})

//slice() function
let numbers=[2,3,4,5,6,7,89,4,35,76]
let slicednum=numbers.slice(2,7);//extract part of array & return new array
console.log(slicednum);

let sentence="Hello Welcome to React"
let slicedsent=sentence.slice(4,19)//extract part of string & return new array
console.log(slicedsent);


//splice() function
numbers.splice(2,0,99,88,44,445,22);//it modifies original array by add,remove or replace original array {array.splice(start, deleteCount, item1, item2, ...);
console.log(numbers)//if give 0 it dont delete any element

numbers.splice(2,4)//it deletes 4 elements from index 2
console.log(numbers);

numbers.splice(2,2,45,45,25,25)
console.log(numbers);

//reduce() fuction

const even=[2,4,6,8,10,12,14]
const sum=even.reduce((accum,currentval)=>accum+currentval,0)//it iterates over an array and accumulate a single value based on function.
                    //array.reduce(callback, initialValue --- means set to 0 for sum purpose to accum);
console.log(sum);

const arrays=[[1,2],[3,4],[5,6]]
const concatAll=arrays.reduce((acc,curr)=>acc.concat(curr),[])//initially acc is empty[] array after we add all subarrays of array
console.log(concatAll);


const color=['Pink','Green','Blue','Yellow','Pink','White','Blue']
const countOfEach=color.reduce((acc,curr)=>{//initially acc is empty{} object after we add key:value pair of elements
    acc[curr]=(acc[curr] || 0) +1;// initially e.g, acc['Pink'] is undifined so it take 0+1 =1 return {Pink:1}
    return acc //if use {} return is mandatory otherwise return optional becouse js arrow function auto takes
    //here color names are key
    //(acc, fruit) => (acc[fruit] = (acc[fruit] || 0) + 1, acc), {}
},{})

console.log(countOfEach);


