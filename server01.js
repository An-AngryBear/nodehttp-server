const http = require('http');
const server = http.createServer();
const { createReadStream } = require('fs');

server.on( 'request', (req, res) => {
    createReadStream('./index.html').pipe(res);
})

server.listen(4000, () => {
    console.log("listening on port 4000")
});