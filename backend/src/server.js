const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const moviesRouter = require('./api/routes/movie.router');


async function startServer() {
    const app = express();
    app.use(express.json());
    app.use(cors());

    // routes
    app.use('/api/movies',moviesRouter);
    

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

