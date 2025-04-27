import http from 'http';

const users = [
    {id:1,name:"system barida",location:"muhanga"},
    {id:2,name:"cyubahiro",location:"huye"},
    {id:3,name:"Gambira",location:"Nyamagabe"},
    {id:4,name:"ishimwe",location:"Nyanza"},
    {id:5,name:"iradukunda",location:"muhanga"},
    {id:6,name:"irakoze eric",location:"Kamonyi"},
    {id:7,name:"Byishimo aime",location:"Nyagatare"},
    {id:8,name:"nshimiyumuremyi legis",location:"Rubavu"},
    {id:9,name:"niyokwizerwa oscar",location:"Burera"},
    {id:10,name:"imenyi alexandre",location:"kigali"},
    {id:10,name:"ronaldo cristiano",location:"kigali"}
];

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','application/json');
    const userName = users.map((p => p.name.toUpperCase()));
    res.end(JSON.stringify(userName));

    if(req.method === 'GET' && req.url === '/cr7'){
        res.statusCode = 200;
        res.end(JSON.stringify({message : 'welcome to the one el mejor jugador en el mundo'}));
    }else if(req.method === 'GET' && req.url === '/'){
        
            res.statusCode = 200;
            res.end(JSON.stringify({message : 'data does not exist'}));
    }else{
        res.statusCode = 400;
        res.end(JSON.stringify({message : 'the player you take as GOAT is not the one you think he or she is'}));
    }
})

server.listen(5000, () =>{
    console.log('i do not think that it is going to work')
})