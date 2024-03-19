const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Bharat!');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.get('/contact', (req, res) => {
    res.send('Hello contact me!');
});

app.get('/blog', (req, res) => {
    res.send('Hello blog!');
});

app.get('/blog/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);

    res.send(`hello ${req.params.slug}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send("hello world");
// });

// app.listen(port, () => {
//   console.log(`example app listening on port ${port}`);
// });
