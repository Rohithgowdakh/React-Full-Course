function getApi(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            console.log("Weather data");
            resolve("Success")
        }, 3000);
    })
}

async function getweatherApi() {
    await getApi();//1st
    await getApi();//2nd
}

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data ",dataId);
            resolve("Success")
        },3000)
    })
}

(async function getAllData() {
    console.log("getting data1....");
    
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    
})();