import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../script';

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  let game = undefined;
  switch (req.method) {
    case 'GET':
      game = await prisma.game.findFirst({
        where: { id: id as string },
      });
      if (game) {
        res.status(200).json(game);
      } else {
        res.status(404).end("game doesn't exist");
      }
      break;
    case 'PUT':
      try {
        game = await prisma.game.update({
          where: { id: id as string },
          data: req.body,
        });
        res.status(201).json(game);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      try {
        game = await prisma.game.delete({
          where: { id: id as string },
        });
        res.status(204).json({ message: 'game deleted successfully' });
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
