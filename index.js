
const express = require('express');
// const router = require('./routes/users.js');
//import bodyParser from 'body-parser';
//the whole application lies in 'app' variable
const app = express();
//port for backend ususally we use 3000 for frontend
//not going to change the port(using capital letters)
const PORT = 5000;

//?app.use(bodyParser.json()); was not ok?
app.use(express.json());

// app.use(express.json());



require('./routes/users.js')(app)
require('./routes/users.js')(app)
require('./routes/users.js')(app)
require('./routes/users.js')(app)
//get request 
//browser can only may get request
app.get('/', (req,res)=>{res.send('Hello from homepage')});
app.listen(PORT,() => console.log(`Server running on port: http://localhost :${PORT}`));
