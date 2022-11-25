import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../script';

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  let category = undefined;
  switch (method) {
    case 'GET':
      let categories = await prisma.category.findMany();
      res.status(200).json(categories);
      break;
    case 'POST':
      category = await prisma.category.create({ data: req.body });
      res.status(201).json(category);
      break;
    default:
      null;
  }
}
