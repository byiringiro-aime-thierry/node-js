
import http from 'http';
import path from 'path';
import url from 'url';
import fs, { readFile } from 'fs/promises'

const PORT = 8000;

const server = http.createServer( async(req,res) => {
    //const arr = ['aime','thierry','byiringiro','shat','HOPE'];

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);

    try{
        if(req.method === 'GET'){
            let fileName;
            if(req.url === '/'){
                //res.end(arr.join( ));
                fileName = path.join(__dirname,'public','index.html');
            }else if(req.url === '/about'){
                fileName = path.join(__dirname,'public','about.html');
                
            }else{
                throw new Error('the page does not exist');
            }

            const data = await fs.readFile(fileName);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
        }else{
            throw new Error ('Method not allowed');
        }
        
    }catch (error){
         res.writeHead(500,{'Content-Type': 'text/html'})
         res.end('server error')
        
    }
    
})

server.listen(PORT,'127.0.0.1',() => {
    console.log(`THE SERVER IS RUNNIG N**A ON ${PORT}`);
});

