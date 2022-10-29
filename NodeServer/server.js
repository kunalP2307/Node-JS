const http = require('http');

const server = http.createServer((request,response)=>{
    if(request.url == '/'){
        response.write('hey, Kunal here!');
        response.end()
    }
    if(request.url == '/index'){
        response.write(JSON.stringify(['Java','Android',"Javascript"]))
        response.end()
    }
})

server.listen(3102)
console.log("Listening on 3100 ")