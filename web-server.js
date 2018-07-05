var count = 0;

require('net').createServer(function (conn){
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    // res.end('<h1>Hello world</h1>');

     conn.write(
         '\n > welcome to /033[92mnode-chat\033[39m!'
         + '\n >' + count + ' other people are connected at this time.'
         + '\n > please enter your name: '

     );

     count++;

     conn.on('data' ,function(data){
         console.log(data);

     });

     conn.on('close', function(){
         count--;
     });

     conn.setEncoding('utf8');


     console.log('new connection');



}).listen(3000, function() {
    console.log('server listenging on 3000');
});



