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
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH,PUT,DELETE');
    next();
})

app.use(router, cors(), express.json(), express.urlencoded({
    extended:true
}))

app.listen(port,()=>{
    console.log(`Server is Running at Port:${port}`)
});

// API End point Home Page

router.get('/', (req,res) =>{
    res.sendFile('./views/html/index.html', {root: __dirname});
})

//----------------------- USER ROUTES ----------------------------//

// GET all users

router.get('/users', (req,res)=>{
    db.getConnection((err,connected)=>{
        if(err)throw err;
        const query = `SELECT * FROM users`;
        connected.query(query, (err,results) =>{
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
        // connected.release();
    })
})

// GET user with id

router.get('/users/:id', (req,res)=>{
    db.getConnection((err,connected)=>{
        if(err)throw err;
        const query = `SELECT * FROM users WHERE id=?`;
        connected.query(query, req.params.id, (err,results) =>{
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
        connected.release();
    })
})

//POST and register user

router.post('/users', bodyParser.json(), async (req,res) =>{
    
    db.getConnection((err,connected)=>{
        if(err) throw err
        const check = `SELECT email FROM users WHERE ?`;
        let email = {
            email: req.body.email
        }
        connected.query(check, email, async(err,results)=>{
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
                connected.query(query, [req.body.firstName,req.body.lastName,req.body.gender,req.body.address,req.body.phoneNumber,req.body.email,req.body.userPassword], (err,results) =>{
                    if(err)throw err;
                    res.json({
                        status:200,
                        results: `Successfully registered ${results.affectedRows} user(s)`
                    })
                })
            }
        })
        connected.release();
    })

})

//PATCH and login user

router.patch('/users', bodyParser.json(), (req,res) =>{
    db.getConnection((err,connected)=>{
        if(err) throw err;
        const check = `SELECT * FROM users WHERE ?`;
        let email = {
            email:req.body.email
        };
        connected.query(check, email, (err,results)=>{
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
                                cart: results[0].cart,
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
        connected.release();
    })
})

// Verification Route

router.get('/verify', (req,res)=>{
    const token = req.header('x-auth-token');
    if(!token){
        res.json({
            status:400,
            result: "There is no user logged in"
        })
    }else{
        jwt.verify(token,process.env.secretKey, (err,decodedToken) =>{
            if(err) throw err;
            res.json({
                status:200,
                token: decodedToken
            });
        })
    }
})

// DELETE user with specific id

router.delete('/users/:id', (req,res) =>{
    
    db.getConnection((err,connected)=>{
        if(err) throw err;
        const query = `DELETE FROM users WHERE id=?;
        ALTER TABLE users AUTO_INCREMENT = 1;`
        connected.query(query, req.params.id, (err,results)=>{
            if(err) throw err;
            res.json({
                status:200,
                results: `Sucessfully deleted the user`
            })
        })
        connected.release();
    })

})

// Update User with specific id

router.put('/users/:id', bodyParser.json(), async (req,res)=>{
    db.getConnection(async (err,connected)=>{
        if(err) throw err;
        salt = await bcrypt.genSalt();
        req.body.userPassword = await bcrypt.hash(req.body.userPassword,salt);
        const query = `UPDATE users SET firstName = ?, lastName = ?, gender = ?, address = ?, phoneNumber = ?, email = ?, userPassword = ? WHERE id = ?`;
        connected.query(query, [req.body.firstName, req.body.lastName, req.body.gender, req.body.address, req.body.phoneNumber, req.body.email, req.body.userPassword, req.params.id], (err,result) =>{
            if(err) throw err;
            res.json({
                status: 200,
                results: result
            })
        })
        connected.release();
    })
})

// --------------- CART ROUTES ------------------- //

// GET cart from user with specific id

router.get('/users/:id/cart', (req,res) => {
    db.getConnection((err,connected)=>{
        if(err)throw err;
        const query = `SELECT id,cart FROM users WHERE id = ?`;
        connected.query(query, req.params.id, (err,results)=>{
            if(err) throw err;
            if(results.length >0){
                if(results[0].cart == null){
                    res.json({
                        status:200,
                        results: `This user's cart is empty`
                    });
                }else{
                    res.json({
                        status:200,
                        results: JSON.parse(results[0].cart)
                    })
                }
            }else{
                res.json({
                    status:400,
                    results: `There is no user with that ID`
                });
            }
        })
        connected.release();
    })
})

// POST a new product to the cart of the user with a specific id

router.post('/users/:id/cart',bodyParser.json(), (req,res)=>{
    db.getConnection((err,connected)=>{
        if(err)throw err;
        const check = `SELECT cart FROM users WHERE id = ?`;
        connected.query(check,req.params.id,(err,results)=>{
            if(err) throw err;
            if(results.length> 0){
                let newCart;
                if(results[0].cart == null){
                    newCart = []
                }else{
                    newCart = JSON.parse(results[0].cart);
                }
                let product = {
                    "id" : newCart.length+1,
                    "prodName" : req.body.prodName,
                    "prodUrl" : req.body.prodUrl,
                    "description": req.body.description,
                    "price" : req.body.price
                }
                newCart.push(product);
                const query = `UPDATE users SET cart = ? WHERE id=?`;
                connected.query(query,[JSON.stringify(newCart),req.params.id], (err,results)=>{
                    if(err)throw err;
                    res.json({
                        status:200,
                        results: "Successfully added item to cart"
                    })
                })
            }else{
                res.json({
                    status:400,
                    result: `There is no user with that id`
                })
            }
        })

        connected.release();
    })

})

// DELETE user cart

router.delete('/users/:id/cart', (req,res)=>{

    db.getConnection((err,connected)=>{
        if(err)throw err;
        const check = `SELECT id,cart FROM users WHERE id = ?`;
        connected.query(check, req.params.id, (err,results)=>{
            if(err) throw err;
            if(results.length >0){
                const query = `UPDATE users SET cart = null WHERE id = ?`;
                connected.query(query, req.params.id,(err,results)=>{
                    if(err) throw err
                    res.json({
                        status:200,
                        results: `Successfully cleared the user's cart`
                    })
                });
            }else{
                res.json({
                    status:400,
                    result: `There is no user with that ID`
                });
            }
        })
        connected.release();
    })
})

// GET specific item from user cart

router.get('/users/:id/cart/:cartId', (req,res)=>{

    db.getConnection((err,connected)=>{
        if(err)throw err;
        const check = `SELECT id,cart FROM users WHERE id = ?`;
        connected.query(check, req.params.id, (err,results)=>{
            if(err) throw err;
            if(results.length > 0){
                if(results[0].cart != null){
                    const result = JSON.parse(results[0].cart).filter((x)=>{
                        return x.id == req.params.cartId;
                    })
                    res.json({
                        status:200,
                        result: result[0]
                    })
                }else{
                    res.json({
                        status:400,
                        result: "This user has an empty cart"
                    })
                }
            }else{
                res.json({
                    status:400,
                    result: "There is no user with that id"
                });
            }
        })
        connected.release();
    })

})

// DELETE specific item from user cart

router.delete('/users/:id/cart/:cartId', (req,res)=>{

    db.getConnection((err,connected)=>{
        if(err)throw err;
        const check = `SELECT id,cart FROM users WHERE id = ?`;
        connected.query(check, req.params.id, (err,results)=>{
            if(err) throw err;
            if(results.length > 0){
                if(results[0].cart != null){
                    const result = JSON.parse(results[0].cart).filter((x)=>{
                        return x.id != req.params.cartId;
                    })
                    result.forEach((e,i) => {
                        e.id = i+1
                    });
                    const query = `UPDATE users SET cart = ? WHERE id = ?`;
                    connected.query(query, [JSON.stringify(result),req.params.id], (err,results)=>{
                        if(err) throw err;
                        res.json({
                            status:200,
                            result: "Successfully deleted item from cart"
                        });
                    })
                }else{
                    res.json({
                        status:400,
                        result: "This user has an empty cart"
                    })
                }
            }else{
                res.json({
                    status:400,
                    result: "There is no user with that id"
                });
            }
        })
        connected.release();
    })

})

// --------------- PRODUCT ROUTES ---------------- //

// GET all products

router.get('/products', (req,res) => {

    db.getConnection((err,connected)=>{
        if(err) throw err;
        const query = `SELECT * FROM products`;
    
        db.query(query, (err,results) =>{
            if(err) throw err;
            if(results.length >0){
                res.json({
                    status:200,
                    results: results
                });
            }else{
                res.json({
                    status:400,
                    result: `There are no products in the database`
                })
            }
        })
        connected.release();
    })
})

// GET product with a specific id

router.get('/products/:id', (req,res)=>{

    db.getConnection((err,connected)=>{
        if(err)throw err;
        const query = `SELECT * FROM products WHERE id=?`;
        db.query(query, req.params.id, (err,results) =>{
            if(err) throw err;
            if(results.length >0){
                res.json({
                    status:200,
                    results: results
                });
            }else{
                res.json({
                    status:400,
                    result: `There is no product with that id`
                })
            }
        })
        connected.release();
    })
})

// DELETE product with specific id

router.delete('/products/:id', (req,res)=>{

    db.getConnection((err,connected)=>{
        if(err)throw err;
        const check = `SELECT * FROM products WHERE id=?`;
        db.query(check,req.params.id, (err,results)=>{
            if(err)throw err;
            if(results.length>0){
                const query = `DELETE FROM products WHERE id=?;
                ALTER TABLE products AUTO_INCREMENT=1`;
    
                db.query(query, req.params.id, (err,results)=>{
                    if(err) throw err;
                    res.json({
                        status:200,
                        results: `Successfully deleted the product`
                    })
                })
            }else{
                res.json({
                    status:400,
                    results: "There is no product with that id"
                });
            }
        })
        connected.release();
    })

})

// POST a new product to the database

router.post('/products', bodyParser.json(), (req,res) =>{

    db.getConnection((err,connected)=>{
        if(err)throw err;
        const token = req.header('x-auth-token');

        jwt.verify(token,process.env.secretKey, (err,decodedToken)=>{
            if(err)throw err;
            const query = `INSERT INTO products(prodName,prodUrl,description,quantity,price,createdBy) VALUES(?,?,?,?,?,?)`;
            db.query(query,[req.body.prodName, req.body.prodUrl,req.body.description, req.body.quantity, req.body.price,decodedToken.user.id], (err,results) =>{
                if(err) throw err;
                res.json({
                    status:200,
                    results: `Successfully added ${results.affectedRows} new product`
                });
            })

        })
        connected.release();
    })

})

// PUT and edit product info in the database

router.put('/products/:id', bodyParser.json(), (req,res)=>{

    db.getConnection((err,connected)=>{
        if(err)throw err;
        const query = `UPDATE products SET prodName = ?, prodUrl = ?, description=?, quantity = ?, price = ? WHERE id = ?`;
    
        db.query(query, [req.body.prodName, req.body.prodUrl,req.body.description, req.body.quantity, req.body.price, req.params.id], (err,results) =>{
            if(err) throw err;
            res.json({
                status:200,
                message: `Successfully edited item`
            })
        })
        connected.release();
    })
})