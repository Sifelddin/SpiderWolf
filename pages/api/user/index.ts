import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../script';

export default async function gameHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  switch (method) {
    case 'GET':
      let users = await prisma.user.findMany();
      res.status(200).json(users);
      break;
    case 'POST':
      try {
        let user = await prisma.user.create({ data: req.body });
        res.status(201).json(user);
      } catch (e) {
        res.status(500).json(e);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
