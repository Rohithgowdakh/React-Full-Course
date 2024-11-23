console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
},4000)
console.log("three");
console.log("four");

function add(a,b){
    console.log (a+b);
}
function sub(a,b){
    console.log (a-b);
}
function calculator(a,b,callback){
    callback(a,b)
}

calculator(3,4,add);

const hello=()=>{
    console.log("callback");
    
}
setTimeout(hello,3000);

function setTime(){
    let d=new Date();
    let res=document.querySelector("#demo")
    
    res.innerHTML=d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();
    if(d.getHours()>12){
        res.innerHTML=d.getHours()-12+" : "+d.getMinutes()+" : "+d.getSeconds();
    }
}

setInterval(setTime,1000);

