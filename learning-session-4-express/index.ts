import express from 'express';
import colorsRouter from './src/colors.routes';
import foodRouter from './src/food.routes';

const port = 8080; // the port the server runs at
const app = express(); // the app
app.use(express.json()); // this lets us use jsons

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// we can define another route and function here
app.get('/date', (req, res) => {
  const today = new Date();
  res.send(today);
});

// everything declared in this router will be under the '/colors' path
app.use('/colors', colorsRouter);

// food thingie
app.use('/food', foodRouter);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
