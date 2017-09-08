const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('Request received for:', req.url)
    res.end('<h1>HELLO WORLD</h1>');
})
server.listen(4000);
