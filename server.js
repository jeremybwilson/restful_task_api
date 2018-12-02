const express = require('express'),
    session = require('express-session'),
    parser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    path = require('path'),

    port = process.env.PORT || 8000,
    // invoke express and store the result in the variable app
    app = express();

app.use(express.static(path.join(__dirname, 'dist/public')));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use( function(request, response, next){
    console.log(`requesting url: ${request.url}`);
    next();
})
app.use(session({
    secret:'superSekretKitteh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        maxAge: 600000
    }
}));

//connect to DB
require('./server/config/database');
// app.use(require('./server/routes'));
app.use('/api', require('./server/routes'));
app.use(require('./server/routes/catchall.routes'));

// port
app.listen(port, () => console.log(`Express server listening on port ${port} for Restful Task API`));    // ES6 way
