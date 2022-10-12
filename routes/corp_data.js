// import express from 'express';
const express = require("express");
const sql = require("msnodesqlv8");
const { response } = require("express");

const app = express();
app.use(express.json());
const router = express.Router();
const connectionString = "server=192.168.10.14;Database=Little_Dev;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

router.post('/', (req, res) => {
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    const query = `select count(*) from corporate_data where email_id = '${userEmail}' and password = '${userPassword}'`;
    sql.query(connectionString, query, (err, rows) => {
        if (rows[0]?.Column0 < 1)
            res.send("Invalid user id or password");
        else
            res.send("Success");
    });
});

router.post('/email', (req, res) => {
    let userEmail = req.body.email;
    const query = `select count(*) from corporate_data where email_id = '${userEmail}'`;
    sql.query(connectionString, query, (err, rows) => {
        if (rows[0].Column0 < 1)
            res.send("Email not registered");
        else
            res.send("Success");
    });
});

router.post('/update-password', (req, res) => {
    console.log(req.body);
    let userEmail = req.body.email;
    let password = req.body.password;
    const query = `update corporate_data
    set password = '${password}'
    where email_id = '${userEmail}'`;
    sql.query(connectionString, query, (err, rows) => {
        if (err)
            res.send("Some Error Occured");
        else
            res.send("Password updated");
    });
});

module.exports = router;