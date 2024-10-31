const obj={
    name:"Rohith",
    age:"21",
    city:"Hassan",
}
//normal approach
const getName=obj.name;
console.log(getName);

//Destructuring
const{name}=obj;
console.log(name);

const productid=1;
const productName="Laptop";
const price="100$";
const product={
    productid,
    productName,
    price,
    description:"For Coding"
};

console.log( product.price);

