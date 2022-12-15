import { Role } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../script';

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  const { method } = req;
  let category = undefined;
  switch (method) {
    case 'GET':
      let categories = await prisma.category.findMany();
      res.status(200).json(categories);

      break;
    case 'POST':
      if (session?.role === Role.ADMIN) {
        try {
          category = await prisma.category.create({ data: req.body });
          res.status(201).json(category);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).end('not allowed');
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
