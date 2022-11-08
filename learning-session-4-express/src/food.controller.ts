import { Request, Response } from 'express';

const FAV_FOOD = "pizza";
const LAME_FOOD = "cheesecake"

export const isMyFavorite = (req: Request, res: Response) => {
    const food = req.params.food;

    if (FAV_FOOD === food) {
      return res.status(200).json(true);
    }

    if (LAME_FOOD === food) {
      return res.status(400).json("ew");
    }
  
    return res.json(false);
};