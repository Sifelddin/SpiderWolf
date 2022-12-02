import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../script';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || 'test',
      clientSecret: process.env.GITHUB_SECRET || 'test',
    }),
    CredentialsProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: String;
          password: String;
        };

        const user = await prisma.user.findFirst({
          where: {
            email: email as string,
          },
        });
        if (user) {
          return user;
        } else {
          throw new Error('invalid credentials');
        }
      },
    }),
  ],
  pages: { signIn: '/login' },
});
