let promise=new Promise((resolve,reject)=>{
    console.log("I Am a Promise");//state : Pending
    
})
let promise1=new Promise((resolve,reject)=>{
    
    resolve("Success") //state:fullfilled
    
})
let promise2=new Promise((resolve,reject)=>{
   
    reject("An Error") //state : rejected
    
})


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
        resolve("Success")
        // reject("Network error")
        
    })
}

let result=getPromise();

//if fullfilled then only it works 
result.then((res)=>{
    console.log("Promise Fullfilled",res);
    
})

//if rejected then only it works
result.catch((err)=>{
    console.log("Promise Rejected",err);
    
})

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data1");
            resolve("Success")
            
        },4000)
    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some Data2");
            resolve("Success")
            
        },4000)
    })
}
console.log("Featching Data1...");

let data1=asyncFunc()
data1.then((res)=>{
    console.log("Featching Data2...");
      let data2=asyncFunc2()
      data2.then(()=>{

      })

})

//promise chaining

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data ",dataId);
            resolve("Success")
        },3000)
    })
}

getData(1).then((res)=>{
    getData(2).then((res)=>{
        getData(3).then((res)=>{
            console.log(res);
            
        })
    })
})