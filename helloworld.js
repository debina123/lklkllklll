var sys = require('sys');
var http = require('http');
var server = http.createServer(
function (request, response) {
response.writeHead(200, {'Content-Type': 'application/json'});
response.write('{"foo": "bar", "baz": "qux"}');
response.end();
}
).listen(8124);
sys.log('Server running at http://127.0.0.1:8124/');
