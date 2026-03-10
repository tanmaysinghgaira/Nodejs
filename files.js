const fs =require('fs');
// fs stands for file system and it is a built-in module in js that allows us to work with files in our computer
// we can use the fs module to read, write ,delete, rename and many more operations on files in js
fs.writeFileSync('./text.txt',"I am the best trader in the world");
//fs.writefilesync is a method in the fs module that allows us to write data to a file synchronously


// to read a file in js we can use the fs.readfilesync method
const data =fs.readFileSync('./Grind.txt','utf-8');
//fs.readfilesync is a method in the fs module that allows us to read data from a file synchronously
// the first argument of the fs.readfilesync method is the path of the file that we want to read and the second argu
//arugment is the encoding of the file that we want to read
//utf-8 is a character encoding that is used to represent text in computers and  it is the most commonly used encoding for text files in js
console.log(data);