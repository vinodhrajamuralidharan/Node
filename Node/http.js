const http = require ('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello I am the http server');
    res.end();
  }
});

server.listen(3000);

console.log('Server is listening on port 4210');
