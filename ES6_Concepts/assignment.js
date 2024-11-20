let h1=document.querySelector("h1");


h1.innerText=h1.innerText+" from Rohith K H";

let box=document.querySelectorAll(".box");

// box[0].innerText="new unique value 1";
// box[1].innerText="new unique value 2";
// box[2].innerText="new unique value 3";

let i=1;
for(div of box){
    div.innerText=`new unique value is ${i}`;
    i++;
}

let mode=document.querySelector("#mode")
let currMode="light";
// mode.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark"
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currMode="light"
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
    
// })
let body=document.querySelector("body");
mode.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark"
        body.classList.add("dark");
        body.classList.remove("light")
    }else{
        currMode="light"
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(currMode);
    
})