//there are many ways of reading a file in node either synchronous or asynchronous

import { error } from 'console';
// import fs from 'fs'
import fs from 'fs/promises';

//1. this method is using callback;
//  fs.readFile('./text.txt','utf-8',(err,data) => {
//     if(err) throw error;
//     console.log(data);
// });

//2.this method is using synchronous version of reading files

// const readFile1 =fs.readFileSync('./text.txt','utf-8');
// console.log(readFile1);

//3.this is for reading files using promises

// fs.readFile('./text.txt','utf-8')
// .then(data => console.log(data))
// .catch(error => error);

//this method for reading file using async/await
const readIt = async () => {
try {
     const aa = await fs.readFile('./text.txt','utf-8');
     console.log(aa)
} catch (error) {
    console.log(error);
}    
}
readIt()
