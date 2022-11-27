const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = new express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pirateflix'
});
app.get('/', (req, res) => {
    let string = "select * from filmes";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.listen(5500, () => {
    console.log('Funciona');
})
