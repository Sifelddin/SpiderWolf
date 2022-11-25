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
      game && res.status(200).json(game);
      break;
    case 'PUT':
      game = await prisma.game.update({
        where: { id: id as string },
        data: req.body,
      });
      res.status(201).json(game);
      break;
    case 'DELETE':
      game = await prisma.game.delete({
        where: { id: id as string },
      });
      //{ message: 'category deleted successfully ' }
      res.status(202).json(game);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
