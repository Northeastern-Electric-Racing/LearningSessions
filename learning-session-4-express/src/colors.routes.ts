import express from 'express';
import { getRandomColor, isInRainbow, getColors } from './colors.controller';

const colorsRouter = express.Router();

colorsRouter.get('/random', getRandomColor);
colorsRouter.get('/in-rainbow/:color', isInRainbow);
colorsRouter.get('/colors', getColors);

export default colorsRouter;