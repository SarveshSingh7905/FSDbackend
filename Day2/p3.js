const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    
    try {
        const myhtml = await fs.readFile('./index.html');
        res.end(myhtml);
    } catch (err) {
        res.statusCode = 200;
        res.end('<h1>Internal Server Error</h1>');
        console.error('Error reading file:', err);
    }
});

server.listen(9000, (err) => {
    if (err)
        console.log("Error:", err);
    else
        console.log("Server running on port 9000");
});
