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
      try {
        console.log(req.body);

        let game = await prisma.game.create({ data: req.body });
        res.status(201).json(game);
      } catch (err) {
        console.log(err);

        res.status(500).json(err);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
