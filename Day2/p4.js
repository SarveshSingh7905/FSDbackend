const http = require('http');

const server = http.createServer((req, res) => {
    let data = [
        {
            "id": 1,
            "username": "admin",
            "password": "1234"
        },
        {
            "id": 2,
            "username": "user",
            "password": "5678"
        }
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data)); // Convert to JSON string before sending
});

server.listen(9000, (err) => {
    if (err)
        console.log("Error:", err);
    else
        console.log("Server running on port 9000");
});

