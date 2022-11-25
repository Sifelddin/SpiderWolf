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
      user && res.status(200).json(user);
      break;
    case 'PUT':
      user = await prisma.user.update({
        where: { id: id as string },
        data: req.body,
      });
      res.status(201).json(user);
      break;
    case 'DELETE':
      user = await prisma.user.delete({
        where: { id: id as string },
      });
      //{ message: 'category deleted successfully ' }
      res.status(202).json(user);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
