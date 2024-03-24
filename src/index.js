const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

// const cfg = require('./config');


// SSL certificate paths
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Create an express app
const app = express();

// check arguments 
let is_prod = false
if (process.argv.length > 2) {
    is_prod = process.argv[2] == "--prod"
}
// CORS options
const corsOptions = {
    origin: 'https://localhost',
    credentials: true,
};

app.use(express.json());
if (!is_prod) {
    app.use(cors(corsOptions));
}
else {
    app.use(express.static('../react-client/build'));
}

const httpsServer = https.createServer(credentials, app);
start_websocket(httpsServer);


app.get('/api/hello', (req, res) => {
    res.json({
        message: "hello"
    })
});


let PORT = 5443;
if (is_prod) {
    PORT = 443;
}
httpsServer.listen(PORT, () => {
    console.log(`HTTPS Server is running on port ${PORT}`);
});