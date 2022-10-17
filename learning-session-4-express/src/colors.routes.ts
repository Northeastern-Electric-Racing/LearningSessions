import express from 'express';
import { getRandomColor, isInRainbow } from './colors.controller';

const colorsRouter = express.Router();

colorsRouter.get('/random', getRandomColor);
colorsRouter.get('/in-rainbow/:color', isInRainbow);

export default colorsRouter;
