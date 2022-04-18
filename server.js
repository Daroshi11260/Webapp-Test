const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser')

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use(bodyParser.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    const name = req.query.name ? req.query.name : 'new user';
    res.render('index', {
        user: name
    });
});

app.post('/', (req, res) => {
    const postData = req.body.data;
    console.log(req.body.firstName)
    res.send(req.body.firstName);
})

const port = 9000
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});