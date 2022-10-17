import { Request, Response } from 'express';

const RAINBOW_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export const getColors = (req: Request, res: Response) => {
  // this function should return all the colors in the rainbow...
  return res.status(400).json(RAINBOW_COLORS);
};

export const getRandomColor = (req: Request, res: Response) => {
  // get a random number between 0 and the length of our rainbow array
  const randomIndex = Math.floor(Math.random() * RAINBOW_COLORS.length);

  // get the color from the list
  const color = RAINBOW_COLORS[randomIndex];

  // send back the color
  return res.status(200).json(color);
};

export const isInRainbow = (req: Request, res: Response) => {
  // get the query param :color from the route
  const color = req.params.color;

  // check if it's in the rainbow array
  if (RAINBOW_COLORS.includes(color)) {
    return res.json(true);
  }

  // otherwise we return false
  return res.json(false);
};