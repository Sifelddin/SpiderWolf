import { Role } from '@prisma/client';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (req.nextauth.token?.role === undefined) {
      return NextResponse.rewrite(new URL('/login', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.role === Role.USER || token?.role === Role.ADMIN;
      },
    },
  },
);

export const config = {
  matcher: ['/protected', '/profile', '/dashboard/:path*'],
};
