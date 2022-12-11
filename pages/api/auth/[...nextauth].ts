import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../script';
import bcrypt from 'bcrypt';

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
          let result = await bcrypt.compare(password as string, user.password);
          if (result) {
            return user;
          } else {
            throw new Error('invalid email or password');
          }
        } else {
          throw new Error('invalid email or password');
        }
      },
    }),
  ],
  pages: { signIn: '/login' },
  callbacks: {
    jwt(params) {
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      return params.token;
    },
    session({ session, token }) {
      if (token?.role) {
        session.role = token?.role;
      }
      return session;
    },
  },
});
