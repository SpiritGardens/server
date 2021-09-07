var Express = require('express');
var app = Express();

app.get('/', (req, res) => {
    res.send('Server up and running, Boss!');
});

app.listen(process.env.PORT || 8001, () => console.log('Listening on port 8001'));