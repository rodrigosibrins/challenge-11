const express = require('express');
const app = express();
const port = 4000;


app.use(express.json());


app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

function handleRegister(req, res){
    console.log(req.body);
}

function handleLogin(req, res){}

app.post('/register', handleRegister);
app.put('/login', handleLogin);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})