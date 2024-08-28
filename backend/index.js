import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
// import pg from 'pg';

const app = express();
const port = 5050;

app.use(express.static(path.resolve("./frontend")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.render('.frontend/index.html');
})

app.listen(port, ()=>{
    console.log("Server running on port ", port);
});