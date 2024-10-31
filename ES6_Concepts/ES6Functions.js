
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

