var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From CodeKaito" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.get('/welcome', function (req, res) {
    res.send('{ "response": " Welcome! Your Kubernetes cluster is working well" }');
});
app.get('/kubernetes', function (req, res) {
    res.send('{ "response": " I am the test of your k8s" }');
});
app.get('/docker', function (req, res) {
    res.send('{ "response": " I am the test of your docker" }');
});
app.get('/nicolas', function (req, res) {
    res.send('{ "response": " Hello Nic! From k8s" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
