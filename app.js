const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const router = express.Router()

const port = process.env.PORT || 3200;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

const indexMainRoute = require('./apiRoutes/index.js');

app.use('/', indexMainRoute);
app.use('/', routes);
app.use('/user', users);
app.use('/emandamento', );

app.listen(port, ()=>{
    console.log("Running at port:", port);
})