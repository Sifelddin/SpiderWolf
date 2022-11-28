import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../script';

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  let user = undefined;
  switch (req.method) {
    case 'GET':
      user = await prisma.user.findFirst({
        where: { id: id as string },
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).end("user doesn't exist");
      }
      break;
    case 'PUT':
      try {
        user = await prisma.user.update({
          where: { id: id as string },
          data: req.body,
        });
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      try {
        user = await prisma.user.delete({
          where: { id: id as string },
        });

        res.status(204).json({ message: 'user deleted successfully' });
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
