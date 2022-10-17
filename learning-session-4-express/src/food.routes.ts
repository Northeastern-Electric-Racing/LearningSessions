import express from 'express';
import { isMyFavorite } from './food.controller';

const foodRouter = express.Router();

foodRouter.get('/favorite/:food', isMyFavorite);

export default foodRouter;