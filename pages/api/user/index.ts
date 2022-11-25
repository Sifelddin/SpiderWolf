import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../script';

export default async function gameHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        let users = await prisma.user.findMany();
        res.status(200).json(users);
      } catch (e) {
        res.status(e.requestResult.statusCode).send(e.message);
      }
      break;
    case 'POST':
      try {
        let user = await prisma.user.create({ data: req.body });
        res.status(201).json(user);
      } catch (e) {
        res.status(e.requestResult.statusCode).send(e.message);
      }
      break;
    default:
      null;
  }
}
