// what is modules in js \
// modules are reusable pices of code that can be exported form
// one file and impored in anoteher file in js we have two types of moudules
// 1. Built-in Modules
// 2. Custom Modules
function add(a,b){
    return a+b;

}
console.log(add(23,23));

const math =require('./Math');// this is how  we import a module in js

console.log(math.subtract(17,10));//this is how we use the imported module in js