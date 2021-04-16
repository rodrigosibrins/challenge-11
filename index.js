const express = require('express');
const app = express();
const port = 4000;

function handleRegister(req, res){
    console.log(req.body);
}
function handleLogin(req, res){}

app.post('/register', (handleRegister));

app.put('/login', (handleLogin));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})