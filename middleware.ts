import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // if (req.nextauth.token?.role === 'USER') {
    //   NextResponse.redirect(new URL('/'));
    // }
    // if (req.nextauth.token?.role === 'ADMIN') {
    //   NextResponse.redirect(new URL('/'));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.role === 'USER' || token?.role === 'ADMIN';
      },
    },
  },
);

export const config = {
  matcher: ['/api/category', '/protected', '/profile', '/admin'],
};
