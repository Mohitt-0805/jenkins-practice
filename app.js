const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>My Jenkins Project 🚀</h1>
        <p>CI/CD is working!</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});