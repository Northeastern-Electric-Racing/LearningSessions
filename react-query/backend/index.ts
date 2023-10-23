import express from 'express';
import cors from 'cors';
import colorsRouter from './src/colors.routes';

const port = 8080; // the port the server runs at
const app = express(); // the app
app.use(express.json()); // this lets us use jsons

const options: cors.CorsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: 'GET, POST, DELETE',
  credentials: true,
  preflightContinue: true,
  exposedHeaders: '*',
  optionsSuccessStatus: 204
};
app.use(cors(options));

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

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
