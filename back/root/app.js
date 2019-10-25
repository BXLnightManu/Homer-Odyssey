// Declaration of all the necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { registerAuthRoutes } = require('./auth');
const port = 3000;
const app = express();

// Configuration of the application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

// Functionalities of the application
// Implementation of the API part
app.get("/", (req,res) => {
    res.send("youhou");
})
registerAuthRoutes(app);

// Launch of the node server
app.listen( port, err => {
    if(err) {
        // in case of a not found path, I return the 'Not Found' 404 code
        const err = new Error('Not Found');
        err.status = 404;
        throw err;
    }
    console.log('Listening on port '  +  port);
})