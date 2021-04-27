const http = require("http")

var server = http.createServer((request, response) => {
    let body = [];
    console.log('\033[90m new connection!\033[39m');
    
    request.on("error", function(err){
        console.log(err);
    });

    request.on('data', function(chunk){
        body.push(chunk);
    });

    request.on('end', function(){
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Hello Marco\n');
    });

});


server.listen('3000', function(){
    console.log('\033[96m Server listening on *:8088\033[39m');
})

