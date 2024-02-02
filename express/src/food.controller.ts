import { Request, Response } from 'express';

export const isMyFavorite = (req: Request, res: Response) => {
  const myFavoriteFood = 'you';

  const foodParam = req.params.food;

  if (foodParam === myFavoriteFood) {
    return res.json(true);
  } else {
    return res.json("Nah, it's you shawty");
  }
};
