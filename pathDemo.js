
//this file is for getting or creating a path of a certain file or directory

import  url  from 'url'
import path from 'path'

//the path keyword have different methods
//basename - it returns the filename of the path provided
//dirname - it returns the directory where the file is located
//join - used to create a path based on the arguments saved in it this one does not return an absolute path 
//resolve - same as the join but it returns an absolute path
//an absolute path is the one that does not start with /
//extname - it returns the extension of the file

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename,__dirname);

let bn = path.basename(__filename);
let dir = path.dirname(__filename);
let ext = path.extname(__filename);
let join = path.join(__dirname,'dir1','dir2','tt.txt');
let res = path.resolve(__dirname,'dir1','dir2','tt.txt');

    console.log(bn);
    console.log(dir);
    console.log(ext);
    console.log(join);
    console.log(res);
