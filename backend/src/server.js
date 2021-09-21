const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const moviesRouter = require('./api/routes/movies.router');
const filesRouter = require('./api/routes/files.router')

async function startServer() {
    const app = express();
    app.use(express.json());
    // app.use(cors());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    // routes
    app.use('/api/movies',moviesRouter);    
    app.use('/api/files', filesRouter);

    app.use('/api/public', express.static(__dirname + '/public/img'));

    // DB
    require('./models');
    console.log('DB Intialized');


    // Initialize the app.
    let server = app.listen(config.port, function () {
        let port = server.address().port;
        console.log("App now running on port", port);
    });
}

startServer();

