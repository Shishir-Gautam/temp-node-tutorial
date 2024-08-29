
//http.js
function httpServer() {
    console.log('server is active')
    const http = require('http');

    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.end('Welcome to our home page');
        } else if (req.url === '/about') {
            res.end('About me');
        } else {
            res.end(`
                <h1>Oops!</h1>
                <p>We can't seem to find the page that you are looking for</p>
                <a href="/">Back to home</a>
            `);
        }
    });

    server.listen(5051, () => {
        console.log('Server is running on port 5050');
    });
}

// Start the server

// Export the function (without calling it) for use in other files
module.exports = httpServer;

//npm- global command, comes with node
//npm--version
//local dependency - use it only in this particular project 
//npm i <packageName>


//global dependency - use it in any project
//npm install -g <packageName>
//suda npm install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/ package)
//manual approach (create package.json in the root , create properties etc)
//npm init (Step by step))
//npm init -y (Everything default , to avoid manual approach and answer yes to all questions)
