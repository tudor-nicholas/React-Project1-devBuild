
import express, { response } from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import Cors from 'cors';
import stripe from 'stripe';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Cors());
const stripeSecretKey = 'SECRET CODE';
const stripeInstance = stripe(stripeSecretKey);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project1'
});

app.post('/createCheckoutSession', async (req, res) => {
    const { price } = req.body;
  
    try {
        const lineItems = price.map((price) => ({
          price: price.item,
          quantity: 1,
        }));
    
        const session = await stripeInstance.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: lineItems,
          mode: 'payment',
          success_url: 'http://localhost:3000/checkoutSuccess',
          cancel_url: 'http://localhost:3000/checkoutError',
        });
    
        res.json({ sessionId: session.id });
      } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
      }
});

app.get('/getCartItem', (req, res) => {

    const id = req.query.id

    const sqlQ = `SELECT * FROM items WHERE iditems = '${id}'`;

    db.query(sqlQ, (error, result) => {
        res.send(result);
    });
});

app.get('/getList', (req, res) => {

    const sqlQ = `SELECT * FROM items`;

    db.query(sqlQ, (error, result) => {
        res.send(result);
    });
});

app.get('/getUserCart', (req, res) => {

    const uId = req.query.id

    const sqlQ = `SELECT name, email FROM users WHERE idUsers = '${uId}'`;

    db.query(sqlQ, (error, result) => {
        res.send(result);
    });
});

app.get('/getUserById', (req, res) => {

    const uId = req.query.id

    const sqlQ = `SELECT name FROM users WHERE idUsers = '${uId}'` ;

    db.query(sqlQ, (error, result) => {
        res.send(result);
    });
});

app.get('/getUser', (req, res) => {
    
    const uPassword = req.query.password;
    const uEmail = req.query.email;
    const sqlQ = `SELECT * FROM users WHERE email = '${uEmail}' AND password = SHA2('${uPassword}', 256)` ;

    db.query(sqlQ, (error, result) => {
        res.send(result);
    });
});

app.post('/postUser', (req, res,) => {

    const uName = req.body.name
    const uEmail = req.body.email
    const uPassword = req.body.password
    const uCart = req.body.cartNumber

    const sqlQ = `INSERT INTO cart (idCart) VALUES ('${uCart}');`

    db.query(sqlQ, (error, result) => {});

    const sqlQ2 = `INSERT INTO users (name, email, password, userCart) VALUES ('${uName}', '${uEmail}', SHA2('${uPassword}', 256), '${uCart}')`;

    db.query(sqlQ2, (error, result) => {});
});

app.post('/postItem', (req, res,) => {
    
    const iId = req.body.id
    const iName = req.body.name
    const iDesc = req.body.desc
    const iPrice = req.body.price
    const iFille = req.body.data
    
    const sqlQ = `INSERT INTO items (iditems, itemName, itemDescription, itemPrice, itemPhoto) VALUES ('${iId}', '${iName}', '${iDesc}', '${iPrice}', '${iFille}');`

    db.query(sqlQ, (error, result) => {});

});

app.post('/postOrder', (req, res,) => {
    
    const oName = req.body.name
    const oEmail = req.body.email
    const oAddress = req.body.address
    
    const sqlQ = `INSERT INTO orders (orderName, orderEmail, orderAddress, orderStatus) VALUES ('${oName}', '${oEmail}', '${oAddress}', 'Pending');`

    db.query(sqlQ, (error, result) => {});

});

app.delete('/deleteItem', (req, res) => {

    const idItem = req.query.id;

    const sqlQ = `DELETE FROM items WHERE iditems = '${idItem}';`;

    db.query(sqlQ, (error, result) => {});
});

app.listen(3001, () => {
    console.log('running');
});
