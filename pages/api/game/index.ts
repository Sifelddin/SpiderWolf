import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../script';

export default async function gameHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      let games = await prisma.game.findMany();
      res.status(200).json(games);
      break;
    case 'POST':
      let game = await prisma.game.create({ data: req.body });
      res.status(201).json(game);
      break;
    default:
      null;
  }
}
