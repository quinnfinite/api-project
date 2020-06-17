//Import our packages
const express = require('express');
const morgan = require('morgan');

//Declare any necessary variables such as app and port
const app = express();
const port = 8000;

//Invoke middleware
app.use(morgan('tiny'));

//Define our endpoints
app.get('/', (request, response) => {
  response.send('Hello World');
});

//Start our server
app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}`);
});