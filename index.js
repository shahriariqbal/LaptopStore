// file system module for accessing file -> fs
const fs = require('fs');
const http = require('http');
const url = require('url');

const json =  fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

//1st part of creating server
const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;



    if(pathName === '/products' || pathName === '/'){

        res.writeHead(200, {'Content-type': 'test/html'});
        res.end('This is the products page');

    }else if(pathName === '/laptop' && id < laptopData.length){

        res.writeHead(200, {'Content-type': 'test/html'});
        res.end( `This is the Laptop page for laptop ${id}!`);

    }else{

        res.writeHead(404, {'Content-type': 'test/html'});
        res.end('URL was not found on the server!!');

    }


});

//2nd part of creating server
//have to listen to specific port and specific IP address
//listen() => tell node.js that always keep listening of certain and certain IP address
//port: 1337 -> standard in node  others:- 3000, 8000
//ip address:- localhost(127.0.0.1)
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now');
});
//in browser try  http://127.0.0.1:1337/