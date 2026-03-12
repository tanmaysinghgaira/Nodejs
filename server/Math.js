function add(a,b){
    return a+b;

}
function subtract(a,b){
    return a-b;
}
module.exports =add; // this is how we export a module in js

//the correct way to export multiple functions in js is to use an object to export the functions 
module.exports ={
    add:add,
    subtract:subtract
}