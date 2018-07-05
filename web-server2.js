var qs = require('querystring');

require('http').createServer(function (req, res){
    console.log(req.headers);
    if('/' == req.url){

    res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.end('<h1>Hello world222</h1>');

    res.end([
        '<form method="POST" action="/url" >'
        , '<h1>My form</h1>'
        , '<fieldset>'
        , '<label>Personal information</label>'
        , '<p>what is your name?</p>'
        , '<input type="text" name="name">'
        , '<p><button>Submit</button></p>'
    ].join(''));

}
else if('/url' == req.url && 'POST' == req.method) {
    //res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.end('You sent a <em>' + req.method + '</em> request');
    var body = '';
    req.on('data', function(chunk) {
        body += chunk;

    });
    req.on('end', function() {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('<p>Content-Type: ' + req.headers['content-type'] + '</p>'
    + '<p>Data:</p><pre>' + body + '</pre>' +'<pre>' + 'you input name is: '+ qs.parse(body).name + '</pre>');

    });

}

else {
    res.writeHead(404);
    res.end('Not Found');

}



}).listen(3001, function() {
    console.log('监听3001端口');
});