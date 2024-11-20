let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
  console.log("The button was clicked");
    let a=0;
    a++
    console.log(a);
}                           //in event only last event will execute if give same nodename to both event
btn1.onclick=()=>{
    console.log("The button was clicked 2");
      let a=0;
      a++
      console.log(a);
  }

let div=document.querySelector("div")

div.onmouseover=()=>{
    console.log("we are inside div");
    
}
div.onmouseover=(e)=>{
    console.log("we are inside div");
    console.log(e);//it gives mouse event object
    console.log(e.type);//it gives type 
    console.log(e.target);//it gives target elemnt in html
    console.log(e.clientX,e.clientY);//it gives position (eg. 200 122)
}

let btn2=document.querySelector("#btn2")
btn2.addEventListener("click",()=>{
    console.log("Button 1 was clicked-Handler1");
    
});                                   //in addEventListener both listeners are execute
btn2.addEventListener("click",()=>{
    console.log("Button 1 was clicked-Handler2");
});

const handler3=()=>{
    console.log("Button 1 was clicked-Handler3");  
}
btn2.addEventListener("click",handler3);
btn2.addEventListener("click",()=>{
    console.log("Button 1 was clicked-Handler4");
});

btn2.removeEventListener("click",handler3)