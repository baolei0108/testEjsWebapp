require('http').createServer(function (req, res){
    console.log(req.headers);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>Hello world333</h1>');


}).listen(3002, function() {
    console.log('监听3002端口');
});