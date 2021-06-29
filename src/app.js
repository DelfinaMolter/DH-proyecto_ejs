const express = require('express');
const app = express();
const path= require('path');

// Server Start
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=> console.log('Servicio corriendo en http://localhost:'+ app.get('port')));

// Public Access
app.use(express.static(path.resolve(__dirname, '../public')));

// View Engine
app.set('view engine', "ejs");
app.set('view', path.resolve(__dirname, './views'));

// Routes App
const main = require('./routers/mainRouter')
app.use(main);

