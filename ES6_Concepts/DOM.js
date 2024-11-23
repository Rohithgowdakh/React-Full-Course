function demo(){
  document.getElementById("demo").innerHTML="Hello Dom" 
}
console.log(window);
window.console.log("hello")
window.alert("")

console.dir(window.document)//window is optional word
console.dir(document.body.childNodes[1].innerHTML="hello rohith")
let parah1= document.getElementById("demo");
console.dir(parah1);

let parah= document.getElementsByClassName("demo2");
console.dir(parah)

let parah3= document.getElementsByTagName("p");
console.dir(parah3)

let parah4= document.querySelector(".demo2 ");//return 1st element
console.dir(parah4)

let parah5= document.querySelectorAll("p");//return All element
console.dir(parah5)

let heading=document.querySelector("h1")

heading.innerText="Welcome New"

heading.innerHTML="<i>Welcome italic<i/>"

heading.tagName

// heading.textContent()