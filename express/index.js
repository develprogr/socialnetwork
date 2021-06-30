const express = require('express');
const app = express();
// const port = 4000;


app.get('/api', (req, res) => {
    res.json({
        title: 'Hello World!'
    });
});

app.get('/api/users', (req, res) => {
    res.json({
        users: [
            {
                name: 'Viktor',
                age: 40
            },
            {
                name: 'Marina',
                age: 21
            },
            {
                name: 'Denis',
                age: 30
            }
        ]
    });
});


app.listen(4000, () => console.log('Listning server on the port ' + 400));