import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../script';

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  let category = undefined;
  switch (req.method) {
    case 'GET':
      category = await prisma.category.findFirst({
        where: { id: id as string },
      });
      category && res.status(200).json(category);
      break;
    case 'PUT':
      category = await prisma.category.update({
        where: { id: id as string },
        data: req.body,
      });
      res.status(201).json(category);
      break;
    case 'DELETE':
      category = await prisma.category.delete({
        where: { id: id as string },
      });
      //{ message: 'category deleted successfully ' }
      res.status(202).json(category);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
