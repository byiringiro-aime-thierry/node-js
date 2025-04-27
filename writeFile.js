//this is for writing to a file 


import fs from 'fs/promises'

const writeIt = async () => {
    try {
        const d = fs.writeFile('./test.txt','Hola me llamo Cristiano Ronaldo');
        console.log('written');
    } catch (error) {
        console.log(error);
    }
}
writeIt();

// and the here we are going to append to a file

const appendit = async () => {
    try {
        const a = fs.appendFile('./test.txt','not so sure that it is going to work');
        console.log('appended');
    } catch (error) {
        console.log(error)
    }
}
appendit();

