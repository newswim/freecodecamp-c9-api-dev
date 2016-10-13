var express = require('express')
var app = express()

app.get('/', function (request, response) {
    response.send('Hello, World!')
})

/*
I can pass a string as a parameter, and it will check to see whether
that string contains either a unix timestamp or a natural language date 
For example: January 1, 2016

*/

app.get('/check/:time', function (request, response) {
    var time = JSON.parse(request.params.time)
    if (typeof time == "number") {
        var time = new Date(time);
        var reply = {
            'UTC Time': time.toDateString(), 
            'Unix Time': Date.parse(time)
        };
        response.send(reply);
    };
    response.send(null)
})

app.listen(8080, function () {
    console.log('App listening on port 8080')
})