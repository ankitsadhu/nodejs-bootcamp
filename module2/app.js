//Nodemon (as development dependencies)  -> npm install nodemon --save-dev 
// Express.js (as production dependencies) -> npm install --save express
//Middleware
//routing
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{ //handles all routes ('/*')
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(9000);