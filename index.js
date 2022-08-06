require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./config/dbcon');
const bcrypt = require('bcrypt');
const app = express();
const cors = require('cors');

const router = express.Router();

const port = process.env.PORT || 3000;

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.use(router, cors(), express.json(), express.urlencoded({
    extended:true
}))

app.listen(port);

router.get('/', (req,res) =>{
    res.sendFile('./views/html/index.html', {root: __dirname});
})

router.get('/products', (req,res) => {
    const query = `SELECT * FROM products`;

    db.query(query, (err,results) =>{
        if(err) throw err;
        res.json({
            status:200,
            results: results
        });
    })
})

router.get('/products/:id', (req,res)=>{
    const query = `SELECT * FROM products WHERE id=?`;
    db.query(query, req.params.id, (err,results) =>{
        if(err) throw err;
        res.json({
            status:200,
            results: results
        });
    })
})

router.get('/users', (req,res)=>{
    const query = `SELECT * FROM users`;
    db.query(query, (err,results) =>{
        if(err) throw err;
        if(results.length <1){
            res.json({
                status: 204,
                results: "There are no users"
            })
        }else{
            res.json({
                status: 200,
                results: results
            })
        }
    })
})

router.get('/users/:id', (req,res)=>{
    const query = `SELECT * FROM users WHERE id=?`;
    db.query(query, req.params.id, (err,results) =>{
        if(err) throw err;
        if(results.length <1){
            res.json({
                status: 204,
                results: "There are no users with that id"
            })
        }else{
            res.json({
                status: 200,
                results: results
            })
        }
    })
})

router.post('/users', bodyParser.json(), async (req,res) =>{
    const check = `SELECT email FROM users WHERE ?`;

    let email = {
        email: req.body.emal
    }

    db.query(check, email, async(err,results)=>{
        if(err) throw err;
        if(results.length >0){
            res.json({
                status: 400,
                result: "There is already a user with that email"
            })
        }else{
            salt = await bcrypt.genSalt();
            req.body.userPassword = await bcrypt.hash(req.body.userPassword,salt);
            const query = `INSERT INTO users(firstName,lastName,gender,address,phoneNumber,email,userPassword) VALUES(?,?,?,?,?,?,?);`
            db.query(query, [req.body.firstName,req.body.lastName,req.body.gender,req.body.address,req.body.phoneNumber,req.body.email,req.body.userPassword], (err,results) =>{
                if(err)throw err;
                res.json({
                    status:200,
                    results: results.affectedRows
                })
            })
        }
    })
})

router.patch('/users', bodyParser.json(), (req,res) =>{
    const check = `SELECT email FROM users WHERE ?`;
    let email = {
        email:req.body.email
    };
    db.query(check, email, (err,results)=>{
        if(err) throw err;
        if(results.length >0){
            bcrypt.compare(req.body.userPassword, results[0].userPassword, (err,info) =>{
                if(info){
                    const payload = {
                        user:{
                            id: results[0].id,
                            firstName: results[0].firstName,
                            lastName: results[0].lastName,
                            gender: results[0].gender,
                            address: results[0].address,
                            phoneNumber: results[0].phoneNumber,
                            email: results[0].email,
                            userPassword: results[0].userPassword
                        }
                    }
                    jwt.sign(payload,process.env.secretKey, (err,token)=>{
                        if(err) throw err;
                        res.json({
                            status:202,
                            token: token
                        })
                    })
                }else{
                    res.json({
                        status: 401,
                        results: "Password is Incorrect"
                    })
                }
            })
        }else{
            res.json({
                status: 400,
                results: "There is no user with that email"
            })
        }
    })
})
