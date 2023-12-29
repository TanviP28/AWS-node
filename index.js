const authbind = require('authbind');
const http = require('http');

// Use authbind to create an HTTP server listening on port 80
const server = authbind(http.createServer((req, res) => {
    res.write('Node successfully installed'); // write a response to the client
    res.end(); // end the response
}));

const port = 80;

// Start the server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

